import React, { useState, useEffect } from "react";
import { CancelToken } from "axios";
import moment from "moment";
import { AnimatePresence } from "framer-motion";

import { OFFSETS } from "./offsets";

import { token, markerIcon, markerIconXe } from "./variables";
import { deskVariants, variants } from "./utils";
import FetchRia from "../utils/axios";

import { DAYS, CENTER } from "./constants";

import { Details } from "./components/Details";
import { InputGeolocator } from "./components/InputGeolocator";
import { LayoutFilter } from "./components/LayoutFilter";
import {
  ErrorRequest,
  LoaderMotion,
  NotFoundComp,
} from "./components/StatusPages";
import { OpenStatus } from "./components/OpenStatus";
import { MapData } from "./components/MapData";

import {
  LocationsContainer,
  LocationsSidePanel,
  LocationsMap,
  MobileMapList,
} from "./locations-styles";

import { Maps } from "./components/Maps/Maps";
import { getMapbox } from "./components/Maps/mapbox";

const axios = new FetchRia({ requiredToken: true });
const source = CancelToken.source();

const LocationsWrapper = ({
  textData,
  hideNavbar,
  theme,
  optOutState,
  ...rest
}) => {
  const [map, setMap] = useState({});
  const [locationsData, setLocationsData] = useState([]);
  const [dataMarker, setDataMarker] = useState([]);
  const [selectedStore, setSelectedStore] = useState(null);
  const [navToggle, setNavToggle] = useState(true);

  const [loading, setLoading] = useState(true);
  const [requestFail, setRequestFail] = useState(false);
  const [sendLocationQuery, setSendLocation] = useState(false);

  const [payoutLocationQuery, setPayoutLocation] = useState(false);
  const [collectionLocationQuery, setCollectionLocation] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [hoursQuery, setHoursQuery] = useState(false);

  const [distanceType, setDistanceType] = useState(true);
  const [locationsTexts, setLocationsTexts] = useState(null);
  const [locationsType, setLocationsType] = useState("RMT");

  const urlParams =
    typeof window !== "undefined"
      ? {
          lat: new URLSearchParams(window.location.search).get("lat"),
          log: new URLSearchParams(window.location.search).get("lon"),
          code: new URLSearchParams(window.location.search).get("code"),
          agentId: new URLSearchParams(window.location.search).get("agentId"),
          zoom: new URLSearchParams(window.location.search).get("zoom"),
        }
      : "";

  const searchText = textData?.search[0]?.text;
  const [requiredPayoutAgent, setRequiredPayoutAgent] = useState(false);

  const activeOptOut = optOutState;

  useEffect(() => {
    setLocationsTexts(textData);
    theme === "xe" && (setRequiredPayoutAgent(true), setPayoutLocation(true));
    theme === "walmart" && setLocationsType("Walmart");
  }, []);

  var timeCancel;

  const mapQuery = (query) => ({
    countryTo: query.shortcode,
    findLocationType: locationsType,
    lat: "",
    latitude: query.latitude,
    long: "",
    longitude: query.longitude,
    PayAgentId: null,
    RequestCountry: "US",
    RequiredPayoutAgents: requiredPayoutAgent,
    RequiredReceivingAgents: false,
    RequiredReceivingAndPayoutAgents: false,
  });

  const notCancel = () => {
    clearTimeout(timeCancel);
  };

  const request = (query) => {
    setLoading(true);
    return new Promise((resolve, reject) => {
      document
        ?.querySelector(".mapboxgl-ctrl-geocoder--input")
        ?.setAttribute("placeholder", textData.search.text || "Search");

      document.querySelector(".search-this-area").innerHTML =
        textData.search_this_area[0].text || null;

      axios
        .put("/location/agent-locations", mapQuery(query), {
          cancelToken: source.token,
          headers: { CultureCode: "en-US", IsoCode: "US" },
        })
        .then((res) => {
          // notCancel()
          document.querySelector("#geo input").placeholder = searchText;
          document.querySelector(".search-this-area").innerHTML =
            textData.search_this_area[0].text;
          setSelectedStore(null);
          setTimeout((e) => setLoading(false), 1000);
          resolve(res.data);
        })
        .catch((err) => {
          setTimeout((e) => setLoading(false), 1000);
          reject(err);
        });
    });
  };

  const onLoad = (query) =>
    request(query).then((response) => setData(response));

  const dataResult = ({ query }) => {
    request(query)
      .then((response) => {
        setData(response);
      })
      .catch((err) => notResult(err));
  };

  const notResult = (err) => {
    notCancel();
    setLocationsData([]);
    map.clearAllMarkers();
  };

  const setData = (data) => {
    setLocationsData(data);
    setDataMarker(filter(data));
    getMapbox().moveByData(getMapbox().arrayToGeoJSON(filter(data)));
  };

  const filter = (data) => {
    let query = {};
    if (sendLocationQuery) query["sendLocation"] = sendLocationQuery;
    if (payoutLocationQuery) query["payoutLocation"] = payoutLocationQuery;
    if (collectionLocationQuery)
      query["collectionLocation"] = collectionLocationQuery;
    if (hoursQuery) query["open"] = hoursQuery;

    return data.filter((item, index) => {
      for (let key in query)
        if (item[key] !== query[key] || item[key] === undefined) {
          return false;
        }

      let current = moment(),
        open = false,
        obj = null;
      obj = item.businessHours.find((e) => e.dayOfWeek === DAYS[current.day()]);
      // offsets
      if (obj != undefined) {
        let offset = OFFSETS.find((e) => e.fTimeZoneName === obj.timeZoneName);
        let curr, shop;
        if (offset) {
          curr = moment().utcOffset(offset.fOffset);
          shop = moment().utcOffset(offset.fOffset);
        } else {
          curr = moment();
          shop = moment();
        }

        if (obj.timeClose == null) open = false;
        else {
          let hrs = obj.timeClose.split(":");
          let closed = shop
            .set({
              hour: hrs[0],
              minute: hrs[1],
              second: hrs[2],
            })
            .format("hh:mm A");
          if (shop.isSameOrAfter(curr)) open = true;
          // if (curr.isBefore(closed.format('HH:mm:ss'))) open = true
          else open = false;
        }

        item["open"] = open;
      }
      return true;
    });
  };

  const handler = (item) => {
    setSelectedStore(item);
  };

  const closeFilters = () => {
    setShowFilter(false);
    setSelectedStore(null);
  };

  const openClosed = (item) => {
    const recursiveValidOpen = (index = 0) => {
      let offset = OFFSETS.find(
        (r) => r.fTimeZoneName === item.businessHours[0].timeZoneName
      );
      let now, date;
      if (offset) {
        now = moment().utcOffset(offset.fOffset);
        date = moment().utcOffset(offset.fOffset);
      } else {
        now = moment();
        date = moment();
      }

      const open = item.businessHours.find(
        (e) => e.dayOfWeek === DAYS[now.add({ days: index }).day()]
      );

      if (
        open == null ||
        open == undefined ||
        open.timeOpen == null ||
        open.timeClose == null
      ) {
        if (index < 3) return recursiveValidOpen(index + 1);
        return <></>;
      } else {
        return (
          <OpenStatus
            open={open}
            index={index}
            now={now}
            date={date}
            locationsTexts={locationsTexts}
          />
        );
      }
    };

    return recursiveValidOpen();
  };

  const legalItem = (item) => {
    let services = [];
    if (item.collectionLocation)
      services.push(
        locationsTexts.fund_transfers[0].text
          ? locationsTexts.fund_transfers[0].text
          : "Fund transfers"
      );
    if (item.sendLocation)
      services.push(
        locationsTexts.send_money[0].text
          ? locationsTexts.send_money[0].text
          : "Send money"
      );
    if (item.payoutLocation)
      services.push(
        locationsTexts.pickup_money[0].text
          ? locationsTexts.pickup_money[0].text
          : "Pickup money"
      );
    return services.join(" · ");
  };

  if (typeof window === `undefined`) {
    return <></>;
  }

  return (
    <LocationsContainer
      optOut={activeOptOut}
      hideNavbar={hideNavbar}
      theme={theme}
    >
      {window.innerWidth > 960 ? (
        selectedStore === null ? (
          <LocationsSidePanel theme={theme}>
            {/* {inputGeolocator()} */}
            <InputGeolocator
              activeOptOut={activeOptOut}
              collectionLocationQuery={collectionLocationQuery}
              distanceType={distanceType}
              hoursQuery={hoursQuery}
              payoutLocationQuery={payoutLocationQuery}
              sendLocationQuery={sendLocationQuery}
              setShowFilter={setShowFilter}
              setSelectedStore={setSelectedStore}
              theme={theme}
            />
            <AnimatePresence transition={{ duration: 0.5 }} exitBeforeEnter>
              {loading ? (
                <LoaderMotion theme={theme} />
              ) : requestFail ? (
                <ErrorRequest textData={textData} />
              ) : locationsData.length < 1 ? (
                <NotFoundComp textData={textData} />
              ) : (
                <MapData
                  dataMarker={dataMarker}
                  distanceType={distanceType}
                  map={map}
                  openClosed={openClosed}
                  legalItem={legalItem}
                />
              )}
            </AnimatePresence>
          </LocationsSidePanel>
        ) : (
          <LocationsSidePanel>
            {showFilter ? (
              <LayoutFilter
                closeFilters={closeFilters}
                collectionLocationQuery={collectionLocationQuery}
                deskVariants={deskVariants}
                distanceType={distanceType}
                hoursQuery={hoursQuery}
                locationsData={locationsData}
                locationsTexts={locationsTexts}
                theme={theme}
                setCollectionLocation={setCollectionLocation}
                setData={setData}
                setDistanceType={setDistanceType}
                setHoursQuery={setHoursQuery}
                payoutLocationQuery={setHoursQuery}
                sendLocationQuery={sendLocationQuery}
                setSendLocation={setSendLocation}
                setPayoutLocation={setPayoutLocation}
                variants={variants}
              />
            ) : (
              <Details
                activeOptOut={activeOptOut}
                closeFilters={closeFilters}
                collectionLocationQuery={collectionLocationQuery}
                deskVariants={deskVariants}
                distanceType={distanceType}
                hoursQuery={hoursQuery}
                map={map}
                legalItem={legalItem}
                locationsTexts={locationsTexts}
                theme={theme}
                setCollectionLocation={setCollectionLocation}
                setData={setData}
                setDistanceType={setDistanceType}
                setHoursQuery={setHoursQuery}
                setSelectedStore={setSelectedStore}
                setShowFilter={setShowFilter}
                payoutLocationQuery={payoutLocationQuery}
                selectedStore={selectedStore}
                showFilter={showFilter}
                sendLocationQuery={sendLocationQuery}
                setSendLocation={setSendLocation}
                setPayoutLocation={setPayoutLocation}
                variants={variants}
              />
            )}
          </LocationsSidePanel>
        )
      ) : null}
      {window.innerWidth <= 960 ? (
        <InputGeolocator
          activeOptOut={activeOptOut}
          collectionLocationQuery={collectionLocationQuery}
          distanceType={distanceType}
          hoursQuery={hoursQuery}
          payoutLocationQuery={payoutLocationQuery}
          sendLocationQuery={sendLocationQuery}
          setShowFilter={setShowFilter}
          setSelectedStore={setSelectedStore}
          theme={theme}
        />
      ) : null}
      <LocationsMap
        className={navToggle && "active"}
        optOut={activeOptOut}
        theme={theme}
      >
        <Maps
          urlQuery={urlParams}
          map={(e) => setMap(e)}
          load={onLoad}
          theme={theme}
          accessToken={token}
          geoCoderResult={dataResult}
          templateMarker={theme === "xe" ? markerIconXe : markerIcon}
          center={CENTER}
          handlerLocation={handler}
          browserLoacion={true}
          zoomMarker={14}
        />
      </LocationsMap>
      {window.innerWidth < 960 ? (
        <MobileMapList
          className={navToggle && "active"}
          optOut={activeOptOut}
          theme={theme}
        >
          <div
            className="toggle-button"
            onClick={() => setNavToggle(!navToggle)}
          >
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 7.37502L0.375 1.75002L1.1625 0.962524L6 5.80002L10.8375 0.962524L11.625 1.75002L6 7.37502Z"
                fillOpacity="0.6"
              />
            </svg>
          </div>

          <LocationsSidePanel>
            <AnimatePresence transition={{ duration: 0.5 }} exitBeforeEnter>
              {loading ? (
                <LoaderMotion theme={theme} />
              ) : requestFail ? (
                <ErrorRequest textData={textData} />
              ) : locationsData.length == 0 ? (
                <NotFoundComp textData={textData} />
              ) : showFilter ? (
                <LayoutFilter
                  closeFilters={closeFilters}
                  collectionLocationQuery={collectionLocationQuery}
                  deskVariants={deskVariants}
                  distanceType={distanceType}
                  hoursQuery={hoursQuery}
                  locationsData={locationsData}
                  locationsTexts={locationsTexts}
                  theme={theme}
                  payoutLocationQuery={payoutLocationQuery}
                  setCollectionLocation={setCollectionLocation}
                  setData={setData}
                  setDistanceType={setDistanceType}
                  setHoursQuery={setHoursQuery}
                  sendLocationQuery={sendLocationQuery}
                  setSendLocation={setSendLocation}
                  setPayoutLocation={setPayoutLocation}
                  variants={variants}
                />
              ) : (
                <MapData
                  dataMarker={dataMarker}
                  distanceType={distanceType}
                  map={map}
                  openClosed={openClosed}
                  legalItem={legalItem}
                />
              )}
            </AnimatePresence>
          </LocationsSidePanel>
        </MobileMapList>
      ) : null}
      {window.innerWidth < 960 && (
        <AnimatePresence transition={{ duration: 0.5 }} exitBeforeEnter>
          {selectedStore && (
            <Details
              activeOptOut={activeOptOut}
              closeFilters={closeFilters}
              collectionLocationQuery={collectionLocationQuery}
              deskVariants={deskVariants}
              distanceType={distanceType}
              hoursQuery={hoursQuery}
              map={map}
              legalItem={legalItem}
              locationsTexts={locationsTexts}
              theme={theme}
              payoutLocationQuery={payoutLocationQuery}
              setCollectionLocation={setCollectionLocation}
              setData={setData}
              setDistanceType={setDistanceType}
              setHoursQuery={setHoursQuery}
              setSelectedStore={setSelectedStore}
              setShowFilter={setShowFilter}
              selectedStore={selectedStore}
              showFilter={showFilter}
              sendLocationQuery={sendLocationQuery}
              setSendLocation={setSendLocation}
              setPayoutLocation={setPayoutLocation}
              variants={variants}
            />
          )}
        </AnimatePresence>
      )}
    </LocationsContainer>
  );
};

export default LocationsWrapper;
