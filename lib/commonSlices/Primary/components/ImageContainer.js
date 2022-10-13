import styled from "styled-components";

const ImgHolder = styled.div`
  width: 50%;
  max-height: 450px;
  border-radius: 10px;
  overflow: hidden;
  picture {
    object-fit: contain;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    margin-bottom: ${(props) => (props.direction ? "32px" : "0")};
    width: 100%;
    max-height: 360px;
    img {
      object-position: 0;
    }
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: 0 -20px;
  }
`;

export const ImageContainer = ({
  url,
  alt,
  mobileUrl,
  mobileAlt,
  direction,
}) => {
  return (
    <ImgHolder direction={direction}>
      <picture>
        <source srcSet={url} alt={alt} media="(max-width: 500px)" />
        <source srcSet={mobileUrl} alt={mobileAlt} media="(max-width: 960px)" />
        <img src={url} alt={mobileAlt} />
      </picture>
    </ImgHolder>
  );
};
