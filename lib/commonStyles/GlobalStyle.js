import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
				h1 {
					font-size: ${(props) =>
            props?.theme?.typography?.h1?.desktop?.fontSize || "55px"};
					font-weight: ${(props) =>
            props?.theme?.typography?.h1?.desktop?.fontWeight || "800"};
					line-height: ${(props) =>
            props?.theme?.typography?.h1?.desktop?.lineHeight || "70px"};
					@media(max-width: ${(props) => props?.theme?.breakpoints?.md || "960px"}){
						font-size: ${(props) =>
              props?.theme?.typography?.h1?.mobile?.fontSize || "40px"};
						font-weight: ${(props) =>
              props?.theme?.typography?.h1?.mobile?.fontWeight || "800"};
						line-height: ${(props) =>
              props?.theme?.typography?.h1?.mobile?.lineHeight || "52px"};
					}
				}
				h2 {
					width: 100%;
					margin: 0;
					margin-bottom: 16px;
					text-align: left;
					font-size: ${(props) =>
            props?.theme?.typography?.h2?.desktop?.fontSize || "40px"};
					font-weight: ${(props) =>
            props?.theme?.typography?.h2?.desktop?.fontWeight || "800"};
					line-height: ${(props) =>
            props?.theme?.typography?.h2?.desktop?.lineHeight || "52px"};
					@media(max-width: ${(props) => props?.theme?.breakpoints?.md || "960px"}){
						font-size: ${(props) =>
              props?.theme?.typography?.h2?.mobile?.fontSize || "32px"};
						font-weight: ${(props) =>
              props?.theme?.typography?.h2?.mobile?.fontWeight || "800"};
						line-height: ${(props) =>
              props?.theme?.typography?.h2?.mobile?.lineHeight || "40px"};
					}
					@media(max-width: ${(props) => props?.theme?.breakpoints?.sm || "600px"}){
						text-align: left;
					}
				}
				h3 {
					margin: 0;
					margin-bottom: 8px;
					font-size: ${(props) =>
            props?.theme?.typography?.h3?.desktop?.fontSize || "16px"};
					font-weight: ${(props) =>
            props?.theme?.typography?.h3?.desktop?.fontWeight || "700"};
					line-height: ${(props) =>
            props?.theme?.typography?.h3?.desktop?.lineHeight || "24px"};
					@media(max-width: ${(props) => props?.theme?.breakpoints?.md || "960px"}){
						font-size: ${(props) =>
              props?.theme?.typography?.h3?.mobile?.fontSize || "16px"};
						font-weight: ${(props) =>
              props?.theme?.typography?.h3?.mobile?.fontWeight || "700"};
						line-height: ${(props) =>
              props?.theme?.typography?.h3?.mobile?.lineHeight || "24px"};
					}
				}
				p {
					margin: 0;
					font-size: ${(props) =>
            props?.theme?.typography?.p?.desktop?.fontSize || "14px"};
					font-weight: ${(props) =>
            props?.theme?.typography?.p?.desktop?.fontWeight || "400"};
					line-height: ${(props) =>
            props?.theme?.typography?.p?.desktop?.lineHeight || "24px"};
					@media(max-width: ${(props) => props?.theme?.breakpoints?.md || "960px"}){
						font-size: ${(props) =>
              props?.theme?.typography?.p?.mobile?.fontSize || "14px"};
						font-weight: ${(props) =>
              props?.theme?.typography?.p?.mobile?.fontWeight || "400"};
						line-height: ${(props) =>
              props?.theme?.typography?.p?.mobile?.lineHeight || "24px"};
					}
					@media(max-width: ${(props) => props?.theme?.breakpoints?.sm || "600px"}){
						text-align: left;
					}
				}
				a { 
					font-family: ${(props) =>
            props?.theme?.typography?.fontFamily || "Poppins, sans-serif"};
					font-weight: 700;
					text-decoration: none;
					color: ${(props) => props?.theme?.colors?.primary || "#F95C00"};
					position: relative;
				}
				label{
					font-family: ${(props) =>
            props?.theme?.typography?.fontFamily || "Poppins, sans-serif"};
				}
    }
    * {
        box-sizing: inherit;
        -webkit-tap-highlight-color: transparent;
    }

 
`;
