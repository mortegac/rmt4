import { Navigation, Pagination, A11y } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { PrismicRichText } from "@prismicio/react";
import { RichText } from "prismic-reactjs";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { CarouselContainer, Card, Header, Footer } from "./CarouselStyles";

export const Carousel = ({ items, dandelion }) => {
  const cards = items;

  return (
    <CarouselContainer items={items}>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        navigation
        centeredSlides={false}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          960: {
            slidesPerView: dandelion ? 2 : 3,
            centeredSlidesBounds: true,
          },
        }}
      >
        {cards.map((slide, i) => (
          <SwiperSlide key={i} dandelion={dandelion}>
            <Card dandelion={dandelion}>
              <Header>
                {slide.cardImage && (
                  <div className="image">
                    <img
                      src={slide.cardImage.url}
                      alt={slide.cardImage.alt || "carousel-image"}
                    />
                  </div>
                )}
                {slide.cardTitle && <PrismicRichText field={slide.cardTitle} />}
                {slide.cardText && <PrismicRichText field={slide.cardText} />}
              </Header>
              <Footer>
                {slide.authorName && (
                  <PrismicRichText field={slide.authorName} />
                )}
                {slide.authorInfo && (
                  <PrismicRichText field={slide.authorInfo} />
                )}
                {slide.ctaText && (
                  <a href={slide.ctaUrl.url}>
                    {RichText.asText(slide.ctaText)}
                  </a>
                )}
              </Footer>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselContainer>
  );
};
