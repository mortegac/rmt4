import React from "react";
import styled from "styled-components";
import Image from 'next/image'
import PartnerImg from "./partner.svg";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: rgba(0, 17, 51, 0.02);
  padding: 28px 0 28px 0;
`;
const SectionContainer = styled.div`
  max-width: var(--container-width);
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: var(--container-padding);
  position: relative;
  h3 {
    font-size: 18px;
    line-height: 25px;
    color: #272e61;
    margin-left: 15px;
    max-width: 350px;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

const PartnerSlice = ({ slice }) => {
  return (
    <PageContainer>
      <SectionContainer>
        <Image alt="ria-partner" src={PartnerImg}/>
        {slice.primary.partner_text[0].text && (
          <h3>{slice.primary.partner_text[0].text}</h3>
        )}
      </SectionContainer>
    </PageContainer>
  );
};

export default PartnerSlice;
