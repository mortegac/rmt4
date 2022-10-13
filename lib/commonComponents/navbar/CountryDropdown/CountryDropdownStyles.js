import styled from "styled-components";

export const CountryDropdownContainer = styled.div`{
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
  font-weight: bold;
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
  opacity: 0;
  transition: opacity 0.4s ease;
}

  

max-width: 150px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #00113399;
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
    padding-top:7px;
    &.space-1{
      width: 195px;
      left:-58px;
    }
    &.space-2{
      width: 390px;
      left:-148px;
    }
    .list-wrap-mannualy {
      display: flex;
      flex-flow: row wrap;
      border-top: 1px solid rgba(0, 17, 51, 0.15);
      max-width: 584px;
      padding:8px 0px;
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
      padding:8px 0px;
      a {
        width: 194px;
        border-radius:6px;
        display:flex;
        flex-direction:row;
        justify-content:center;
        align-items:center;
        .item {
          border-radius: 6px;
          width: 178px;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          padding: 12px 8px;
          transition: background 0.3s ease;
          color: #001133cc;
          font-size: 16px;
          line-height: 24px;
          letter-spacing: 0.15px;
          font-weight: normal;
          img{
            margin-right:12px;
          }
          :hover {
            background: rgba(0, 17, 51, 0.05);
          }
          &.active {
            border-radius:6px;
            background: rgba(0, 17, 51, 0.1);
          }
        }
      }
    }
  }
`;