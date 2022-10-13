import React from "react";
import { AnimatePresence } from "framer-motion";
import {
  ConsentSection,
  Col,
  Button,
  TogglerContainer,
  Toggler,
  ToggleCircle,
} from "./ConsentManagerStyle";
import { spring } from "./store/constants";
import { Chevron } from "../common/assets";
import { validateValueofObject } from "../../utils/objectHandling";

export const Step02 = (props) => {
  const {
    savePreferences,
    fnChangeStep,
    fnChangeState,
    state,
    consentData = {},
  } = props;

  const { analytics, advertising } = state;
  const {
    advertising_description,
    advertising_title,
    analytics_description,
    analytics_title,
    consent_title,
    essential_descriptions,
    essential_title,
    save_settiing_button_text,
  } = consentData;

  return (
    <ConsentSection layout transition={{ delay: 0.1 }}>
      <AnimatePresence key="contentTwo">
        <Col direction="row" key="stepTwoTitle">
          <div onClick={fnChangeStep}>
            <Chevron className={`chevron chevron-rotate-left`} />
          </div>

          <Col align="center">
            <h5>
              {validateValueofObject(
                { text: consent_title ? consent_title[0]?.text : "" },
                "text",
                "🍪 Cookies give you a personalized experience"
              )}
            </h5>
          </Col>
        </Col>

        <Col
          align="center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delayChildren: 0.5 }}
          key="cookies consent description"
        >
          <h6>
            {validateValueofObject(
              { text: essential_title ? essential_title[0]?.text : "" },
              "text",
              "Essential cookies"
            )}
          </h6>
          <p>
            {validateValueofObject(
              {
                text: essential_descriptions
                  ? essential_descriptions[0]?.text
                  : "",
              },
              "text",
              "In eu magna vehicula, pellentesque neque vitae, bibendum ipsum. Ut ac nulla arcu. Donec sed dui dapibus nisl scelerisque laoreet sed at dolor"
            )}
          </p>
          <TogglerContainer>
            <h6>
              {validateValueofObject(
                { text: analytics_title ? analytics_title[0]?.text : "" },
                "text",
                "Analytics cookies"
              )}
            </h6>
            <Toggler
              onClick={() => fnChangeState({ analytics: !analytics })}
              className={analytics ? "switch on" : "switch"}
            >
              <ToggleCircle layout transition={spring} />
            </Toggler>
          </TogglerContainer>
          <p>
            {validateValueofObject(
              {
                text: analytics_description
                  ? analytics_description[0]?.text
                  : "",
              },
              "text",
              "In eu magna vehicula, pellentesque neque vitae, bibendum ipsum. Ut ac nulla arcu. Donec sed dui dapibus nisl scelerisque laoreet sed at dolor. Mauris sit amet luctus nibh. Vivamus dapibus dictum nisi et sodales."
            )}
          </p>
          <TogglerContainer animate>
            <h6>
              {validateValueofObject(
                { text: advertising_title ? advertising_title[0]?.text : "" },
                "text",
                "Advertising cookies"
              )}
            </h6>
            <Toggler
              onClick={() => fnChangeState({ advertising: !advertising })}
              className={advertising ? "switch on" : "switch"}
            >
              <ToggleCircle layout transition={spring} />
            </Toggler>
          </TogglerContainer>
          <p className="last-p">
            {validateValueofObject(
              {
                text: advertising_description
                  ? advertising_description[0]?.text
                  : "",
              },
              "text",
              "We use our own and third-party cookies to analyze our services, and to show you advertising related to your preferences based on your browsing habits. Learn more by reading our."
            )}
          </p>
          <Button onClick={() => savePreferences("CUSTOM")} secondary>
            {validateValueofObject(
              {
                text: save_settiing_button_text
                  ? save_settiing_button_text[0]?.text
                  : "",
              },
              "text",
              "Save cookie settings"
            )}
          </Button>
        </Col>
      </AnimatePresence>
    </ConsentSection>
  );
};

export default Step02;
