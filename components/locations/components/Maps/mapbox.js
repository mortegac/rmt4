import mapboxgl from "mapbox-gl";
import ControlRefresh from "./control-refresh";
import { token } from "../../variables";
import { getGeocoder } from "../InputGeoCoder/geocoder";

let mapbox = null;
mapboxgl.accessToken = token;

const initMapbox = ({
  mapContainer,
  zoom,
  zoomMarker,
  center,
  handlerLocation,
  loadMap,
  templateMarker,
  load,
}) => {
  mapbox = new MapboxRia(mapContainer, {
    zoom: zoom ?? 11,
    zoomMarker: zoomMarker,
    center: center ?? [-9.1952226, 38.7436214],
    // Todo variable was not defined.
    // templateLoading: templateLoading,
    handler: handlerLocation,
    load,
    loadMap,
    templateMarker,
  });
};

const getMapbox = () => {
  return mapbox;
};

class MapboxRia {
  constructor(container, opt = {}) {
    this.map = new mapboxgl.Map({
      container: container,
      style:
        opt.urlStyle ||
        "mapbox://styles/apiel-riafinancial/ck7oyreha010m1in8pq0rwz9u",
      zoom: Number.isInteger(opt.zoom) ? opt.zoom : 6,
      center: opt.center || [-9.1952226, 38.7436214],
    });
    this.bounds = new mapboxgl.LngLatBounds();
    this.allMarkers = [];
    this.zoomMarker = Number.isInteger(opt.zoomMarker) ? opt.zoomMarker : 16;
    this.classSelectMarker = isString(opt.classSelectMarker)
      ? opt.classSelectMarker
      : "select-marker-map";
    this.templateMarker = isString(opt.templateMarker)
      ? opt.templateMarker
      : "📌";
    this.handler = opt.handler ?? (() => {});
    this.userPos = opt.center || [-9.1952226, 38.7436214];
    this.load = opt.load;

    if (opt.loadMap) {
      this.map.on("load", async () => {
        opt.loadMap();
      });
    }

    if (opt.templateMarker) {
      this.setTemplateMarker(opt.templateMarker);
    }

    let refresh = new ControlRefresh({
      name: "Hola",
      callback: (position) => this.research(position),
    });
    this.map.addControl(refresh, "top-left");
  }

  async research(position) {
    const { lat, lng } = position;

    const { body } = await getGeocoder()
      ?.geocoderService.reverseGeocode({
        query: [lng, lat],
        types: ["postcode"],
        reverseMode: "score",
      })
      .send();

    let context;

    if (body.features[0]) {
      context = body.features[0].context;
      context = context[context.length - 1].short_code.toUpperCase();
    } else {
      context = "US";
    }

    const query = {
      latitude: lat,
      longitude: lng,
      shortcode: context,
    };

    this.setUserPosition({ lat: lat, lng: lng });
    this.map.flyTo({ center: [lng, lat] });
    this.load(query);
  }

  userPosition() {
    return this.userPos;
  }

  setUserPosition(obj) {
    this.userPos = obj;
  }

  flyTo(e) {
    this.map.flyTo({
      center: [e.longitude, e.latitude],
      zoom: e.zoom || this.zoomMarker,
    });
    if (this.handler) {
      this.handler(e);
    }
  }

  initCenter(e) {
    this.map.flyTo({
      center: [e.longitude, e.latitude],
      zoom: e.zoom || this.zoomMarker,
    });
  }

  setTemplateMarker(template) {
    if (isString(template)) {
      this.templateMarker = template;
    }
  }

  setZoomMarker(zoom) {
    if (Number.isInteger(zoom)) {
      this.zoomMarker = zoom;
    }
  }

  geocoder(geo, container) {
    if (document.getElementById(container) && container) {
      geo.addTo("#" + container);
    } else {
      this.map.addControl(geo);
    }
  }

  fitBounds(
    bounds,
    opt = {
      maxZoom: 16,
      padding: { top: 50, bottom: 50, left: 50, right: 50 },
      speed: 8,
      easing(t) {
        return t * (2 - t);
      },
    }
  ) {
    this.map.fitBounds(bounds, opt);
  }

  on(event, callback) {
    this.map.on(event, callback);
  }

  viewMarker(data, opt = {}) {
    data = this.objectToJson(data);
    this.map.flyTo({ center: data.geometry.coordinates, ...opt });
    let mkr =
      this.allMarkers[
        this.allMarkers.findIndex(
          (e) => e.locationId == data.properties.locationId
        )
      ];

    this.selectMarker(mkr?._id);

    if (this.handler) {
      this.handler(data);
    }
  }

  addPositionMarker(marker) {
    const markerEl = document.createElement("div");
    markerEl.className = "position-marker";
    markerEl.innerHTML = `<svg width="104" height="104" viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d)"><circle cx="52" cy="42" r="12" fill="#FBFDFA"/><circle cx="52" cy="42" r="8" fill="#498BFB"/></g><defs><filter id="filter0_d" x="0" y="0" width="104" height="104" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="10"/><feGaussianBlur stdDeviation="20"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.0666667 0 0 0 0 0.2 0 0 0 0.15 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`;

    let mrk = new mapboxgl.Marker(markerEl, {});
    mrk.setLngLat(marker.geometry.coordinates);
    mrk.addTo(this.map);
  }

  addMarker(marker) {
    const popup = new mapboxgl.Popup({ offset: 2 })
      .setHTML(
        `<div class="marker-popup">
            <h4>${marker.properties.name}</h4>
            <span>${marker.properties.address}</span>
        </div>`
      )
      .setLngLat(marker.geometry.coordinates);
    const markerEl = document.createElement("div");
    markerEl.className = "marker-map";
    markerEl.innerHTML = this.templateMarker;

    let _id = Math.random().toString(36).slice(-8);

    markerEl.addEventListener("click", () => {
      this.map.flyTo({
        center: marker.geometry.coordinates,
        zoom: this.zoomMarker,
      });

      this.selectMarker(_id);

      if (this.handler) {
        this.handler(marker);
      }
    });

    this.bounds.extend(marker.geometry.coordinates);

    let mrk = new mapboxgl.Marker(markerEl, { offset: [5, -5] });
    mrk.setLngLat(marker.geometry.coordinates);
    mrk.addTo(this.map);
    mrk["_id"] = _id;
    mrk["locationId"] = marker.properties.locationId;
    this.allMarkers.push(mrk);

    return mrk;
  }

  arrayToGeoJSON(arrays) {
    const features = [];

    arrays.forEach(function (array) {
      const { latitude, longitude, ...rest } = array;
      const feature = {
        type: "Feature",
        properties: rest,
        geometry: {
          type: "Point",
          coordinates: [longitude, latitude],
        },
      };
      features.push(feature);
    });

    return {
      type: "FeatureCollection",
      features: features,
    };
  }

  objectToJson(obj) {
    const { latitude, longitude, ...rest } = obj;

    return {
      type: "Feature",
      properties: rest,
      geometry: {
        type: "Point",
        coordinates: [longitude, latitude],
      },
    };
  }

  markers(data) {
    for (let i = 0; i < data.features.length; i++) {
      this.addMarker(data.features[i]);
    }
  }

  clearAllMarkers() {
    for (let i = this.allMarkers.length - 1; i >= 0; i--) {
      this.allMarkers[i].remove();
    }
  }

  moveByData(data) {
    this.clearAllMarkers();
    this.markers(data);
    const bounds = data.features.map((coords) => [
      coords.geometry.coordinates[0],
      coords.geometry.coordinates[1],
    ]);
    this.fitBounds(this.boundingBox(bounds));
  }

  moveByGeoJSON(data) {
    let arr1 = data.geometry.coordinates;
    let arr2 = [data.geometry.coordinates[0], data.geometry.coordinates[1] + 1];
    this.fitBounds([arr1, arr2]);
  }

  selectMarker(id) {
    let marker = this.allMarkers[this.allMarkers.findIndex((e) => e._id == id)];
    this.allMarkers.map((e) =>
      e._element.classList.remove(this.classSelectMarker)
    );
    marker._element.classList.add(this.classSelectMarker);
  }

  boundingBox(arr) {
    if (!Array.isArray(arr) || !arr.length) {
      return undefined;
    }

    let w, s, e, n;

    arr.forEach((point) => {
      if (w === undefined) {
        n = s = point[1];
        w = e = point[0];
      }

      if (point[1] > n) n = point[1];
      else if (point[1] < s) s = point[1];

      if (point[0] > e) e = point[0];
      else if (point[0] < w) w = point[0];
    });

    return [
      [w, s],
      [e, n],
    ];
  }
}

const isString = (str) => typeof str === "string";

export { initMapbox, getMapbox };
