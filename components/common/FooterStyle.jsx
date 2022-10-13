import { doc } from "prettier";
import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: red;
  padding-bottom: 48px;
`;

export const SectionContainer = styled.div`
  max-width: var(--container-width);
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: var(--container-padding);
  padding-top: 56px;
  @media (max-width: 780px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;
export const FooterItem = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  &:last-child {
    margin-bottom: 0;
  }
  .logowalmart {
    margin-top: -12px;
    @media (max-width: 1050px) {
      display: block;
      margin-bottom: 29px;
    }
  }
  @media (max-width: 780px) {
    margin-bottom: 50px;
    width: 100%;
  }
  .social-media-icons {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 24px;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        transition: all 0.4s ease;
        width: 100%;
        path {
          fill: ${(props) => props.colorMicrosite || "var(--Text-secondary)"};
          transition: all 0.4s ease;
        }
      }
      &:hover {
        svg {
          transform: scale(1.1);
          path {
            fill: ${(props) => props.colorMicrosite || "var(--Text-primary)"};
          }
        }
      }
    }
    @media (max-width: 1100px) {
      flex-wrap: wrap;
    }
    @media (max-width: 500px) {
      gap: 12px;
    }
  }
  h3 {
    margin: 0;
    font-size: 16px;
    line-height: 24px;
    color: ${(props) => props.colorMicrosite || "var(--Text-primary)"};
    font-weight: bold;
    margin-bottom: 24px;
  }
  a {
    text-decoration: none;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 8px;
    color: ${(props) => props.colorMicrosite || "var(--Text-secondary)"};
    transition: color 0.3s ease;
    &:hover {
      color: ${(props) => props.colorMicrosite || "var(--Text-primary)"};
    }
    @media (max-width: 768px) {
      margin-bottom: 14px;
    }
  }
`;
export const FooterText = styled.div`
  padding: 0px 15px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  p,
  h6 {
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    margin: 48px 0 0 0;
    color: ${(props) => props.colorMicrosite || "var(--Text-secondary)"};
    @media (max-width: 768px) {
      text-align: center;
      max-width: 90%;
    }
  }
`;
