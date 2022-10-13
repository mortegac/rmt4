import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FecthRia from "../utils/axios";
import { DetailsWrapper } from "./TaTDetailsStyles";
import Loader from "../common/Loader";
import TatDetailsNotification from "./TaTDetailsNotification";
import { tatCountryIds } from "../utils/tatCountryIds";


const IsSpanishUrl =
  typeof window !== "undefined" &&
  new URL(window.location.href).pathname.includes("/es-");
const axios = new FecthRia({
  cstPath: "https://customertoolkit.riaenvia.net/api",
  requiredToken: true,
  sendCountryCode: true,
});

const request = async (
  orderNumber,
  setStatusData,
  statusData,
  setLoaded,
  activeIndex,
  setActiveIndex,
  modalBehavior,
  setErrorMsg
) => {
  try {
    let headers = {};

    if (IsSpanishUrl) {
      headers.newCultureCode = "es-US";
    }

    const countryId = tatCountryIds[String(orderNumber.toString()).slice(0, 2)];
    headers["CountryId"] = countryId;

    const {
      data: { events, confirmationExpirationTimeUtc, status, number, message },
    } = await axios.post(
      "/tracking/order/status",
      { OrderNumber: orderNumber.toString() },
      { headers }
    );

    setStatusData({
      ...statusData,
      stepsData: events.map((e, i) => ({
        date: e.date,
        event: e.event,
      })),
      expirationDate: confirmationExpirationTimeUtc,
      orderStatus: status,
      number,
      message,
    });

    setActiveIndex(events.findIndex((e) => e.date === null) - 1);

    setTimeout(() => {
      setLoaded(true);
    }, 500);
  } catch (error) {
    console.log("--error--", error);
    modalBehavior(false);
    setErrorMsg(true);
  }
};

const parseDate = (date, language) => {
  const dateTimeFormat = new Intl.DateTimeFormat(
    language ? language : "en-us",
    {
      month: "short",
      day: "numeric",
    }
  );
  return dateTimeFormat
    .formatToParts(new Date(date))
    .map((e) => e.value)
    .join("");
};

const TaTDetails = ({
  orderNumber,
  modalBehavior,
  setErrorMsg,
  language,
  textData,
  expiredTitle,
}) => {
  const [loaded, setLoaded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [statusData, setStatusData] = useState({
    stepsData: [
      { date: false, event: false },
      { date: false, event: false },
      { date: false, event: false },
      { date: false, event: false },
    ],
    expirationDate: "",
    orderStatus: false,
    number: false,
  });

  useEffect(() => {
    request(
      orderNumber,
      setStatusData,
      statusData,
      setLoaded,
      activeIndex,
      setActiveIndex,
      modalBehavior,
      setErrorMsg
    );
  }, []);

  return (
    <AnimatePresence transition={{ duration: 1 }} exitBeforeEnter>
      {loaded ? (
        <DetailsWrapper
          initial={{ opacity: 0, height: "48px" }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0 }}
          key="details-wrapper"
        >
          <div className="order-heading">
            <h4>{textData?.order_number?.text || "Order number"}</h4>
            <span>{statusData.number}</span>
          </div>
          {/* success class on steps-container triggers success styles on all childs */}
          {/* order-step elements can have innactive, active or passed classes */}
          {!statusData.stepsData.find((step) => step.event === "Cancelled") &
          (statusData.orderStatus.indexOf("ConfirmationExpired") !== 0) ? (
            <div
              className={
                statusData.stepsData[3].event === "Paid" &&
                statusData.stepsData[3].date
                  ? `steps-container success`
                  : `steps-container`
              }
            >
              <div
                className={
                  statusData.stepsData[0].date
                    ? `order-step passed`
                    : `order-step innactive`
                }
              >
                <h4 className={activeIndex === 0 ? "active" : ""}>
                  {textData?.first_step?.text || "Transfer was submitted"}
                </h4>
                <p>{parseDate(statusData.stepsData[0].date, language)}</p>
              </div>
              <div
                className={
                  statusData.stepsData[1].date
                    ? `order-step diff-step passed`
                    : `order-step diff-step innactive`
                }
              >
                <h4 className={activeIndex === 1 ? "active" : ""}>
                  {textData?.second_step?.text || "The money is on its way"}
                </h4>
                <p>{parseDate(statusData.stepsData[1].date, language) || ""}</p>
              </div>
              <div
                className={
                  statusData.stepsData[2].date
                    ? `order-step diff-step passed`
                    : `order-step diff-step innactive`
                }
              >
                <h4 className={activeIndex === 2 ? "active" : ""}>
                  {textData?.third_step?.text || "Transfer was received"}
                </h4>
                <p>{parseDate(statusData.stepsData[2].date, language) || ""}</p>
              </div>
              <div
                className={
                  statusData.stepsData[3].date
                    ? `order-step diff-step passed`
                    : `order-step diff-step innactive`
                }
              >
                <h4 className={activeIndex === 3 ? "active" : ""}>
                  {textData?.fourth_step?.text || "Transfer was paid out"}
                </h4>
                <p>{parseDate(statusData.stepsData[3].date, language) || ""}</p>
              </div>
            </div>
          ) : (
            <div className="steps-container cancelled">
              <div className="order-step passed">
                <h4>
                  {textData?.first_step?.text || "Transfer was submitted"}
                </h4>
                <p>{parseDate(statusData.stepsData[0].date, language)}</p>
              </div>
              <div className="order-step diff-step active">
                {statusData.orderStatus.indexOf("ConfirmationExpired") === 0 ? (
                  <>
                    <h4 className="cancelled">
                      {textData?.transfer_expired?.text || "Transfer expired"}
                    </h4>
                    <p>
                      {parseDate(statusData.expirationDate, language) || ""}
                    </p>
                  </>
                ) : (
                  <>
                    <h4 className="cancelled">
                      {textData?.transfer_cancelled?.text || "Order cancelled"}
                    </h4>
                    <p>
                      {parseDate(statusData.stepsData[3].date, language) || ""}
                    </p>
                  </>
                )}
              </div>
            </div>
          )}
          {/* TatDetailsNotification can have alert,success and default as type prop */}
          <TatDetailsNotification
            text={statusData.message}
            expiredTitle={expiredTitle}
            expirationDate={statusData.expirationDate}
            expiredTransaction={
              statusData.orderStatus === "ConfirmationExpired"
            }
            type={
              statusData.stepsData[3].event === "Paid" &&
              statusData.stepsData[3].date
                ? "success"
                : statusData.orderStatus === "Canceled" || "ConfirmationExpired"
                ? "alert"
                : "default"
            }
          />
        </DetailsWrapper>
      ) : (
        <motion.div
          className="loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key="Loading-container"
        >
          <Loader />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TaTDetails;
