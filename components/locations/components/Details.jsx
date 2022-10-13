import React from "react";
import moment from "moment";
import { motion } from "framer-motion";

import { DAYS } from "../constants";
import { OFFSETS } from "../offsets";

import { LayoutFilter } from "./LayoutFilter";

import { formatAMPM, travelGmaps, translateDays } from "../utils";
import {
  DetailsContainer,
  GetDirectionsBtn,
  FixedDetailsContainer,
  HoursDetails,
  NavbarDetails,
} from "../locations-styles";

export const Details = ({
  activeOptOut,
  closeFilters,
  collectionLocationQuery,
  deskVariants,
  distanceType,
  hoursQuery,
  legalItem,
  locationsTexts,
  map,
  theme,
  setCollectionLocation,
  setData,
  setDistanceType,
  setHoursQuery,
  setSelectedStore,
  setShowFilter,
  payoutLocationQuery,
  selectedStore,
  showFilter,
  sendLocationQuery,
  setSendLocation,
  setPayoutLocation,
  variants,
}) => {
  if (selectedStore === "filter" && showFilter) {
    return (
      <LayoutFilter
        closeFilters={closeFilters}
        collectionLocationQuery={collectionLocationQuery}
        deskVariants={deskVariants}
        distanceType={distanceType}
        hoursQuery={hoursQuery}
        locationsTexts={locationsTexts}
        theme={theme}
        setCollectionLocation={setCollectionLocation}
        setData={setData}
        setDistanceType={setDistanceType}
        setHoursQuery={setHoursQuery}
        payoutLocationQuery={payoutLocationQuery}
        sendLocationQuery={sendLocationQuery}
        setSendLocation={setSendLocation}
        setPayoutLocation={setPayoutLocation}
        variants={variants}
      />
    );
  } else if (selectedStore != null) {
    const {
      address,
      address2,
      businessHours,
      phone,
      name,
      distanceFromOriginMiles,
      distanceFromOriginKilometers,
      city,
    } = selectedStore.properties;
    return (
      <motion.div
        key="modal"
        variants={window.innerWidth > 960 ? deskVariants : variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          duration: 0.3,
        }}
        className="details-wrapper"
      >
        <DetailsContainer optOut={activeOptOut}>
          <NavbarDetails>
            <h2>{name}</h2>
            {console.log("i")}
            <button
              onClick={(e) => {
                e.preventDefault();
                setSelectedStore(null);
                setShowFilter(false);
              }}
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.4244 17.6359L30.3638 16.5752L23.9998 22.9392L17.6359 16.5752L16.5752 17.6359L22.9392 23.9998L16.5752 30.3638L17.6359 31.4244L23.9998 25.0605L30.3638 31.4244L31.4244 30.3638L25.0605 23.9998L31.4244 17.6359Z"
                  fill="#001133"
                  fillOpacity="0.6"
                />
              </svg>
            </button>
            <p>
              {distanceType
                ? distanceFromOriginMiles.toFixed(1) + " mi"
                : distanceFromOriginKilometers.toFixed(1) + " Km"}{" "}
              ·{" "}
              {`${address.toLowerCase()}${address2}${city ? ", " + city : ""}`}
            </p>
            <p>
              {phone ||
                (locationsTexts.unavailable[0].text
                  ? locationsTexts.unavailable[0].text
                  : "Unavailable")}
            </p>
            <h5>{legalItem(selectedStore.properties)}</h5>
          </NavbarDetails>
          {businessHours.length > 1 && (
            <HoursDetails>
              <table>
                <thead></thead>
                <tbody>
                  {businessHours.map((e, i) => {
                    let offset = OFFSETS.find(
                      (r) => r.fTimeZoneName === e.timeZoneName
                    );
                    let current,
                      shop,
                      open = false,
                      today = false,
                      openFormat = "",
                      closedFormat = "";
                    if (offset) {
                      current = moment().utcOffset(offset.fOffset);
                      shop = moment().utcOffset(offset.fOffset);
                    } else {
                      current = moment();
                      shop = moment();
                    }

                    if (e.timeClose != null) {
                      if (e.dayOfWeek === DAYS[current.day()]) {
                        today = true;
                        let hrs = e.timeClose.split(":");
                        let closed = shop.set({
                          hour: hrs[0],
                          minute: hrs[1],
                          second: hrs[2],
                        });

                        if (shop.isSameOrAfter(current)) {
                          open = true;
                        } else {
                          open = false;
                        }
                      }
                    }

                    if (e.timeOpen != null) {
                      let str = e.timeOpen.split(":");
                      let d = new Date();
                      d.setHours(
                        isNaN(str[0]) ? 0 : str[0],
                        isNaN(str[1]) ? 0 : str[1],
                        0,
                        0
                      );
                      openFormat = formatAMPM(d);
                    }

                    if (e.timeClose != null) {
                      let str = e.timeClose.split(":");
                      let d = new Date();
                      d.setHours(
                        isNaN(str[0]) ? 0 : str[0],
                        isNaN(str[1]) ? 0 : str[1],
                        0,
                        0
                      );
                      closedFormat = formatAMPM(d);
                    }

                    return (
                      <tr
                        key={i}
                        className={`${today ? "today" : ""} ${
                          today ? (open ? "today-green" : "today-red") : ""
                        }`}
                      >
                        <tr>
                          <td>
                            {translateDays({
                              day: e.dayOfWeek.toLowerCase(),
                              locationsTexts,
                            })}
                          </td>
                          <td>
                            {e.timeOpen == null ? "" : openFormat}
                            {e.timeOpen == null ? "" : " - "}
                            {e.timeClose == null
                              ? locationsTexts.closed[0].text
                              : closedFormat}
                          </td>
                        </tr>
                        {open ? (
                          <tr>
                            <td></td>
                            <td>
                              {locationsTexts.currently_open[0].text
                                ? locationsTexts.currently_open[0].text
                                : "Currently open"}
                            </td>
                          </tr>
                        ) : null}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </HoursDetails>
          )}
          <p>{`⚠ ${
            locationsTexts.opening_hours[0].text
              ? locationsTexts.opening_hours[0].text
              : "Opening hours may differ due to COVID-19"
          }`}</p>
          <FixedDetailsContainer>
            <GetDirectionsBtn
              theme={theme}
              target="_blank"
              href={travelGmaps(
                [map.userPosition().lat, map.userPosition().lng],
                [
                  selectedStore.geometry.coordinates[1],
                  selectedStore.geometry.coordinates[0],
                ],
                selectedStore
              )}
            >
              {locationsTexts.get_directions[0].text
                ? locationsTexts.get_directions[0].text
                : "Get directions"}
            </GetDirectionsBtn>
          </FixedDetailsContainer>
        </DetailsContainer>
      </motion.div>
    );
  }
};
