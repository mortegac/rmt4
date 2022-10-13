import React from "react";
import { Container, Section, Btn, Text, H2 } from '../common/';
const SectionBgColorSlice = ({ slice }) => {
  const { 
    primary:{bg_section, heading_title, heading_description, sign_up_button_link, sign_up_button_text}, 
  } = slice;

  return (
    <Container type='solid-blue'>
        <Section type='solid-blue'>
          <H2 textColor='white'>{heading_title.text}</H2>
          <Text 
            textColor='white'
            textAlign='center'
          >{heading_description.text}</Text>
          
          <Btn
            url={sign_up_button_link.text}
            fullwidth={false} 
            type='outline-white' 
            innerText={sign_up_button_text.text}
            style={{ width: '106px', marginTop: '24px' }}
          />
      </Section>
    </Container>
  );
};

export default SectionBgColorSlice;
