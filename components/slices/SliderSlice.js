import React from "react";
import Image from "next/image";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import stars from "../../images/stars.svg";
import {
  PageContainer,
  SectionContainer,
  SwiperContainer,
} from "./SliderSliceStyle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SliderSlice = ({ slice }) => {
  const {
    primary: { section_subtitle },
  } = slice;

  const generateHtml = () => {
    try {
      return (
        <div
          dangerouslySetInnerHTML={{ __html: section_subtitle[0]?.text || "" }}
        />
      );
    } catch (error) {
      console.error("--generateHtml--", error);
      return <></>;
    }
  };

  const navigationParams = {
    pagination: { clickable: true, dynamicBullets: true },
  };

  return (
    <PageContainer>
      <SectionContainer>
        <h2>{generateHtml()}</h2>
        <p>{slice?.primary?.section_title[0]?.text || ""}</p>
        <div className="image-wrapper">
          <Image width="104px" alt="stars" src={stars} />
        </div>
        <SwiperContainer>
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            navigation
            {...navigationParams}
            scrollbar={{ draggable: true }}
          >
            {slice.items.map((item, i) => (
              <SwiperSlide key={i}>
                <div>
                  <p>{item.testimonial_text[0].text}</p>
                  <h5>{item.testimonial_name_and_date[0].text}</h5>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperContainer>
      </SectionContainer>
    </PageContainer>
  );
};

export default SliderSlice;
