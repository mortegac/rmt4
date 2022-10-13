import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import { getMapbox } from "../Maps/mapbox";
import { token } from "../../variables";

let geocoder = null;

const initGeocoder = ({
  loading,
  geoCoderResult,
  load,
  urlQuery,
  browserLocation,
}) => {
  geocoder = new GeoCoderRia({
    templateCustomGeoCoder: `
       <div style="padding:10px">
          <h2 style="color:#001133; opacity:.8;font-size:16px;line-height:24px;letter-spacing:0.15px;font-weight:400;font-family: 'Nunito Sans', sans-serif;padding:0;margin:0;">{{text}}</h2>
          <p style="color:#001133; opacity:.6;font-size:12px;line-height:16px;letter-spacing:0.25px;font-family: 'Nunito Sans', sans-serif;font-weight:600;padding:0;margin:0;">{{place_name}}</p>
       </div>
      `,
    load,
    urlQuery,
    browserLocation,
  });

  geocoder.on("result", (result) => {
    if (loading) {
      getMapbox().loading(true);
    }

    if (geoCoderResult) {
      const { geometry, context, properties } = result.result;

      result["query"] = {
        latitude: geometry.coordinates[1],
        longitude: geometry.coordinates[0],
        shortcode: validShortCode(context, properties),
      };

      geoCoderResult(result);
    }
  });
};

const validShortCode = (context, properties) => {
  if (
    context &&
    context[context.length - 1] &&
    context[context.length - 1].short_code
  ) {
    return context[context.length - 1].short_code.toUpperCase();
  }

  if (properties && properties["short_code"]) {
    return properties["short_code"].toUpperCase();
  }

  return "US";
};

const getGeocoder = () => {
  return geocoder;
};

class GeoCoderRia {
  constructor(opt = {}) {
    this.options = {};
    this.options["accessToken"] = token;
    this.options["mapboxgl"] = mapboxgl;
    this.options["types"] =
      opt.type ?? "region, country, address, locality, place";
    this.load = opt.load;
    this.urlQuery = opt.urlQuery;
    this.browserLocation = opt.browserLocation;

    if (opt.localGeocoder || opt.localGeocoder) {
      this.options["localGeocoder"] = this.forwardGeocoder;
    }

    if (opt.templateCustomGeoCoder) {
      this.options["s"] = (item) => {
        item["icon"] = item.properties.maki || "marker";
        return this.tmp(opt.templateCustomGeoCoder, item);
      };
    }

    this.geocoder = new MapboxGeocoder(this.options);

    this.setPosition();

    return this.geocoder;
  }

  on(event, callback) {
    this.geocoder.on(event, callback);
  }

  forwardGeocoder(query) {
    const matchingFeatures = [];
    for (let i = 0; i < this.options.localGeocoder.features.length; i++) {
      const feature = this.options.localGeocoder.features[i];
      if (
        feature.properties.title.toLowerCase().search(query.toLowerCase()) !==
        -1
      ) {
        feature["place_name"] = feature.properties.title;
        feature["center"] = feature.geometry.coordinates;
        feature["place_type"] = ["park"];
        matchingFeatures.push(feature);
      }
    }
    return matchingFeatures;
  }

  tmp(template, data) {
    const pattern = /{{\s*(\w+?)\s*}}/g;
    return template.replace(pattern, (_, token) => data[token] || "");
  }

  setPosition() {
    const URLlatitude = this.urlQuery?.lat ?? null;
    const URLlongitude = this.urlQuery?.log ?? null;
    const URLshortcode = this.urlQuery?.code ?? null;
    const URLagentId = this.urlQuery?.agentId ?? null;
    let URLzoom = this.urlQuery?.zoom ?? 13;

    if (URLlatitude && URLlongitude && URLshortcode) {
      this.setPositionByUrlQuery({
        URLlatitude,
        URLlongitude,
        URLshortcode,
        URLagentId,
        URLzoom,
      });
    } else {
      this.setPositionByUserLocation();
    }
  }

  setPositionByUrlQuery({
    URLlatitude,
    URLlongitude,
    URLshortcode,
    URLagentId,
    URLzoom,
  }) {
    window.requestAnimationFrame(() => {
      if (!getMapbox()) {
        return;
      }

      let query = {
        latitude: URLlatitude,
        longitude: URLlongitude,
        shortcode: URLshortcode,
        agentId: URLagentId,
      };

      getMapbox().setUserPosition({
        lat: URLlatitude,
        lng: URLlongitude,
      });
      getMapbox().initCenter({ zoom: URLzoom, ...query });
      getMapbox().addPositionMarker({
        geometry: { coordinates: [URLlongitude, URLlatitude] },
      });
      this.load(query);
    });
  }

  setPositionByUserLocation() {
    const defaultLocation = () => {
      const query = mapQuery(getMapbox().map.getCenter());
      getMapbox().initCenter({ zoom: 6, ...query });
      this.load(query);
    };

    const mapQuery = (obj) => {
      return {
        latitude: obj.lat,
        longitude: obj.lng,
        shortcode: obj.shortcode || "US",
      };
    };

    if (this.browserLocation && "geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          setTimeout(async () => {
            const { body } = await this.geocoder?.geocoderService
              .reverseGeocode({
                query: [longitude, latitude],
                types: ["postcode"],
                reverseMode: "score",
              })
              .send();

            const { context } = body.features[0];
            const query = {
              latitude: latitude,
              longitude: longitude,
              shortcode: context[context.length - 1].short_code.toUpperCase(),
            };

            getMapbox().setUserPosition({
              lat: latitude,
              lng: longitude,
            });
            getMapbox().initCenter({ zoom: 6, ...query });
            getMapbox().addPositionMarker({
              geometry: { coordinates: [longitude, latitude] },
            });
            this.load(query);
          }, 1);
        },
        () => {
          defaultLocation();
        }
      );
    } else {
      defaultLocation();
    }
  }
}

export { initGeocoder, getGeocoder };
