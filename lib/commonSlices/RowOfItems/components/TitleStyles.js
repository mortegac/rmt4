import styled from "styled-components";

export const TitleContainer = styled.div`
  h2 {
    width: 100%;
    text-align: center;
    margin: 0;
    margin-bottom: 16px;
    color: ${(props) => props.theme.colors.textPrimary};
    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
      width: 100%;
    }
  }
`;
