import { PageContainer, SectionContainer } from "./PartnersLogoSliceStyles";
import { PrismicRichText } from "@prismicio/react";

const PartnersLogoSlice = ({ slice }) => {
  return (
    <PageContainer>
      <SectionContainer>
        <PrismicRichText field={slice.primary.partners_title} />
        <div className="partner-logo-container">
          {slice.items.map((logo, index) => (
            <div className="item" key={`logo-${index}`}>
              <img
                src={logo.partnerlogo.url}
                alt={logo.partnerlogo_alt[0].text}
              />
            </div>
          ))}
        </div>
      </SectionContainer>
    </PageContainer>
  );
};

export default PartnersLogoSlice;
