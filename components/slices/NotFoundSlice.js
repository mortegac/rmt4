import React from 'react';
import Looking from '../../images/Looking.svg';
import { Btn } from '../common';
import styled from 'styled-components'

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  h1 {
      margin: 0px;
      margin-top: 46px;
      font-weight: bold;
      text-align: center;
      font-size: 36px;
      line-height: 50px;
      @media(max-width: 470px){
        font-size: 30px;
        line-height: 40px;
      }
      @media(max-width: 380px){
        font-size: 24px;
        line-height: 30px;
      }
    }
    p {
      text-align: center;
      max-width: 280px;
      width: 100%;
      margin: 16px 0px 30px 0px; 
      @media(max-width: 380px){
        font-size: 15px;
        line-height: 24px;
      }
    }
`
const Container = styled.div`
    display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    padding-right: ;
    padding-left: ;
    padding-top: 64px;
    padding-bottom: 64px;
    min-height: 314px;
    background: white;
`

function NotFoundSlice({ slice }) {
  return <div>
      <Container>
        <ContentContainer>
          <img src={Looking}/>
          <h1>{slice.primary.notfound_title.text ? slice.primary.notfound_title.text : "Page not found 😔"}</h1>
          <p>{slice.primary.notfound_subtitle.text ? slice.primary.notfound_subtitle.text : "We can’t seem to find the page you’re looking for"}</p>
          <Btn
          innerText={slice.primary.notfound_button_text.text ? slice.primary.notfound_button_text.text : "Take me home"}
          url="/"
          fullwidth={false}
          type='solid-orange'
          height="unset"
          />
        </ContentContainer>
    </Container>
  </div>;
}

export default NotFoundSlice;
