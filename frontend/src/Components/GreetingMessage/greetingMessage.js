import React from 'react'
import { MessageWrapper, Message, Username } from './greetingMessageStyled';

const GreetingMessage = () => { 
    

    return (
        <div>
            <MessageWrapper>
                <Message>Welcome back</Message>
                {/* API call for User name - static value just for demo */}
                <Username>Sasha Golijanin</Username> 
            </MessageWrapper>
        </div>
    )
};

export default GreetingMessage;
