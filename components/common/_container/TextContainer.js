import React from 'react';
import { TextContainer } from './containerStyles';


const TextContainer_ = ({ children, ...rest })=>{
    return(
        <TextContainer { ...rest }>
            {children}
        </TextContainer>
    )
}

export default TextContainer_;