import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .swiper {
    width: auto;
    padding: 0 20px;
    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
      padding: 0;
    }
  }
  .swiper-wrapper {
    width: auto;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding-bottom: 24px;
    margin-bottom: 24px;
    @media (max-width: 960px) {
      justify-content: unset;
    }
  }
  .swiper-pagination {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translatey(24px);
  }
  .swiper-slide {
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-button-prev {
    color: ${(props) => props.theme.colors.primary};
  }
  .swiper-button-next {
    color: ${(props) => props.theme.colors.primary};
  }
  .swiper-pagination-bullet {
    background: ${(props) => props.theme.colors.primary};
    opacity: 1;
    width: 6px;
    height: 6px;
  }
  .swiper-pagination-bullet-active {
    background: ${(props) => props.theme.colors.secondary};
    opacity: 1;
    width: 6px;
    height: 6px;
    position: relative;
    outline: 2px solid ${(props) => props.theme.colors.primary};
  }
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    .swiper-button-prev,
    .swiper-button-next {
      display: none;
    }
    .swiper-button-prev {
      left: 0;
    }
    .swiper-button-next {
      right: 0;
    }
  }
`;

export const Card = styled.div`
  background-color: white;
  width: 60%;
  padding: 24px;
  height: ${(props) => (props.dandelion ? "495px" : "300px")};
  border-radius: ${(props) => (props.dandelion ? "20px" : "8px")};
  box-shadow: 0px 3px 15px ${(props) => props.theme.colors.textLightTertiary};
  border: ${(props) => (props.dandelion ? "1px solid rgba(0,17,51,.2)" : "")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-width: ${(props) => props.dandelion && "360px"};
  .image {
    width: 100%;
    height: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: ${(props) => props.dandelion && "14px"};
    img {
      width: 100%;
      max-width: 200px;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: ${(props) => (props.dandelion ? "70%" : "300px")};
    height: ${(props) => (props.dandelion ? "495px" : "unset")};
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 100%;
    height: unset;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 8px;
  h3 {
    font-size: 16px;
  }
`;
export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  p {
    &:first-child {
      font-weight: 700;
    }
  }
  a {
    &:after {
      content: "";
      width: 100%;
      height: 1px;
      background: ${(props) => props.theme.colors.primary};
      position: absolute;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease;
      bottom: 0;
      left: 0;
    }
    &:hover:after {
      transform: scaleX(1);
    }
  }
`;
