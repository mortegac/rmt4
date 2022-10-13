import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    text-align: center;
    margin: 0;
    margin-bottom: 16px;
    color: ${(props) => props.theme.colors.secondary};
    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
      width: 80%;
    }
  }
  p {
    width: 75%;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 32px;
    color: ${(props) => props.theme.colors.secondary};
    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
      width: 90%;
    }
  }
`;

export const ErrorMsg = styled.div`
  margin-bottom: 32px;
  padding: 10px 24px;
  border-radius: 24px;
  font-weight: 300;
  font-family: "Nunito Sans";
  border: 1px solid #f35;
  background: rgba(255, 0, 0, 0.15);
  color: red;
`;
