import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import TaTModal from "./TaTModal";
import TaTDetails from "./TaTDetails";
import TatOrderImg from "../image/TaT-OrderHelp.svg";
import { CardContainer, OrderHelpContainer } from "./TaTCardStyles";

const TaTCard = ({ textData, token = "", language = "" }) => {
  const [orderStatus, setOrderStatus] = useState(false);
  const [showTrackingDetails, setShowTrackingDetails] = useState(false);
  const [orderNumber, setOrderNumber] = useState(token ? token : "");
  const [validNum, setvalidNum] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  
  const data = Object.entries(textData).reduce(
    (acc, [key, value]) => ({ ...acc, [key]: value[0] }),
    {}
  );
  
  const {
    button_text,
    description,
    input_label,
    modal_text,
    section_title,
    modal_content_title,
    modal_content_first_block_title,
    modal_content_first_block_description,
    modal_content_second_block_title,
    modal_content_second_block_description,
    modal_title,
    expired_title,
  } = data;

  const ctaValidation = (e) => {
    setOrderNumber(e.target.value.toUpperCase());
    setErrorMsg(false);
    e.target.value.length >= 4 ? setvalidNum(true) : setvalidNum(false);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        if (orderNumber !== null && orderNumber !== "") {
          setShowTrackingDetails(true);
          setErrorMsg(false);
          orderNumber.length >= 4 ? setvalidNum(true) : setvalidNum(false);
        }
      } catch (error) {
        return null;
      }
    }
    fetchData();
  }, [token]);

  return (
    <CardContainer>
      <AnimatePresence transition={{ duration: 0.5 }} exitBeforeEnter>
        {orderStatus && (
          <TaTModal
            closeModal={setOrderStatus}
            title={modal_title?.text || "Transfer details"}
          >
            <OrderHelpContainer>
              <img src={TatOrderImg.src} alt="OrderImg" />
              <h2>{modal_content_title?.text}</h2>
              <h3>{modal_content_first_block_title?.text} </h3>
              <p>{modal_content_first_block_description?.text} </p>
              <h3>{modal_content_second_block_title?.text}</h3>
              <p>{modal_content_second_block_description?.text} </p>
            </OrderHelpContainer>
          </TaTModal>
        )}
        {showTrackingDetails && (
          <TaTModal
            closeModal={setShowTrackingDetails}
            title={modal_title?.text || "Transfer details"}
          >
            <TaTDetails
              orderNumber={orderNumber}
              expiredTitle={expired_title?.text}
              modalBehavior={setShowTrackingDetails}
              setErrorMsg={setErrorMsg}
              language={language}
              textData={data}
            />
          </TaTModal>
        )}
      </AnimatePresence>

      <h1>{section_title.text}</h1>
      <p>{description.text}</p>
      <label htmlFor="tat-input">{input_label?.text}</label>
      <input
        type="text"
        name="tat-input"
        value={orderNumber}
        onChange={(e) => ctaValidation(e)}
        className={errorMsg ? "invalid" : ""}
      />
      {errorMsg && (
        <span className="error-msg">Invalid number. Please try again.</span>
      )}
      <button className="order-help" onClick={() => setOrderStatus(true)}>
        {modal_text?.text}
      </button>
      <button
        className={validNum ? "details-handler" : "details-handler disabled"}
        onClick={() => setShowTrackingDetails(true)}
      >
        {button_text?.text}
      </button>
    </CardContainer>
  );
};

export default TaTCard;
