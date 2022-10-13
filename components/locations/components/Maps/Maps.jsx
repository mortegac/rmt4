import { createRef, useEffect } from "react";
import { getMapbox, initMapbox } from "./mapbox";
import { initGeocoder } from "../InputGeoCoder/geocoder";

export const Maps = ({
  urlQuery,
  map,
  load,
  theme,
  loadMap,
  geoCoderResult,
  templateMarker,
  center,
  handlerLocation,
  browserLocation,
  zoom,
  zoomMarker,
}) => {
  let mapContainer = createRef();

  useEffect(() => {
    initMapbox({
      mapContainer,
      center,
      handlerLocation,
      zoom,
      zoomMarker,
      loadMap,
      templateMarker,
      load,
    });

    if (map) {
      map(getMapbox());
    }

    initGeocoder({ geoCoderResult, load, urlQuery, browserLocation });
  }, []);

  return <div ref={(el) => (mapContainer = el)} className="container-map" />;
};
