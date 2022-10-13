import React from "react";
import { motion } from "framer-motion";

import Loader from "../../common/Loader";
import { LocationNotFound } from "../locations-styles";

export const LoaderMotion = ({ theme }) => {
  return (
    <motion.div
      className="loading"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Loader theme={theme} />
    </motion.div>
  );
};

export const NotFoundComp = ({ textData }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <LocationNotFound>
        <h4>
          {textData.no_location[0].text || "We couldn’t find any location 🤔"}
        </h4>
        <p>
          {textData.no_location_desc[0].text ||
            "We couldn't find a Ria Location in that area. Extend your search and try again."}
        </p>
      </LocationNotFound>
    </motion.div>
  );
};

export const ErrorRequest = ({ textData }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <LocationNotFound>
        <h4>
          {textData.something_went_wrong[0].text || "Something went wrong! 😵"}
        </h4>
        <p>
          {textData.taking_too_long[0].text ||
            "This is taking too long maybe you should try again."}
        </p>
      </LocationNotFound>
    </motion.div>
  );
};
