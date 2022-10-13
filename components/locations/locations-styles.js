import styled from "styled-components";

export const LocationsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${(props) =>
    props.optOut ? "calc(100vh - 115px)" : "calc(100vh - 65px)"};
  ${(props) =>
    props.hideNavbar === true && {
      position: "absolute",
      top: "0",
      height: "100vh",
    }};
  @media (max-width: 960px) {
    flex-direction: column;
    height: ${(props) => (props.optOut ? "calc(100vh - 50px)" : "100vh")};
    position: absolute;
    left: 0;
    top: 50px;
  }

  #geo {
    @media (max-width: 960px) {
      width: 95%;
      .mapboxgl-ctrl-geocoder.mapboxgl-ctrl {
        border: 2px solid rgba(0, 17, 51, 0.15);
        border-radius: 8px;
        max-width: 100%;
        width: 100%;
        font-size: 18px;
        line-height: 24px;
        .mapboxgl-ctrl-geocoder--input {
          height: 50px;
          padding: 6px 45px;
        }
      }
    }
  }
  .details-wrapper {
    height: 100%;
    width: 100%;
    overflow: hidden;
    @media (max-width: 960px) {
      height: unset;
    }
  }
`;
export const LocationsSidePanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 360px;
  min-width: 360px;
  height: 100%;
  background: white;
  overflow-y: auto;
  position: relative;
  @media (max-width: 960px) {
    width: 360px;
    min-width: 360px;
  }
  @media (max-width: 960px) {
    width: 100%;
    min-width: unset;
    h3 {
      font-size: 14px;
    }
    h4 {
      font-size: 13px;
    }
  }

  .loading {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .container {
      width: 50%;
    }
  }
  .header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 16px 0px;
    border-bottom: 1px solid rgba(0, 17, 51, 0.05);
    position: relative;
    .services {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      .service-send {
        padding: 8px 16px;
        background: rgba(0, 204, 153, 0.15);
        border-radius: 8px;
        margin-right: 8px;
        p {
          font-size: 14px;
          line-height: 20px;
          color: #008f79;
          margin: 0px;
        }
      }
      .service-pickup {
        padding: 8px 16px;
        background: rgba(0, 170, 255, 0.15);
        border-radius: 8px;
        p {
          font-size: 14px;
          line-height: 20px;
          color: #0085c7;
          margin: 0px;
        }
      }
    }
    button.back-nav {
      position: absolute;
      left: 10px;
      top: 15px;
      background: none;
      border: none;
      cursor: pointer;
    }
    h2 {
      font-size: 18px;
      line-height: 24px;
      margin: 0px;
      color: rgba(0, 17, 51, 0.8);
    }
    h3 {
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: rgba(0, 17, 51, 0.6);
      margin: 0;
    }
    h4 {
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 8px;
      color: rgba(0, 17, 51, 0.8);
    }
  }
  .hours-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    h4 {
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 16px;
      color: rgba(0, 17, 51, 0.8);
    }
    .day {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 4px 0;
      h5 {
        color: rgba(0, 17, 51, 0.8);
        font-weight: bold;
        font-size: 16px;
        line-height: 24px;
        margin: 0;
      }
      h3 {
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        color: rgba(0, 17, 51, 0.6);
        margin: 0;
      }
    }
  }
  .search-box {
    width: 100%;
    @media screen and (min-width: 960px) {
      .mapboxgl-ctrl-geocoder {
        width: 100%;
        font-size: 15px;
        line-height: 20px;
        max-width: unset;
      }
      .mapboxgl-ctrl-geocoder--icon-search {
        top: 15px;
        left: 15px;
        transform: scale(1.5);
        fill: rgba(0, 17, 51, 0.2);
      }
    }
    .mapboxgl-ctrl-geocoder--button {
      top: 14px;
      right: 50px;
      :hover {
        background-color: transparent;
      }
    }
    .mapboxgl-ctrl-geocoder.mapboxgl-ctrl {
      box-shadow: none;
    }
    .mapboxgl-ctrl-geocoder--input {
      font-family: "Nunito Sans";
      width: 100%;
      border: 2px solid rgba(0, 17, 51, 0.15);
      border-radius: 6px;
      background-color: transparent;
      margin: 0;
      height: 50px;
      color: var(--Text-primary);
      padding: 12px 12px 12px 45px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      transition: all 0.3s ease;
      ::placeholder {
        color: rgba(0, 17, 51, 0.3);
      }
      :focus {
        border: ${(props) =>
          props.theme === "xe"
            ? "2px solid rgba(0, 113, 235, 1)"
            : "2px solid var(--Ria-orange)"};
      }
    }
  }
  .header-item {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    position: relative;
    padding: 16px 24px;
    transition: background 0.3s ease;
    font-family: Nunito Sans;
    .header-item-distance {
      position: absolute;
      top: 16px;
      right: 24px;
      font-size: 14px;
      line-height: 20px;
      color: var(--Text-secondary);
    }
    &:before {
      content: "";
      position: absolute;
      bottom: 0px;
      left: 0px;
      width: 100%;
      height: 1px;
      background: rgba(0, 17, 51, 0.05);
    }
    cursor: pointer;
    :hover {
      background: #fafafb;
    }
    h3 {
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      width: 100%;
      margin: 0;
      width: 250px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: var(--Text-primary);
      text-transform: capitalize;
    }
    h4 {
      font-weight: normal;
      width: 100%;
      font-size: 14px;
      line-height: 20px;
      margin: 0;
      color: var(--Text-secondary);
      text-transform: capitalize;
    }
    p {
      color: rgba(0, 17, 51, 0.8);
      font-family: Nunito Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
    }
  }
`;
export const LocationsMap = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  transition: transform 0.4s ease;
  .btn-refresh {
    width: 200px;
  }
  @media (max-width: 960px) {
    .mapboxgl-ctrl-geocoder {
      width: 100%;
    }
    .mapboxgl-ctrl-top-right {
      width: calc(100% - 20px);
      transform: translateY(0px);
      transition: transform 0.4s ease;
    }
    .mapboxgl-ctrl-top-left {
      top: 59px;
      transition: transform 0.4s ease;
      @media (max-width: 960px) {
        top: ${(props) => (props.optOut ? "120px" : "60px")};
        top: ${(props) => props.theme === "xe" && "75px"};
      }
      @media (max-width: 720px) {
        top: ${(props) => (props.optOut ? "148px" : "60px")};
        top: ${(props) => props.theme === "xe" && "75px"};
      }
    }
    &.active {
      transform: translateY(-200px);
      .mapboxgl-ctrl-top-right {
        transform: translateY(200px);
      }
      .mapboxgl-ctrl-top-left {
        transform: translateY(200px);
        @media (max-width: 960px) {
          transform: ${(props) => props.theme === "xe" && "translateY(135px)"};
        }
      }
      @media (max-height: 500px) {
        transform: translateY(0px);
      }
    }
    transform: translateY(0px);
  }

  .marker-btn {
    background: none;
    border: none;
    cursor: pointer;
    :focus {
      outline: 0;
    }
  }
  .popup-container {
    padding: 16px;
    .popup-header {
      color: var(--Text-primary);
      font-weight: bold;
      font-size: 20px;
      line-height: 28px;
      margin: 0;
    }
    .popup-desc {
      color: var(--Text-secondary);
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      margin: 0;
    }
  }
  .selected-marker {
    transform: scale(1.3);
  }
`;
export const MobileMapList = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${(props) => (props.optOut ? "40%" : "50%")};
  background: white;
  .toggle-button {
    width: 110px;
    height: 25px;
    background: white;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    position: absolute;
    top: -25px;
    left: calc(50% - 55px);
    right: 50%;
    border-top: ${(props) =>
      props.theme === "xe"
        ? "2px solid rgba(0, 113, 235,1)"
        : "2px solid #ff6100"};
    border-left: ${(props) =>
      props.theme === "xe"
        ? "2px solid rgba(0, 113, 235,1)"
        : "2px solid #ff6100"};
    border-right: ${(props) =>
      props.theme === "xe"
        ? "2px solid rgba(0, 113, 235,1)"
        : "2px solid #ff6100"};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    transition: all 0.4s ease;
    svg {
      transform: rotate(180deg);
      path {
        transition: all 0.3s ease;
        fill: ${(props) =>
          props.theme === "xe" ? "rgba(0, 113, 235, 1)" : "var(--Ria-orange)"};
      }
    }
  }
  @media (max-width: 960px) {
    display: flex;
    transition: transform 0.4s ease;
    &.active {
      z-index: 1;
      transform: translateY(0%);
      .toggle-button {
        border-top: ${(props) =>
          props.theme === "xe"
            ? "2px solid rgba(0, 113, 235,1)"
            : "2px solid #ff6100"};
        border-left: ${(props) =>
          props.theme === "xe"
            ? "2px solid rgba(0, 113, 235,1)"
            : "2px solid #ff6100"};
        border-right: ${(props) =>
          props.theme === "xe"
            ? "2px solid rgba(0, 113, 235,1)"
            : "2px solid #ff6100"};
        svg {
          transform: rotate(0deg);
          path {
            transition: all 0.3s ease;
            fill: #001133;
          }
        }
      }
    }
    transform: translateY(100%);
  }
  @media (max-height: 500px) {
    display: none;
  }
`;
export const MobileDetails = styled.div`
  /*display: none;*/
  flex-direction: column;
`;

export const LocationNotFound = styled.div`
  position: relative;
  background: white;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
  margin-top: 24px;

  h4 {
    font-family: "Nunito Sans";
    text-align: center;
    max-width: 226px;
    font-size: 24px;
    font-weight: 700;
    color: #001133;
    opacity: 0.8;
    letter-spacing: 0.15px;
    margin-bottom: 20px;
  }

  p {
    font-family: "Nunito Sans";
    text-align: center;
    max-width: 307px;
    font-size: 16px;
    font-weight: normal;
    color: #001133;
    opacity: 0.6;
    margin: 0;
    letter-spacing: 0.15px;
  }
`;
export const FixedDetailsContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  max-width: 360px;
  width: 100%;
  @media (max-width: 960px) {
    max-width: unset;
  }
`;

export const DetailsContainer = styled.div`
  width: 100%;
  padding: ${(props) => (props.optOut ? "110px 24px 15px" : "15px 24px")};
  height: 100%;
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const NavbarDetails = styled.div`
  position: relative;
  padding: 5px 0 0 0;
  @media (max-width: 960px) {
    background: white;
    /*position: fixed;*/
    top: 0px;
    left: 0px;
    width: 100%;
    z-index: 99;

    h2 {
      max-width: 280px;
      margin-bottom: 10px;
    }
  }
  button {
    outline: 0;
    position: absolute;
    right: -20px;
    top: -3px;
    background: none;
    border: none;
    cursor: pointer;
  }

  h2 {
    font-family: "Nunito Sans";
    font-size: 24px;
    font-weight: bold;
    line-height: 32px;
    margin: 0px;
    text-align: left;
    color: #001133;
    opacity: 0.8;
    letter-spacing: 0.15px;
  }

  p {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
    color: rgba(0, 17, 51, 0.6);
    flex: none;
    order: 1;
    margin: 8px 0px;
    text-transform: capitalize;
  }

  h5 {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    letter-spacing: 0.25px;
    color: rgba(0, 17, 51, 0.8);
  }
`;

export const HeaderDetails = styled.div`
  padding: 20px 0;
  @media (max-width: 960px) {
    margin-top: 57px;
  }

  h2 {
    font-family: "Nunito Sans";
    font-size: 24px;
    line-height: 32px;
    margin: 0px;
    text-align: left;
    color: #001133;
    opacity: 0.8;
    letter-spacing: 0.15px;
  }

  p {
    font-family: "Nunito Sans";
    font-size: 14px;
    line-height: 20px;
    text-align: left;
    color: #001133;
    opacity: 0.6;
    letter-spacing: 0.25px;
  }
  h4 {
    font-family: "Nunito Sans";
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    text-align: left;
    color: #001133;
    opacity: 0.6;
    letter-spacing: 0.4px;
    text-transform: uppercase;
    margin: 0;
    margin-top: 30px;
  }
`;

export const HoursDetails = styled.div`
  border-top: 1px solid rgba(0, 17, 51, 0.08);
  border-bottom: 1px solid rgba(0, 17, 51, 0.08);

  h4 {
    font-family: "Nunito Sans";
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    text-align: left;
    color: #001133;
    opacity: 0.6;
    letter-spacing: 0.4px;
    text-transform: uppercase;
    margin: 0;
  }

  table {
    margin: 20px 0;
    width: 100%;

    tbody {
      width: 100%;
    }

    tr {
      height: 32px;
      vertical-align: initial;
      width: 100%;
      td {
        font-family: "Nunito Sans";
        color: #001133;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.15px;
      }

      td:first-child {
        opacity: 0.8;
        font-weight: 700;
        text-align: left;
      }

      td:last-child {
        width: 100%;
        text-align: right;
        color: #001133cc;
      }
    }
  }

  .today td {
    color: #099243;
  }

  .today.today-green td {
    color: #099243cc;
  }
  .today.today-red td {
    color: #db4d64cc;
  }
`;

export const GetDirectionsBtn = styled.a`
  margin: 0 auto;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  border-radius: 0px;
  background-color: ${(props) =>
    props.theme === "xe" ? "rgba(0, 113, 235,1)" : "#ff6100"};
  border: none;
  color: #fff;
  padding: 15px;
  font-size: 16px;
  font-weight: 700;
  outline: 0;
  text-align: center;
  @media (max-width: 960px) {
    left: unset;
    right: unset;
    bottom: unset;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
  }
`;
// position: fixed;
// bottom: 0;
// left: 0;
export const InputContainer = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  padding: 16px 24px;
  position: relative;

  @media (max-width: 960px) {
    z-index: 10;
    position: fixed;
    top: ${(props) => (props.optOut ? "110px" : "50px")};
    top: ${(props) => props.theme === "xe" && "0"};
    right: 0;
    left: 0;
    padding: 16px 0px;
    background: transparent;
  }
  @media (max-width: 720px) {
    top: ${(props) => (props.optOut ? "137px" : "50px")};
    top: ${(props) => props.theme === "xe" && "0"};
  }
`;
export const OpenCloseTag = styled.div`
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  color: rgba(0, 17, 51, 0.6);

  span.closed {
    color: #ff3355;
  }
  span.success {
    color: #099243;
  }
`;

export const FilterContainer = styled.div`
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  color: rgba(0, 17, 51, 0.6);
  width: 100%;

  .cont-20 {
    padding: 0 30px;
  }

  h2 {
    font-weight: 960;
    color: rgb(0, 17, 51);
    font-size: 24px;
    line-height: 32px;
  }

  h4 {
    font-weight: 960;
    color: rgba(0, 17, 51, 0.6);
    font-size: 16px;
    line-height: 24px;
  }

  .checkbox-custom {
    opacity: 0;
    position: absolute;
  }

  .checkbox-custom,
  .checkbox-custom-label {
    display: inline-block;
    vertical-align: middle;
    margin: 5px;
    cursor: pointer;
    margin-bottom: 20px;
  }

  .checkbox-custom-label {
    position: relative;
  }

  .checkbox-custom + .checkbox-custom-label:before {
    content: "";
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 6px;
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
    margin-right: 10px;
    text-align: center;
    line-height: 1;
  }

  .checkbox-custom:checked + .checkbox-custom-label:before {
    border-color: ${(props) =>
      props.theme === "xe" ? "rgba(0, 113, 235,1)" : "rgba(255, 97, 0,1)"};
    background: ${(props) =>
      props.theme === "xe" ? "rgba(0, 113, 235,1)" : "rgba(255, 97, 0,1)"};
    color: #fff;
    text-align: center;
    vertical-align: middle;
  }

  .checkbox-custom:checked + .checkbox-custom-label:after {
    content: url('data:image/svg+xml; utf8, <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.9976 4.88643L2.37504 2.26386L0.713867 3.77401L5.00038 8.06053L11.361 1.69987L9.7476 0.0864258L4.9976 4.88643Z" fill="white"/></svg>');
    position: absolute;
    left: 5px;
    top: 5px;
  }

  .checkbox-custom-label span {
    font-weight: normal;
    color: rgba(0, 17, 51, 0.8);
    font-size: 16px;
    line-height: 24px;
    position: relative;
    top: 2px;
  }

  .head-filter {
    position: relative;
    width: 100%;
  }

  .filter-closed {
    position: absolute;
    right: 0;
    top: -10px;
    cursor: pointer;
  }

  .InputGroup {
    display: -webkit-box;
    display: flex;
    height: 44px;
    width: 100%;
  }

  .InputGroup input[type="radio"] {
    display: none;
    height: 0;
    width: 0;
  }

  .InputGroup label.radius-left {
    border-radius: 6px 0 0 6px;
  }
  .InputGroup label.radius-right {
    border-radius: 0 6px 6px 0;
  }

  .InputGroup label {
    display: -webkit-box;
    display: flex;
    -webkit-box-flex: 1;
    flex: auto;
    vertical-align: middle;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    background-color: white;
    color: #001133;
    border: 1px solid rgba(0, 17, 51, 0.15);
    padding: 5px;
    margin: 0;
    width: 100%;
    -webkit-transition: color --transition-fast ease-out,
      background-color --transition-fast ease-in;
    transition: color --transition-fast ease-out,
      background-color --transition-fast ease-in;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .InputGroup label:last-of-type {
    margin-right: 0;
  }

  .InputGroup input[type="radio"]:checked + label {
    background-color: ${(props) =>
      props.theme === "xe"
        ? "rgba(0, 113, 235, 0.05)"
        : "rgba(255, 97, 0, 0.05)"};
    color: ${(props) =>
      props.theme === "xe" ? "rgba(0, 113, 235,1)" : "rgba(255, 97, 0,1)"};
    border: ${(props) =>
      props.theme === "xe"
        ? "2px solid rgba(0, 113, 235,1)"
        : "2px solid rgba(255, 97, 0,1)"};
  }

  .buttons-group-filter {
    position: absolute;
    bottom: 0;
    width: 100%;
    border-top: 1px solid rgba(0, 17, 51, 0.05);

    button {
      width: 50%;
      height: 49px;
      border: none;
      font-size: 16px;
      font-weight: 700;
    }

    .clear {
      background: white;
      color: ${(props) =>
        props.theme === "xe" ? "rgba(0, 113, 235, 1)" : "rgba(255, 97, 0, 1)"};
      outline: 0;
      font-size: 16px;
      font-family: "Nunito Sans";
      cursor: pointer;
    }

    .apply {
      background: ${(props) =>
        props.theme === "xe" ? "rgba(0, 113, 235, 1)" : "rgba(255, 97, 0, 1)"};
      color: white;
      outline: 0;
      font-size: 16px;
      font-family: "Nunito Sans";
      cursor: pointer;
    }
  }
`;
