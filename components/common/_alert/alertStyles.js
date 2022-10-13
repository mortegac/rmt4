import styled from "styled-components";
import HeroSlice from '../../slices/HeroSliceMicroSite';

export const AlertContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding: 16px 16px;
    margin-bottom: 16px;
    /* transition: background 0.3s ease; */
    min-height: 56px;
    width: 100%;
    background: ${(props) => props.bgColor};
    border:  1px solid ${(props) => props.borderColor}; 
    box-sizing: border-box;
    border-radius: 4px;
    & .ico{
        min-width:  34px;
    }
`;