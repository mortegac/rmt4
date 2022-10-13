import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: block;
  width: 100%;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: ${(props) => props.bgColor};
  padding: 64px 24px;

  @media (max-width: 500px) {
    .tooltipmodal:hover .tooltip-text {
       {
        visibility: visible;
        opacity: 1;
        transition: opacity 0.5s ease-in-out;
        color: rgba(0, 17, 51, 0.8);
      }
    }
  }

  .tooltipmodal {
    @media (max-width: 500px) {
      path {
        fill: #b4b8c1;
      }
      path:hover {
        fill: var(--Ria-orange);
      }

      margin-top: 18px;

      .tooltip-text {
        h3 {
          color: rgba(0, 17, 51, 0.3);
        }
      }

      .tooltip-text {
        left: -2vw;
        width: 90vw;
        top: 440px;
        margin-left: 0px;
        position: absolute;
        z-index: 9;
      }
      .tooltip .tooltip-text::after {
        border-width: 0px;
      }
      .tooltip:hover .tooltip-text {
        visibility: visible;
        opacity: 1;
        transition: opacity 0.5s ease-in-out;
      }
    }
  }
`;
export const SectionContainer = styled.div`
  max-width: var(--container-width);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: var(--container-padding);
  min-height: 512px;
  position: relative;

  .thankYouSection {
    align-items: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
  .hero-cta {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .learn-more {
      color: var(--Light);
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      margin-right: 14px;
    }
  }
  .text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    z-index: 100;
    position: relative;
    margin-top: 132px;
    margin-bottom: 90px;
    @media (max-width: 768px) {
      width: 100%;
      justify-content: center;
      align-items: center;
    }

    h1 {
      font-size: 40px;
      line-height: 52px;
      color: var(--Text-primary);
      font-weight: bold;
      margin-bottom: 24px;
      max-width: 500px;
      width: 100%;
      text-align: center;
      @media (max-width: 768px) {
        max-width: none;
        text-align: center;
      }
    }
    p {
      font-weight: normal;
      font-size: 16px;
      letter-spacing: 0.15px;
      color: var(--Text-primary);
      max-width: 490px;
      margin: 0 0 30px 0;
      text-align: center;
      @media (max-width: 768px) {
        max-width: none;
        text-align: center;
      }
    }
    .buttons-container {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: no-wrap;
      @media (min-width: 768px) {
        width: 50%;
      }
      @media (max-width: 768px) {
        width: 100%;
        display: flex;
        flex: 1;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
      }
      a {
        /* padding-right: 24px; */
        &.mobile {
          display: none;
          @media (max-width: 768px) {
            display: flex;
          }
        }
        &.desktop {
          display: flex;
          @media (max-width: 768px) {
            display: none;
          }
        }
        @media (min-width: 768px) {
          padding-right: 24px;
        }
      }
    }
  }
  .img-container {
    position: relative;
    height: 100%;
    width: 100%;
    z-index: 0;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
    @media (max-width: 768px) {
      position: relative;
      display: ${(props) =>
        typeof props.mobile != "undefined" && props.mobile != null
          ? "block"
          : "none"};
      width: 100%;
      height: 400px;
      background-image: url("${(props) => props.mobile}}");
      background-repeat: no-repeat;
      background-position-x: center;
      background-position-y: bottom;
      background-size: 100%;
    }
    .fade {
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(to top, #001133 10%, transparent);
      pointer-events: none;
    }
    img {
      height: 100%;
      width: 100%;
      &.header-img-desktop {
        @media (max-width: 768px) {
          display: none;
        }
      }
      &.header-img-mobile {
        display: none;
        max-width: 100%;
        width: 100%;
        @media (max-width: 768px) {
          display: block;
        }
      }
    }
  }
  .info-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ContainerItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;

  .messageUploadFile {
  }

  .dropdown-list .suggestion-active {
    background-color: rgb(241, 241, 241);
  }

  label {
    img.checked {
      background: url(${(props) => props.radioButtonEnabled});
    }
    img.unchecked {
      background: url(${(props) => props.radioButtonDisabled});
    }
  }

  label[for="scales"] {
    input {
      display: none;
    }
    img.checked {
      background: url(${(props) => props.checkboxEnabled});
    }
    img.unchecked {
      background: url(${(props) => props.checkboxDisabled});
    }
    b,
    span {
      display: contents;
    }
    span {
      font-weight: 400;
    }
    div div {
      display: inline-block;
      margin-top: -30px;
      margin-left: 32px;
    }
  }

  button {
    height: 48px;
    border-radius: 24px;
    padding: 12px 0px;
  }

  .chevron.chevron-rotate-top {
    margin-top: 4px;
  }

  #state,
  #city,
  #stateAgent,
  #cityAgent {
    margin-bottom: 23px;
  }

  #typeOfRequest {
    margin-top: 5px;
  }

  label {
    color: rgba(0, 17, 51, 0.8);
  }

  input[name="state"],
  input[name="city"],
  input[name="stateAgent"],
  input[name="cityAgent"] {
    font-size: 16px;
    padding-left: 12px;
  }

  #otherAdresses {
    margin-bottom: 8px;
  }

  label[for="html"] {
    display: flex;
    margin-left: 10px;
    img {
      margin-right: 20px;
      margin-bottom: 20px;
    }
    font-weight: 700;
  }

  input[type="checkbox"] {
    accent-color: var(--Ria-orange);
    height: 42px;
    width: 42px;
    margin: 0;
    margin-top: -7px;
    margin-right: 12px;
    // padding: 0 5px;
    &:focus {
      box-shadow: 0 0 0 0px var(--Ria-orange);
    }
  }
  input[type="radio"] {
    accent-color: var(--Ria-orange);
    height: 21px;
    width: 21px;
    margin: 0px 0px 21px 0px;
    background: orange;
    display: none;
    cursor: pointer;
    &:focus {
      box-shadow: 0 0 0 0 transparent;
    }
    &.labelRadio {
      // margin-left: 20px;
      // background-color: pink;
    }
  }

  .truncate.dropdown-selected {
    color: rgba(0, 17, 51, 0.8);
  }

  a {
    height: 48px;
    display: flex;
    align-items: center;
    margin-left: 16px;
  }
`;

export const Tooltip = styled.div`
  .tooltip {
    position: relative;
    display: inline-block;
    margin-top: 18px;
    path {
      fill: #b4b8c1;
    }
  }

  .tooltip:hover,
  .tooltip:active {
    path {
      fill: var(--Ria-orange);
    }
  }

  @media (max-width: 500px) {
    .tooltip {
      display: none;
    }
  }

  @media (min-width: 501px) {
    .tooltipmodal {
      display: none;
    }
  }

  .tooltip h3 {
    color: rgba(0, 17, 51, 0.3);
    margin-top: 0px;
  }

  .tooltip {
    h4,
    p {
      color: rgba(0, 17, 51, 0.8);
    }
  }

  .lastToolTipP {
    margin-bottom: 0px;
  }

  .tooltip-text {
    opacity: 0.2;

    visibility: hidden;
    width: 440px;
    background: white;
    color: #fff;

    border-radius: 24px;
    padding: 38px 40px;
    display: flex;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    font-family: Nunito Sans;
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.25px;
    text-align: left;

    position: absolute;
    z-index: 1;

    // TOP POSITIION
    // bottom: 125%;
    // left: 50%;
    // margin-left: -60px;

    // LEFT POSITIION
    top: -217%;
    left: 100%;
    margin-left: 18px;
  }

  .tooltip .tooltip-text::after {
    content: "";
    position: absolute;

    right: 100%;
    margin-left: -5px;

    top: 10%;
    transform: translateY(-50%);

    border-width: 15px;
    border-style: solid;
    border-color: transparent rgb(188 188 188 / 20%) transparent transparent;
  }

  .tooltip:hover .tooltip-text {
    @media (min-width: 501px) {
      visibility: visible;
      opacity: 1;
      transition: opacity 0.5s ease-in-out;
    }
  }

  @media (max-width: 500px) {
    .tooltip-text {
      left: -240px;
    }
  }
`;
export const SpacerLine = styled.div`
  margin-top: ${(props) => props.marginTop || "24px"};
  margin-bottom: ${(props) => props.marginBottom || "-5px"};
  width: 100%;
  position: relative;
  &:after {
    position: absolute;
    content: "";
    top: -3px;
    left: 0;
    right: 0;
    height: 1px;
    background: rgba(0, 17, 51, 0.15);
  }
`;
export const ContainerForm = styled.div`
  .marginBt {
    margin-bottom: 16px;
  }

  .headerContainer {
    width: 100%;
  }

  label.marginBt {
    color: rgba(0, 17, 51, 0.8);
    font-weight: 700;
  }

  .lastRadioInput {
    margin-bottom: 5px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  .breadcrumb {
    @media (max-width: 768px) {
      text-align: left;
    }
    @media (max-width: 500px) {
      margin-top: 40px;
      margin-bottom: 26px;
      line-height: 24px;
      text-align: left;
    }
  }

  .firstParagraph {
    color: rgba(0, 17, 51, 0.8);
    @media (max-width: 500px) {
      text-align: left;
    }
  }

  label[for="typeOfRequest"] {
    margin-bottom: 5px;
    color: rgba(0, 17, 51, 0.8);
    font-weight: 700;
  }

  .error {
    font-size: 12px;
    color: #ff3355;
    margin-top: 4px;
    margin-bottom: 4px;
    min-height: 22px;
    &.last {
      min-height: unset;
    }
  }
  max-width: 440px;
  width: 100%;
  background: white;
  border: 1px solid rgba(0, 17, 51, 0.15);
  border-radius: 24px;
  padding: 48px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  e label {
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
    color: rgba(0, 17, 51, 0.8);
    margin-bottom: 5px;
  }
  span {
    display: block;
  }

  @media (max-width: 500px) {
    padding: 38px 16px 48px 16px;
  }
  h2 {
    font-size: 20px;
    line-height: 28px;
    font-weight: 700;
    color: rgba(0, 17, 51, 0.8);
    align-self: center;
    margin: 0;
  }
  p {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: rgba(0, 17, 51, 0.8);
    @media (max-width: 500px) {
      text-align: left;
    }
  }

  // label{
  //   font-size: 16px;
  //   line-height: 24px;
  //   font-weight: 700;
  //   color: rgba(0, 17, 51, 0.8);
  //   margin-bottom: 5px;
  // }

  // label{
  //   font-size: 16px;
  //   line-height: 24px;
  //   font-weight: 700;
  //   color: rgba(0, 17, 51, 0.8);
  //   margin-bottom: 5px;
  // }
  // .inputForm {
  //   height: 48px;
  //   width: 100%;
  //   border: 1px solid rgba(0, 17, 51, 0.15);
  //   border-radius: 6px;
  //   padding: 13px;
  //   color: rgba(0, 17, 51, 0.8);
  //   font-weight: 400;
  //   font-size: 16px;
  //   transition: all .4s ease;
  //   outline: none;
  //   box-shadow: 0 0 0 0 transparent;
  //   &:focus {
  //     box-shadow: 0 0 0 2px var(--Ria-orange);
  //   }
  // }
  // span{
  //   // color:#FF3355;
  //   margin-top: 4px;
  //   margin-bottom: 4px;
  //   // margin-bottom: 23px;
  //   min-height: 22px;
  //   &.last {
  //     min-height: unset;
  //   }
  // }

  .dropdown-label,
  .dropdown-selected {
    text-align: left;
    font-weight: normal;
  }
  .select-dropdown {
    height: 48px;
    width: 100%;
    font-size: 16px;
    .dropdown-selected {
      padding-left: 12px;
    }

    .truncate.dropdown-selected {
      padding-left: 12px;
      font-weight: 400;
      @media (max-width: 500px) {
        padding-left: 12px;
        font-weight: 400;
      }
    }

    .dropdown-container {
      height: 100%;
      border: 1px solid rgba(0, 17, 51, 0.15);
      border-radius: 6px;
    }

    .dropdown-container > div {
      height: 100%;
    }

    .dropdown-focused {
      border-color: var(--Ria-orange);
      box-shadow: inset 0px 0px 0px 1px var(--Ria-orange);

      .chevron > * {
        fill: var(--Ria-orange) !important;
      }
    }
  }
`;
export const FormContainer = styled.form`
margin-top: -13px;

button.uploadFileInnerBtn{
  width:max-content;
  padding: 20px 30px;

  @media(max-width:500px){
    width:100%;
    margin: 0px 0px 16px 0px;
    
  }
  
}

button.uploadFileInnerBtn:target{
  background: transparent;
    color: var(--Ria-orange);
    border: 1px solid var(--Ria-orange);
}

.uploadFileBtn{
  @media(max-width:500px){
    display:block;
  }
  align-items:center;
}

.uploadFileBtn{
  width:auto;
  p{
    font-size: 12px;
    text-align: right;
    line-height: 16px;
    margin: 0px 0px;
  }
}

.textNotice.paragraphText{
  margin-top:-10px;
  color:rgba(0, 17, 51, 0.8);
  b{
    display:inline;
  }
  a{
    text-decoration: underline;
    color: rgba(0,17,51,0.8);
  }
}

.writtenAuth{
  text-align:left;
  margin-top:2px;
  font-weight:700;
  color:rgba(0, 17, 51, 0.8);

}

.verifDeclaration{
  text-align:left;
  margin-top:24px;
  color:rgba(0, 17, 51, 0.8);


  p{
    margin-top:5px;
    color:rgba(0,17,51,0.8);
    font-size:15px;
  }

  a{
    text-decoration:underline;
  }

}


@media(max-width:500px){
  width:100%;

  .textNotice.paragraphText{
    margin-top:10px;
    text-align:left;
  }

  .error{
    margin-bottom:4px;
  }

}

label[for="postalCode"] {
  margin-top: 23px;
}

.inputTopMarginForLabel{
  margin-top:5px;
}

#codephoneNumber, #codeotherPhoneNumber, #codephoneNumberAgent{
  margin-top:0px;
}

.noVisibleError{
  margin: 0px 0px;
}

  // .marginBt{ margin-bottom: 16px; }
  // .error{
  //   color:#FF3355;
  //   margin-top: 4px;
  //   margin-bottom: 4px;
  //   min-height: 22px;
  //   &.last {
  //     min-height: unset;
  //   }
  // }
  // .dropdown-label, .dropdown-selected {
  //   text-align: left;
  //   font-weight: normal;
  // }
  // .select-dropdown {
  //   height: 48px;
  //   width: 100%;
  //   font-size: 16px;
  //   .dropdown-selected {
  //     padding-left: 12px;
  //   }

  //   .dropdown-container {
  //     height: 100%;
  //     border: 1px solid rgba(0, 17, 51, 0.15);
  //     border-radius: 6px;  
  //   }

  //   .dropdown-container > div {
  //     height: 100%;
  //   }

  //   .dropdown-focused {
  //     border-color: var(--Ria-orange);
  //     box-shadow: inset 0px 0px 0px 1px var(--Ria-orange);
  
  //     .chevron > * {
  //       fill: var(--Ria-orange) !important;
  //     }
  //   }
  // }
  }
  }


  // max-width: 440px;
  // width: 100%;
  // background: white;
  // border: 1px solid rgba(0, 17, 51, 0.15);
  // border-radius: 24px;
  // padding: 48px;
  // display: flex;
  // flex-direction: column;
  // justify-content: flex-start;
  // align-items: flex-start;
  // @media(max-width: 500px) {
  //   padding: 24px;
  // }

  h2 {
    font-size: 20px;
    line-height: 28px;
    font-weight: 700;
    color: rgba(0, 17, 51, 0.8);
    align-self: center;
    margin: 0;
  }
  p {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: rgba(0, 17, 51, 0.8);
    div{
      text-align:left;
      p{
        a{
          text-decoration:underline;
          color:rgba(0, 17, 51, 0.8);
        }
      }
    }
  }

  label{
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
    color: rgba(0, 17, 51, 0.8); 
    margin-bottom: 5px;
  }

  .dial-dropdown{
    width:100%;
    display:flex;
    flex-direction:column;
  }

  .dial-items{
    position:relative;
    display:flex;
    flex-direction:row;
    width:100%;
  }

  .inputForm {
    height: 48px;
    width: 100%;
    border: 1px solid rgba(0, 17, 51, 0.15);
    border-radius: 6px;
    padding: 13px;
    color: rgba(0, 17, 51, 0.8);
    font-weight: 400;
    font-size: 16px;
    transition: all .4s ease;
    outline: none;
    box-shadow: 0 0 0 0 transparent;
    &:focus {
      box-shadow: 0 0 0 2px var(--Ria-orange);
    }
  }

  .inputForm.required{
    border: 1px solid rgb(255, 51, 85);
  }

  .inputForm.pattern {
    border: 1px solid rgb(255, 51, 85);
  }

  .inputForm.minLength{
    border: 1px solid rgb(255, 51, 85);
  }

  span{
    // color:#FF3355;
    margin-top: 4px;
    margin-bottom: 4px;
    
    min-height: 22px;
    &.last {
      min-height: unset;
    }
  }


  textarea {
    width: 100%;
    min-height: 150px;
    resize: none;
    // margin-bottom: 50px;
    border: 1px solid rgba(0, 17, 51, 0.15);
    border-radius: 6px;
    padding: 13px;
    color: rgba(0, 17, 51, 0.8);
    font-weight: 400;
    font-size: 16px;
    box-shadow: 0 0 0 0 transparent;
    transition: all .4s ease;
    outline: none;
    font-family: 'Nunito-sans', sans-serif;
    &:focus {
      box-shadow: 0 0 0 2px var(--Ria-orange);
    }
  }

  input[type="submit"] {
    margin-top: 26px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    font-weight: bold;
    border-radius: 24px;
    font-family: "Nunito Sans";
    font-size: 16px;
    line-height: 24px;
    border: none;   
    cursor: pointer;
    transition: background 0.3s ease;
    height: '48px';
    width: 100%;
    background: var(--Ria-orange);
    color:  white;
    border:  1px solid var(--Ria-orange); 
    appearance: none; 
    :hover {
        background-color: #ff7733;
        color: white;
    }
    @media (max-width: 768px) {
        margin-bottom: 16px;
    }
    @media(max-width: 500px){
      margin-bottom: 0;
    }
  }
  .checkbox-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    input {
      height: 24px;
      width: 24px;
      margin: 0;
      padding: 0 5px;
          &:focus {
      box-shadow: 0 0 0 0px var(--Ria-orange);
    }
    }
    p {
      margin: 0 0 0 10px;
      font-size: 15px;
    }
    a {
      text-decoration: none;
      font-weight: 700;
      color: var(--Text-primary);
      transition: all .3s ease;
      &:hover{
        color: var(--Ria-orange);
      }
    }
  }
`;

export const SelectContainer = styled.div`
  margin-top: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .separate-top {
    margin-top: 0;
    margin-bottom: 10px;
  }
`;
