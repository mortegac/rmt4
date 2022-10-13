import styled from "styled-components";

export const LanguageBtn = styled.div`
  max-width: 150px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: var(--Text-secondary);
  font-size: 14px;
  line-height: 20px;
  font-weight: bold;
  z-index: 100;
  cursor: pointer;
  padding: 0 20px 0 20px;
  height: 50px;
  position: relative;
  img {
    margin: 0px;
  }
  .inner-text {
    padding: 0 6px 0 6px;
  }
  .lang-chevron {
    transition: all 0.3s ease;
  }
  &:hover > .lang-chevron {
    transform: rotate(180deg);
  }
  &:hover > .list-container,
  .list-container {
    opacity: 1;
    pointer-events: unset;
  }

  .list-container {
    position: absolute;
    pointer-events: none;
    width: 584px;
    left: -246px;
    right: 0;
    top: 50px;
    opacity: 0;
    transition: opacity 0.3s ease;
    padding-top: 7px;
    &.space-1 {
      width: 195px;
      left: -58px;
    }
    &.space-2 {
      width: 390px;
      left: -148px;
    }
    .list-wrap-mannualy {
      display: flex;
      flex-flow: row wrap;
      border-top: 1px solid rgba(0, 17, 51, 0.15);
      width: 100%;
      padding-top: 8px;
      margin-top: 8px;
    }
    .list-wrap {
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-start;
      align-items: center;
      background: white;
      border: 1px solid rgba(0, 17, 51, 0.15);
      box-shadow: 0px 3px 15px rgba(0, 17, 51, 0.05);
      border-radius: 6px;
      max-width: 584px;
      padding: 8px 0px;
      a {
        width: 194px;
        border-radius: 6px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .item {
          border-radius: 6px;
          width: 178px;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          padding: 12px 8px;
          transition: background 0.3s ease;
          color: var(--Text-primary);
          font-size: 16px;
          line-height: 24px;
          letter-spacing: 0.15px;
          font-weight: normal;
          img {
            margin-right: 12px;
          }
          :hover {
            background: rgba(0, 17, 51, 0.05);
          }
          &.active {
            border-radius: 6px;
            background: rgba(0, 17, 51, 0.1);
          }
        }
      }
    }
  }
`;
