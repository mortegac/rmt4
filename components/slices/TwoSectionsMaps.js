import React from "react";
import { Container, Section, Btn, Text, H2 } from "../common/";
import { PageContainer, SectionContainer } from "./TwoSectionsMapsStyle";

const SectionBgColorSlice = ({ slice }) => {
  const {
    primary: {
      heading_title,
      heading_description,
      find_a_location_button_text,
      desktop_image_map_one,
      image_logo_walmart_one,
      map_one_description,
      desktop_image_map_two,
      image_logo_walmart_two,
      map_two_description,
      find_a_location_button_link,
    },
  } = slice;

  return (
    <Container type="solid-white">
      <SectionContainer>
        <div className="text-container">
          <H2 textColor="var(--Text-primary)">{heading_title[0].text}</H2>
          <Text
            textColor="rgba(0,17,51,0.6)"
            textAlign="center"
            maxWidth="null"
          >
            {heading_description[0].text}
          </Text>
          <div className="maps-container">
            <section className="map-section">
              <img
                src={desktop_image_map_one?.url}
                alt="stars"
                style={{ marginBottom: "62px" }}
              />
              <p>{map_one_description?.text}</p>
              <img src={image_logo_walmart_one?.url} alt="stars" />
            </section>
            <section className="map-section">
              <img src={desktop_image_map_two?.url} alt="stars" />
              <p>{map_two_description?.text}</p>
              <img src={image_logo_walmart_two?.url} alt="stars" />
            </section>
          </div>

          <div className="buttons-container">
            <Btn
              url={find_a_location_button_link[0].text}
              fullwidth={true}
              type="outline-orange"
              innerText={find_a_location_button_text[0].text}
              style={{ width: "178px", marginTop: "24px" }}
            />
          </div>
        </div>
      </SectionContainer>
    </Container>
  );
};

export default SectionBgColorSlice;
