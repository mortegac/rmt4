import React from "react";
import styled from "styled-components";
import OutlineButton from "../common/OutlineButton";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #fff;
  padding: 64px 0;
`;
const SectionContainer = styled.div`
  max-width: var(--container-width);
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: var(--container-padding);
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .half-container {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
      width: 100%;
    }
    img {
      max-width: 100%;
      @media (max-width: 768px) {
        max-width: 75%;
      }
    }
    .text-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding-left: 20px;
      @media (max-width: 768px) {
        padding: 0;
        align-items: center;
      }
      h2 {
        margin-bottom: 32px;
        font-weight: bold;
        font-size: 36px;
        line-height: 50px;
        color: rgba(0, 17, 51, 0.8);
        @media (max-width: 768px) {
          width: 100%;
          font-size: 24px;
          line-height: 30px;
          margin-bottom: 16px;
          text-align: center;
        }
      }
      p {
        text-align: left;
        margin: 0 0 32px 0;
        @media (max-width: 768px) {
          font-size: 14px;
          line-height: 20px;
          margin-bottom: 48px;
          text-align: center;
        }
      }
    }
  }
`;

const LeftImageSlice = ({ slice }) => {
  return (
    <PageContainer>
      <SectionContainer>
        <div className="half-container">
          <img src={slice?.primary?.section_image?.url || ""} alt="from home" />
        </div>
        <div className="half-container">
          <div className="text-container">
            <h2>{slice?.primary?.section_title[0]?.text || ""}</h2>
            <p>{slice?.primary?.section_description[0]?.text || ""}</p>
            {slice.primary.button_text[0]?.text && (
              <OutlineButton
                text={slice?.primary?.button_text[0]?.text || ""}
                url={
                  slice?.primary.button_url.link_type === "Document"
                    ? `/${slice.primary.button_url.lang}/${slice?.primary?.button_url?.uid}` ||
                      ""
                    : slice.primary.button_url.url
                }
              />
            )}
          </div>
        </div>
      </SectionContainer>
    </PageContainer>
  );
};

export default LeftImageSlice;
