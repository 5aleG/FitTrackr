import React, { useState, useEffect } from 'react';
import { MessageWrapper, Message, Username } from './greetingMessageStyled';
import fitTrackrAPI from '../../Axios/fitTrackrAPI';
import Lottie from 'lottie-react';
import loaderAnimation from '../../Assets/animation_lkv6o1yb.json';

const GreetingMessage = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fitTrackrAPI
      .get('/user/users/')
      .then((response) => {
        setUser(response.data[0]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
        setIsLoading(false);
      });
  }, []);

  const style = {
    height: 150,
    width: 150,
  };

  if (isLoading || !user.first_name || !user.last_name) {
    return <Lottie animationData={loaderAnimation} loop={true} style={style} />;
  }

  return (
    <div>
      <MessageWrapper>
        <Message>Welcome back</Message>
        <Username>{`${user.first_name} ${user.last_name}`}</Username>
      </MessageWrapper>
    </div>
  );
};

export default GreetingMessage;
