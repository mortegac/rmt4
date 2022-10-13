import React from "react";
import styled from "styled-components";
import phone from "../../images/s6_cellphone.svg";
import OutlineButton from "../common/OutlineButton";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #fff;
`;
const SectionContainer = styled.div`
  max-width: var(--container-width);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: var(--container-padding);
  padding-top: 64px;
  padding-bottom: 64px;
  min-height: 550px;
  background-repeat: no-repeat;
  h2 {
    margin: 24px 0 0 0;
    max-width: 620px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 24px;
    font-size: 36px;
    line-height: 50px;
    color: rgba(0, 17, 51, 0.8);
    @media (max-width: 768px) {
      font-size: 24px;
      line-height: 30px;
      margin-bottom: 32px;
    }
  }
  p {
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    max-width: 100%;
    margin-bottom: 48px;
    margin-top: 0;
    @media (max-width: 600px) {
      max-width: 100%;
    }
  }
  img {
    max-width: 640px;
  }
`;

const TitleImageSlice = ({ slice }) => {
  return (
    <PageContainer>
      <SectionContainer>
        <img
          src={slice.primary.section_image.url || phone}
          alt="Person using the app in the city"
        />
        <h2>{slice.primary.section_title[0].text}</h2>
        <OutlineButton
          text={slice.primary.button_text[0].text}
          url={
            slice?.primary.button_url.link_type === "Document"
              ? `/${slice.primary.button_url.lang}/${slice?.primary?.button_url?.uid}` ||
                ""
              : slice.primary.button_url.url
          }
        />
      </SectionContainer>
    </PageContainer>
  );
};

export default TitleImageSlice;
