import { useState } from "react";
import { SliceFactory } from "../../../../commonComponents/Containers";
import {
  Section,
  DescriptionAndFormContainer,
  PlayVideoContainer,
  Image,
  PlayVideoButton,
} from "../dandelion/dandelionStyles";
import Modal from "../../../../commonComponents/Modal/Modal";
import { RichText } from "prismic-reactjs";
import { generateHtml } from "../../../../utils/htmlSerializer";
import { Input } from "../../../HeroSlice/components/EmailForm";

const Base = (slice) => {
  const { description, image, titleHtml, ctaText, inputPlaceholder } =
    slice.primary;

  const [activeModal, setActiveModal] = useState(false);

  const ContactUsForm = () => {
    return <Input ctaText={ctaText} inputPlaceholder={inputPlaceholder} />;
  };

  const PlayVideoIcon = () => {
    return (
      <svg
        width="83"
        height="94"
        viewBox="0 0 83 94"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M79.2857 40.8141C84.0476 43.5634 84.0476 50.4366 79.2857 53.1859L10.7143 92.7756C5.95238 95.5249 1.25317e-06 92.0883 1.1876e-06 86.5897L2.4339e-07 7.41026C1.7782e-07 1.91169 5.95239 -1.52491 10.7143 1.22437L79.2857 40.8141Z"
          fill="#FCD823"
        />
        <path
          d="M79.2857 40.8141C84.0476 43.5634 84.0476 50.4366 79.2857 53.1859L10.7143 92.7756C5.95238 95.5249 1.25317e-06 92.0883 1.1876e-06 86.5897L2.4339e-07 7.41026C1.7782e-07 1.91169 5.95239 -1.52491 10.7143 1.22437L79.2857 40.8141Z"
          stroke="#FCD823"
        />
      </svg>
    );
  };

  return (
    <Section>
      <DescriptionAndFormContainer>
        {(titleHtml[0]?.text && <h1>{generateHtml(titleHtml)}</h1>) || (
          <h1>
            Make global
            <br />
            payments a <span style="color:#FF6100">breeze.</span>
          </h1>
        )}
        {description[0]?.text ? (
          RichText.render(description)
        ) : (
          <p>Description</p>
        )}
        <ContactUsForm />
      </DescriptionAndFormContainer>
      {activeModal && (
        <Modal closeModal={() => setActiveModal(false)}>
          <video
            width="99%"
            height="99%"
            autoPlay="autoplay"
            controls="controls"
            controlsList="nodownload"
          >
            <source
              src="https://www.dandelionpayments.com/static/dandelion264v2-f15968864cde42260567e296c377d6c6.webm"
              type='video/webm;codecs="vp8, vorbis"'
            />
            <source
              src="https://www.dandelionpayments.com/static/dandelion264v2-598e9cc7a9886430fbea6c9015a3eaa9.mp4"
              type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'
            />
          </video>
        </Modal>
      )}
      {(image.url && (
        <>
          <PlayVideoContainer>
            <PlayVideoButton onClick={() => setActiveModal(true)}>
              <PlayVideoIcon />
            </PlayVideoButton>
          </PlayVideoContainer>
          <Image src={image.url} alt={image.alt || "A flower sprouting"} />
        </>
      )) || <p>Image of a flower sprouting</p>}
    </Section>
  );
};

export const Dandelion = SliceFactory(Base);
