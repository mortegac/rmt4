import React from "react";
import { motion } from "framer-motion";

import { FilterContainer } from "../locations-styles";

export const LayoutFilter = ({
  closeFilters,
  collectionLocationQuery,
  deskVariants,
  distanceType,
  hoursQuery,
  locationsTexts,
  locationsData,
  theme,
  payoutLocationQuery,
  setCollectionLocation,
  setData,
  setDistanceType,
  setHoursQuery,
  sendLocationQuery,
  setSendLocation,
  setPayoutLocation,
  variants,
}) => {
  return (
    <motion.div
      key="filter"
      variants={window.innerWidth > 960 ? deskVariants : variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        duration: 0.3,
      }}
      className="details-wrapper"
    >
      <FilterContainer theme={theme}>
        <div className="cont-20">
          <div className="head-filter">
            <h2>
              {locationsTexts.filters[0].text
                ? locationsTexts.filters[0].text
                : "Filters"}
            </h2>
            <p onClick={() => closeFilters()} className="filter-closed">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.4244 5.63586L18.3638 4.5752L11.9998 10.9392L5.63588 4.5752L4.5752 5.63586L10.9392 11.9998L4.5752 18.3638L5.63586 19.4244L11.9998 13.0605L18.3638 19.4244L19.4244 18.3638L13.0605 11.9998L19.4244 5.63586Z"
                  fill="#001133"
                  fill-opacity="0.6"
                />
              </svg>
            </p>
          </div>
          {theme === "xe" ? (
            <></>
          ) : (
            <>
              <h4>
                {locationsTexts.services[0].text
                  ? locationsTexts.services[0].text
                  : "Services"}
              </h4>

              <div>
                <input
                  id="send-lj"
                  className="checkbox-custom"
                  type="checkbox"
                  checked={sendLocationQuery}
                  onChange={(val) => {
                    setSendLocation(val.target.checked);
                  }}
                />
                <label htmlFor="send-lj" className="checkbox-custom-label">
                  <span>
                    {locationsTexts.send_money[0].text
                      ? locationsTexts.send_money[0].text
                      : "Send money"}
                  </span>
                </label>
              </div>
              <div>
                <input
                  id="pickup-kj"
                  className="checkbox-custom"
                  type="checkbox"
                  checked={payoutLocationQuery}
                  onChange={(val) => {
                    setPayoutLocation(val.target.checked);
                  }}
                />
                <label htmlFor="pickup-kj" className="checkbox-custom-label">
                  <span>
                    {locationsTexts.pickup_money[0].text
                      ? locationsTexts.pickup_money[0].text
                      : "Pickup money"}
                  </span>
                </label>
              </div>
              <div>
                <input
                  id="found-kg"
                  className="checkbox-custom"
                  type="checkbox"
                  checked={collectionLocationQuery}
                  onChange={(val) => {
                    setCollectionLocation(val.target.checked);
                  }}
                />
                <label htmlFor="found-kg" className="checkbox-custom-label">
                  <span>
                    {locationsTexts.fund_transfers[0].text
                      ? locationsTexts.fund_transfers[0].text
                      : "Fund transfers"}
                  </span>
                </label>
              </div>
            </>
          )}
          <h4>
            {locationsTexts.hours[0].text
              ? locationsTexts.hours[0].text
              : "Hours"}
          </h4>
          <div className="InputGroup">
            <input
              type="radio"
              name="hours"
              id="hours_1"
              value="small"
              checked={!hoursQuery}
              onChange={() => setHoursQuery(false)}
            />
            <label htmlFor="hours_1" className="radius-left">
              {locationsTexts.any_time[0].text
                ? locationsTexts.any_time[0].text
                : "Any time"}
            </label>
            <input
              type="radio"
              name="hours"
              id="hours_2"
              value="small"
              checked={hoursQuery}
              onChange={() => setHoursQuery(true)}
            />
            <label htmlFor="hours_2" className="radius-right">
              {locationsTexts.open_now[0].text
                ? locationsTexts.open_now[0].text
                : "Open now"}
            </label>
          </div>

          <h4>
            {locationsTexts.distance_units[0].text
              ? locationsTexts.distance_units[0].text
              : "Distance units"}
          </h4>
          <div className="InputGroup">
            <input
              type="radio"
              name="distance"
              id="distance_1"
              value="small"
              checked={distanceType}
              onChange={() => setDistanceType(true)}
            />
            <label htmlFor="distance_1" className="radius-left">
              {locationsTexts.miles[0].text
                ? locationsTexts.miles[0].text
                : "Miles"}
            </label>
            <input
              type="radio"
              name="distance"
              id="distance_2"
              value="small"
              checked={!distanceType}
              onChange={() => setDistanceType(false)}
            />
            <label htmlFor="distance_2" className="radius-right">
              {locationsTexts.kilometers[0].text
                ? locationsTexts.kilometers[0].text
                : "Kilometers"}
            </label>
          </div>
        </div>

        <div className="buttons-group-filter">
          <button
            className="clear"
            onClick={() => {
              setSendLocation(false);
              theme === "xe"
                ? setPayoutLocation(true)
                : setPayoutLocation(false);
              setCollectionLocation(false);
              setHoursQuery(false);
              closeFilters();
            }}
          >
            {locationsTexts.clear[0].text
              ? locationsTexts.clear[0].text
              : "Clear"}
          </button>
          <button
            className="apply"
            onClick={() => {
              setData(locationsData);
              closeFilters();
            }}
          >
            {locationsTexts.apply[0].text
              ? locationsTexts.apply[0].text
              : "Apply"}
          </button>
        </div>
      </FilterContainer>
    </motion.div>
  );
};
