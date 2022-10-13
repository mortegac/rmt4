import styled from "styled-components";

export const MobileCountryContainer = styled.div`
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
  overflow-y:auto;
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
  .list-wrap-mannualy {
      border-top: 1px solid rgba(0, 17, 51, 0.15);
      height:0;
  }
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 81px;
    padding-left: 0px;
    width:100%;
    li {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      height:48px;
      width:100%;
      padding: 0 24px;
      &.active{
        background:rgba(0, 17, 51, 0.1);
      }
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
