import React from 'react';
import { SectionContainer } from './containerStyles';
import variants from './containerVariants';

const SectionBase_ = ({ children, type, ...rest })=>{
    return(
        <SectionContainer 
            { ...variants[type || 'default'] } 
            { ...rest }
        >
            {children}
        </SectionContainer>
    )
}

export default SectionBase_;