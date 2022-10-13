import React from 'react';
import { AlertIco } from './icons/AlertIco';
import { AlertContainer } from './alertStyles';
// import variants from './button_variants';

const Alert_ = ( props ) => <AlertBase 
    { ...props } 
/>

const AlertBase = ({
        type='default',
        text='',
        ...rest
    })=>{
    return(
        <AlertContainer
            bgColor='rgba(255, 187, 0, 0.15);'
            borderColor='rgba(255, 187, 0, 0.15)'
        >
            <div className='ico'>
                <AlertIco></AlertIco>
            </div>
            <span>{text}</span>
        </AlertContainer>
    )
}

export default Alert_;