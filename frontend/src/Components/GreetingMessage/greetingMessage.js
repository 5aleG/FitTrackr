import React from 'react'
import { MessageWrapper, Message, Username } from './greetingMessageStyled';

const GreetingMessage = () => { 
    

    return (
        <div>
            <MessageWrapper>
                <Message>Welcome back</Message>
                <Username>Sandra Gomes</Username>
            </MessageWrapper>
        </div>
    )
};

export default GreetingMessage;
