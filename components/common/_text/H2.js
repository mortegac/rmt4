import React from 'react';
import { H2Public } from './textStyles';

const H2 = ( {children, textColor, textAlign, marginBottom=64} )=><H2Public 
        textColor={textColor} 
        textAlign={textAlign}
        marginBottom={marginBottom}
    >{children}</H2Public>

export default H2;