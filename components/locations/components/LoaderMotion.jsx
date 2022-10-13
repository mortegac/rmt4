import React from "react";
import { motion } from "framer-motion";
import Loader from "../../common/Loader";
// import { LocationNotFound, } from "../locations-styles";

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
