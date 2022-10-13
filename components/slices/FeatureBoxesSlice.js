import React from "react";
import img1 from "../../images/s1_item1.svg";
import { PageContainer, SectionContainer} from './FeatureBoxesSliceStyle';
import { Container, Section, Btn, Text, H2 } from '../common/';
const FeatureBoxesSlice = ({ slice }) => {
const {primary: { feature_boxes_heading }} = slice;

  return (
    <Container type='solid-white'>
      <SectionContainer>
        <H2 textColor='var(--Text-primary)' marginBottom='64px'>{feature_boxes_heading[0]?.text || ""}</H2>
        {slice?.primary?.feature_boxes_heading?.text && (
          <h1>{slice.primary.feature_boxes_heading[0].text}</h1>
        )}
        <div className="items-container">
          {slice.items.map((box, index) => (
            <div className="item" key={`box-item-${index}`}>
              <img
                src={box?.box_image?.url || img1}
                alt={box.box_title[0].text}
              />
              <h3>{box?.box_title[0]?.text || ""}</h3>
              <p>{box?.box_description[0]?.text || ""}</p>
            </div>
          ))}
        </div>
      </SectionContainer>
      {/* <pre style={{maxWidth: '1000px'}}>{JSON.stringify(slice, null, 2)}</pre> */}
    </Container>
  );
};

export default FeatureBoxesSlice;
