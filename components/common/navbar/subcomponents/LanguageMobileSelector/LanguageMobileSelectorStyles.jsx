import styled from "styled-components";

export const MobileLangContainer = styled.div`
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fafafb;
  transform: translateX(100%);
  transition: transform 0.3s ease;
  @media (max-width: 1000px) {
    display: flex;
  }
  &.active {
    transform: translateX(0%);
  }
  .back-btn {
    position: absolute;
    left: 0px;
    top: 0px;
  }
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 81px;
    padding-left: 24px;
    li {
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 42px;
      a {
        text-decoration: none;
        color: rgba(0, 17, 51, 0.6);
        &.active {
          color: var(--Ria-orange);
        }
      }
    }
  }
`;
