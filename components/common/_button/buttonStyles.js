import styled from "styled-components";

export const Anchor = styled.a`
    &.fullwidth {
        width: 100%;
        @media (max-width: 768px) {
            width: 100% !important;
        }
    }
    // &.disabled{
    //     background-color: rgba(0, 17, 51, 0.15);
    //     color: rgba(0, 17, 51, 0.3);
    // }
    
`;
export const ButtonContainer = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: ${(props) => props.padding ? props.padding : "8px 16px"};
    font-weight: bold;
    border-radius: ${(props) => props.borderRadius ? props.borderRadius : "20px"};
    font-family: "Nunito Sans";
    font-size: 16px;
    line-height: 24px;
    border: none;   
    cursor: pointer;
    transition: background 0.3s ease;
    height: ${(props) => props.height ? props.height : "40px"};
    width: 100%;
    background: ${(props) => props.bgColor};
    color:  ${(props) => props.textColor};
    border:  1px solid ${(props) => props.borderColor}; 
    :hover {
        background-color: ${(props) => props.bgHover};
        color: ${(props) => props.bgHoverText};
    }
    &.disabled{
        background-color: rgba(0, 17, 51, 0.15);
        border:  1px solid rgba(0, 17, 51, 0.15); 
        color: rgba(0, 17, 51, 0.3);
        cursor: default;
    }
`;