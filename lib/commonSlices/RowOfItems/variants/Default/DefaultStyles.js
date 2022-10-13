import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
