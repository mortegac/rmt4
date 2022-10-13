import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #fff;
  padding: 112px 0;
  @media (max-width: 768px) {
    padding: 39px 0 48px 0;
  }
`;
export const SectionContainer = styled.div`
  max-width: 592px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  position: relative;
  .loading-overlay {
    height: 100%;
    width: 100%;
    background: white;
    opacity: 0.7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 682px;
  }
  .unsub-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding: var(--container-padding);
    .buttons-container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      @media (max-width: 768px) {
        flex-direction: column;
        margin-top: 16px;
      }
    }
    h1,
    p {
      text-align: center;
    }
    h1 {
      font-weight: bold;
      font-size: 40px;
      line-height: 52px;
      margin: 0;
      @media (max-width: 768px) {
        font-size: 24px;
        line-height: 30px;
      }
    }
    p {
      margin-top: 16px;
      margin-bottom: 0px;
      max-width: 592px;
      @media (max-width: 768px) {
        font-size: 16px;
        line-height: 24px;
      }
    }
    img {
      margin-bottom: 56px;
      max-width: 100%;
      @media (max-width: 768px) {
        max-width: 220px;
      }
    }
  }
`;
export const ButtonContainer = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  font-weight: bold;
  border-radius: 20px;
  font-size: 16px;
  line-height: 24px;
  border: ${(props) =>
    props.outline ? "1px solid var(--Ria-orange)" : "none"};
  background: ${(props) =>
    props.outline ? "var(--Light)" : "var(--Ria-orange)"};
  color: ${(props) => (props.outline ? "var(--Ria-orange)" : "var(--Light)")};
  font-family: "Nunito Sans";
  cursor: pointer;
  transition: background 0.3s ease;
  font-family: "nunito sans";
  height: 48px;
  width: 192px;
  margin: 36px 8px;
  :hover {
    background: ${(props) => (props.outline ? "var(--Light)" : "#ff7733")};
  }
  @media (max-width: 768px) {
    margin: 6px 8px;
    border: none;
  }
`;