import styled from "styled-components";

export const NavMobileItemContainer = styled.div`{
  a{
    text-decoration: none;
    display:inline-flex;
    color: #00113399;
    font-family: 'Nunito Sans', sans-serif;
  }
  a li{
    position: relative;
    height: 100%;
    padding: 0px 20px;
    margin: 0px;
    height:65px;
    font-size: 14px;
    line-height: 20px;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 500;
    color: #00113399;
    transition: color 0.4s ease 0s;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
  }
  a.selected li .underline{
    background:#ff6100;
    opacity:1;
  }
  
  a li .underline {
    text-decoration: none;
    position: absolute;
    width: 100%;
    left: 0;
    bottom: -2px;
    transition: all 0.5s ease;
    height: 2px;
    background: var(--Ria-orange);
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  a.selected{
    color:#ff6100;
  }
  
  .selected li{
    color:#ff6100;
  }

  .dandelion{
    font-family: 'Poppins', sans-serif;
  }
}
`;