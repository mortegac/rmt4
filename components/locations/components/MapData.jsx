import React from "react";
import { motion } from "framer-motion";

export const MapData = ({
  dataMarker,
  distanceType,
  legalItem,
  map,
  openClosed,
}) => {
  return dataMarker.map((item, i) => {
    return (
      <motion.div
        key={i}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="header-item"
        onClick={(e) => {
          e.preventDefault();
          map.viewMarker(item, { zoom: 14 });
        }}
      >
        <h3>{item.name}</h3>
        <h4>{item.address}</h4>
        {openClosed(item)}
        <p>{legalItem(item)}</p>
        <div className="header-item-distance">
          {distanceType
            ? item.distanceFromOriginMiles.toFixed(1) + " mi"
            : item.distanceFromOriginKilometers.toFixed(1) + " Km"}
        </div>
      </motion.div>
    );
  });
};
