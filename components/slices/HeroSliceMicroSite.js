import React from "react";
import img from "../../images/Frame_2.svg";
import img_mobile from "../../images/Frame_2_mobile.svg";
import Button from "../common/Button";
import { PrismicRichText } from "@prismicio/react";
import { PageContainer, SectionContainer } from "./HeroSliceStyle";

const HeroSlice = ({ slice, isVisibleImageMobile = true }) => {
  const {
    primary: { desktop_image },
    primary: { mobile_image },
  } = slice;
  const fixed =
    typeof mobile_image.url === "object" ? { ...mobile_image.url } : {};

  const imageMobile = fixed.hasOwnProperty("url") ? url : img_mobile;

  return (
    <PageContainer>
      <SectionContainer
        desktop={desktop_image?.url || img}
        mobile={isVisibleImageMobile ? imageMobile : null}
      >
        <div className="text-container">
          <PrismicRichText field={slice.primary.hero_heading} />
          <PrismicRichText field={slice.primary.hero_description} />
          <div className="buttons-container">
            {slice.primary.google_playstore_button_text[0] && (
              <Button
                innerText={slice.primary.google_playstore_button_text[0].text}
                type="google"
                device="desktop"
                url={slice.primary.google_playstore_button_url[0].text}
              />
            )}
            {slice.primary.app_store_button_text[0].text && (
              <Button
                innerText={slice.primary.app_store_button_text[0].text}
                type="apple"
                device="desktop"
                bgColor="white"
                textColor="#FF6100"
                url={slice.primary.app_store_button_url[0].text}
              />
            )}

            {slice.primary.mobile_button_text[0].text && (
              <Button
                text={slice.primary.mobile_button_text[0].text}
                type="none"
                device="mobile"
                url={slice.primary.mobile_button_url[0].text}
              />
            )}
          </div>
        </div>

        {desktop_image?.url && <div className="img-container"></div>}
      </SectionContainer>
    </PageContainer>
  );
};

export default HeroSlice;
