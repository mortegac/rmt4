import React from "react";
import { AnimatePresence } from "framer-motion";

import { ConsentSection, Col, Button } from "./ConsentManagerStyle";
import { validateValueofObject } from "../../utils/objectHandling";

export const Step01 = ({
  fnChangeStep,
  savePreferences,
  consentLocale,
  consentData = {},
}) => {
  const {
    consent_text,
    consent_title,
    cookie_policy_link,
    cookie_policy_text,
    manage_button_text,
    i_agree_button_text,
    decline_button_text
  } = consentData;

  return (
    <ConsentSection
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <AnimatePresence>
        <Col align="center" key={"title"}>
          <h5>
            {validateValueofObject(
              { text: consent_title ? consent_title[0]?.text : "" },
              "text",
              "🍪 Cookies give you a personalized experience"
            )}
          </h5>
        </Col>
        <Col align="center" key={"description"}>
          <p>
            {validateValueofObject(
              { text: consent_text ? consent_text[0]?.text : "" },
              "text",
              "We use our own and third-party cookies to analyze our services and to show you advertising related to your preferences based on your browsing habits. Learn more by reading our"
            ) + " "}
            <a
              href={validateValueofObject(
                {
                  url: cookie_policy_link
                    ? `/${consentLocale}/${cookie_policy_link.uid}`
                    : "",
                },
                "url",
                "/cookies"
              )}
              target="_blank"
              rel="noreferrer"
            >
              {validateValueofObject(
                { text: cookie_policy_text ? cookie_policy_text[0]?.text : "" },
                "text",
                "Cookie Notice"
              )}
            </a>
            .
          </p>
        </Col>
        <Col align="flex-center" key={"ctas"} direction="row" marginTop="24px">
          <Button onClick={() => savePreferences("SET_NONECOOKIES")}>
            {validateValueofObject(
              {
                text: decline_button_text
                  ? decline_button_text[0]?.text
                  : "Reject",
              },
              "text",
              "Reject"
            )}
          </Button>
          <Button onClick={() => savePreferences("SET_ALLCOOKIES")}>
            {validateValueofObject(
              {
                text: i_agree_button_text
                  ? i_agree_button_text[0]?.text
                  : "Allow all cookies",
              },
              "text",
              "Allow all cookies"
            )}
          </Button>
        </Col>
        <Col align="flex-center" key={"ctas2"} marginTop="16px">
        <Button onClick={fnChangeStep} primary>
            {validateValueofObject(
              { text: manage_button_text ? manage_button_text[0]?.text : "" },
              "text",
              "Manage cookies"
            )}
          </Button>
        </Col>
      </AnimatePresence>
    </ConsentSection>
  );
};

export default Step01;
