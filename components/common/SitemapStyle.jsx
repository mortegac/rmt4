import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: white;
  padding-bottom: 48px;
`;

export const TitleContainer = styled.div`
  max-width: var(--container-width);
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: var(--container-padding);
  margin-top:32px;
  h1 { 
    color: var(--Text-primary);
    font-size: 40px;
    line-height: 52px;
    font-weight: bold;
    margin-top: 0px;
  }
  @media (max-width: 780px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const SitemapContainer = styled.div`
  max-width: var(--container-width);
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: var(--container-padding);
  h1 {
    color: var(--Text-primary);
    font-size:40px;
    line-height:52px;
    font-weight:bold;
  }
  @media (max-width: 780px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const SitemapSection = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  &:last-child {
    margin-bottom: 0;
  }
  @media (max-width: 780px) {
    margin-bottom: 50px;
    width: 100%;
  }
  h3 {
    margin: 0;
    font-size: 16px;
    line-height: 24px;
    color: rgba(0, 17, 51, 0.8);
    font-weight: bold;
    margin-bottom: 8px;
  }
  a {
    text-decoration: none;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 8px;
    color: var(--Text-secondary);
    transition: color 0.3s ease;
    &:hover {
      color: 'var(--Text-primary);
    }
    @media (max-width: 768px) {
      margin-bottom: 14px;
    }
  }
`;
