import React from 'react';
import { PageContainer } from './containerStyles';
import variants from './containerVariants';

const Container_ = ({ children, type, ...rest })=>{
    return(
        <PageContainer 
            { ...variants[type || 'default'] } 
            { ...rest }
        >
            {children}
        </PageContainer>
    )
}

export default Container_;