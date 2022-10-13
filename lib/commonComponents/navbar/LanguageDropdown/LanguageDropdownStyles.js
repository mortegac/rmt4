import styled from "styled-components";

export const LanguageDropdownContainer = styled.div`{

a{
    text-decoration: none;
    display:inline-flex;
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
    font-weight: 700;
    color: #001133cc;
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
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  .selected li{
    color:#ff6100;
  }
  


max-width: 150px;
font-family: 'Nunito Sans', sans-serif;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
color: #00113399;
font-size: 14px;
line-height: 20px;
font-weight: 700;
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
  width: 100%;
  left: 0;
  right: 0;
  top: 0px;
  padding-top: 57px;
  opacity: 0;
  transition: opacity 0.3s ease;
  .list-wrap {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
    border: 1px solid rgba(0, 17, 51, 0.15);
    box-shadow: 0px 3px 15px rgba(0, 17, 51, 0.05);
    border-radius: 6px;
    min-width: 137px;
    a {
      width: 100%;
      transition: background 0.3s ease;
      :hover {
        background: rgba(0, 17, 51, 0.05);
      }
      .item {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        padding: 12px 24px;
        transition: background 0.3s ease;
        color: #001133cc;
        transition: color 0.3s ease;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.15px;
        font-weight: 400;
        &.active {
          color: #ff6100;
        }
      }
    }
  }

`;
