import styled from "styled-components";

export const TextBox = styled.div`
  p {
    width: 75%;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 32px;
    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
      width: 90%;
    }
  }
`;
