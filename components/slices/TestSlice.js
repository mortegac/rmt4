import React, { useEffect, useState } from "react";
import { Container, Section, Btn } from '../common';
import { extractToken } from '../../utils/jwtDecode';
import { fetchSession } from '../../services/auth.services';

const TestSlice = ({ slice }) => {

  const [localCulture, setLocalCulture] = useState('US');

  const handlerClick = (e, type) => {
    e.preventDefault();

    if (typeof document !== undefined) {
      const data = {
        i18n: {
          locale: localCulture
        },
      };
      
      document.cookie = `public-site-local=${JSON.stringify({...data})};path=/`;
      document.cookie = `public-private=${JSON.stringify({...data})};domain=.riamoneytransfer.com;path=/;`;

      if(type==='login') window.location.href ="https://secure.riamoneytransfer.com/login";
      

    }
  }

  useEffect(() => {
    async function fetchData() {
      const dataSession =  await fetchSession();
      const { response:{authToken} } = dataSession;
      const decodeToken = extractToken(authToken.jwtToken);
      setLocalCulture(decodeToken.cultureCode);
    }
    fetchData();
  }, []);



  return (
    <Container type='solid-white'>
      <Section type="solid-blue">
      <h1>Test 🤓</h1>
      <Btn
        innerText='Login'
        onClick={ (e)=>handlerClick(e, 'login')}
        fullwidth={false}
        type='solid-orange'
      />

      </Section>
    </Container>
  );
};

export default TestSlice;
