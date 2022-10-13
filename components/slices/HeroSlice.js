import React from "react";
import img from "../../images/Frame_2.svg";
import img_mobile from "../../images/Frame_2_mobile.svg";
import OutlineButton from "../common/OutlineButton";
import { PageContainer, SectionContainer } from "./HeroSliceStyle";
import { Calculator } from "../calculator";

const HeroSlice = ({ slice, isVisibleImageMobile = true }) => {
  const {
    primary: { is_calculator_shown },
    primary: { desktop_image },
    primary: { mobile_image },
  } = slice;

  return (
    <PageContainer>
      <SectionContainer
        desktop={desktop_image?.url || img}
        mobile={mobile_image?.url || img}
        calculatorSlice={is_calculator_shown}
      >
        <div className="text-container">
          {slice.primary.hero_heading[0].text && (
            <h1>{slice.primary.hero_heading[0].text}</h1>
          )}
          {slice.primary.hero_description[0].text && (
            <p>{slice.primary.hero_description[0].text}</p>
          )}
          <div className="buttons-container">
            {slice.primary.google_playstore_button_text[0].text && (
              <OutlineButton
                text={slice.primary.google_playstore_button_text[0].text}
                type="google"
                device="desktop"
                url={slice.primary.google_playstore_button_url[0].text}
              />
            )}
            {slice.primary.app_store_button_text[0].text && (
              <OutlineButton
                text={slice.primary.app_store_button_text[0].text}
                type="apple"
                device="desktop"
                url={slice.primary.app_store_button_url[0].text}
              />
            )}

            {slice.primary.mobile_button_text[0].text && (
              <OutlineButton
                text={slice.primary.mobile_button_text[0].text}
                type="none"
                device="mobile"
                url={slice.primary.mobile_button_url[0].text}
              />
            )}
          </div>
        </div>

        {is_calculator_shown ? (
          <>
            <Calculator slice={{ ...slice }} />
            <div className="mobile-subtext">
              {slice.primary.hero_description[0].text && (
                <p>{slice.primary.hero_description[0].text}</p>
              )}
            </div>
          </>
        ) : (
          <div className="img-container"></div>
        )}
      </SectionContainer>
      {/* <pre style={{maxWidth: '1000px'}}>{JSON.stringify(slice, null, 2)}</pre>  */}
    </PageContainer>
  );
};

export default HeroSlice;
