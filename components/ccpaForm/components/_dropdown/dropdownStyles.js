import styled from "styled-components";
import calcChevron from "../../assets/calc-chevron.svg";

export const SelectedContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
`;

export const ChevronContainer = styled.span`
  position: absolute;
  right: 12px;
  pointer-events: none;
  // z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 480px) {
    width: 20px;
  }
  .chevron-rotate-bottom {
    transition: all 0.3s ease;
    transform: rotate(180deg);
  }
  .chevron-rotate-top {
    transition: all 0.3s ease;
  }
`;

export const ListSearchContainer = styled.div`
    border: 1px solid green;
    background-color: white;
    position: absolute;
    z-index: 1000;   
    border-width: 1px;
    border-color: rgba(0,17,51,.15);
    box-shadow: 0 3px 15px rgb(0 17 51 / 5%);
    border-radius: .375rem;
    min-width: 100%;
    max-height: 400px;
    overflow: auto;
    ul{
        padding-top: .5rem;
        padding-bottom: .5rem;
        margin: 0;
        padding: 0;
        list-style-type: none;
        list-style: none;
    }
    .item {
        cursor: pointer;
        font-weight: 400;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
    }
    .item:hover {
        background-color: rgba(0,17,51,.1);
    }
    .item-separator {
        border-bottom: 1px solid rgba(0,17,51,.15);
        box-shadow: 0 3px 15px rgb(0 17 51 / 5%);
        margin-left: 10px;

    }
    .item-container {

        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: center;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        padding-top: .75rem;
        padding-bottom: .75rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    }

    span{
        margin-left: 12px;
        font-family: Nunito Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        display: flex;
        align-items: center;
        letter-spacing: 0.15px;
        color: rgba(0, 17, 51, 0.8);
    }

    span:first-child {
        margin-left: 0px;
    }
`;

export const DropdownContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  .truncate {
    width: calc(100% - 28px - 5px);
    max-width: 225px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @media (max-width: 420px) {
      max-width: 220px;
    }
    @media (max-width: 400px) {
      max-width: 180px;
    }
    &.dropdown-selected {
      padding-left: 24px;
    }
  }
  .flag-container {
    height: 20px;
    border-radius: 2px;
    overflow: hidden;
    outline: 1px solid rgba(0, 0, 0, 0.15);
    outline-offset: -1px;
    margin-right: 8px;
  }
  .dropdown-label {
    font-weight: normal;
  }
  .dropdown-container {
    width: 100%;
  }
  .dropdown-selected {
    font-weight: 700;
  }
  .dropdown-list {
    position: absolute;
    width: 100%;
    top: 50px;
  }
  input {
    // height: 100%;
    height: 96%;
    width: 100%;
    max-width: 270px;
    text-overflow: ellipsis;
    border: none;
    font-style: normal;
    font-weight: 700;
    line-height: 52px;
    margin: 0px;
    margin-left: 5px;
    color: var(--Text-primary);
    font-family: "Nunito Sans";
    font-size: 22px;
    @media (max-width: 768px) {
      font-size: 20px;
    }
    &:focus {
      outline: none;
    }
  }
`;
