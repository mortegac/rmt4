import styled from "styled-components";

export const PageContainer = styled.div`
  padding: 112px 0px;
  @media (max-width: 768px) {
    padding: 39px 0px 48px;
  }
`;
export const SectionContainer = styled.div`
  padding: 64px 24px;
  max-width: var(--container-width);
  margin: auto;

  @media (max-width: 768px) {
    padding: 0px 24px;
  }

  h2 {
    font-size: 36px;
    line-height: 50px;
    margin: 0px 0px 16px;
    text-align: center;
    font-weight: bold;
    color: var(--Text-primary);
    width: fit-content;
    margin: 0px auto 16px auto;
    @media (max-width: 768px) {
      font-size: 22px;
      line-height: 30px;
    }
  }

  h5 {
    color: rgba(0, 17, 51, 0.6);
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    margin: 0;
    padding-bottom: 24px;
  }

  p {
    width: fit-content;
    margin: 0px auto 16px auto;
    @media (max-width: 768px) {
      width: 70%;
      text-align: center;
    }
  }

  p,
  h5,
  .image-wrapper {
    text-align: center;
  }
  .image-wrapper {
    padding-bottom: 24px;
    margin-top: -3px;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: rgba(0, 17, 51, 0.3);
  }
  .swiper-pagination-bullet-active {
    background: rgba(0, 17, 51, 0.6);
    opacity: 1;
  }
`;

export const SwiperContainer = styled.div`
  p {
    width: fit-content;
    text-align: center;
    max-width: 770px;
    margin: 0px auto 16px auto;
    padding-bottom: 24px;
    @media (max-width: 768px) {
      width: 70%;
      text-align: center;
    }
  }
  h5 {
    width: fit-content;
    margin: auto;
  }
  .swiper-slide {
    padding-bottom: 20px;
  }
  .swiper-button-prev {
    margin-left: -10px;
  }
  .swiper-button-next {
    margin-right: -10px;
  }
`;
