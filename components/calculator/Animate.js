import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Skeleton from "../../images/skeleton-loading.svg";

export const AnimateFrame = ({ status, children }) => {
  return (
    <AnimatePresence transition={{ duration: 0.5 }} exitBeforeEnter>
      {!status ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key="Loader"
          style={{ width: "100%", height: "601px" }}
        >
          <img
            src={Skeleton.src}
            className="skeleton-loading"
            alt="skeleton-loading"
          />
        </motion.div>
      ) : (
        <motion.div
          style={{ width: "100%" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key="Loader"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
