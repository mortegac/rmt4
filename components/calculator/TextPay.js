import React from 'react';


const Message = ({classnameSub, text})=> <span className={`transfer-text ${classnameSub}`}>
{` ${text}`}
</span>


export const TextPay = ({
        title='', 
        isFailed=true,
        text='',
        classname='',
        classnameSub='',
}) => <div className={`details-row ${classname}`}>
        <h4>{title}</h4>
        { isFailed ? '-'
            :<Message classnameSub={classnameSub} text={text}/> 
        }
    </div>