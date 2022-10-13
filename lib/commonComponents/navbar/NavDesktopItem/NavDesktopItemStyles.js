import styled from "styled-components";

export const NavDesktopItemContainer = styled.div`
   {
    a {
      text-decoration: none;
      display: inline-flex;
      font-family: "Nunito Sans", sans-serif;
    }


    .ria{
      color:#00113399;
    }
    .dandelion{
      color:#013;
      font-family: "Poppins", sans-serif;
    }

    li{
      list-style-type:none;
      padding: 0px 20px;
      color: #00113399;
      position: relative;
    height: 100%;
    padding: 0px 20px;
    margin: 0px;
    font-size: 14px;
    line-height: 20px;
    font-weight: bold;
    transition: color 0.4s ease 0s;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    }

    ul a li {
      position: relative;
      height: 100%;
      padding: 0px 20px;
      margin: 0px;
      height: 65px;
      font-size: 14px;
      line-height: 20px;
      font-weight: bold;
      transition: color 0.4s ease 0s;
      text-decoration: none;
      display: flex;
      flex-direction: column;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
    }

    a.selected li .underline {
      background: #ff6100;
      opacity: 1;
    }

    a li .underline {
      text-decoration: none;
      position: absolute;
      width: 100%;
      left: 0;
      bottom: -22px;
      transition: all 0.5s ease;
      height: 2px;
      background: #ff6100;
      opacity: 0;
      transition: opacity 0.4s ease;
    }

    .selected li {
      color: #ff6100;
    }
  }
`;
