import React, { useState, useEffect } from 'react';
import { MessageWrapper, Message, Username } from './greetingMessageStyled';
import fitTrackrAPI from '../../Axios/fitTrackrAPI';
import Lottie from 'lottie-react';
import loaderAnimation from '../../Assets/animation_lkv6o1yb.json';

const GreetingMessage = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fitTrackrAPI.get('userprofile/me/');
        localStorage.getItem('user_id');
        const loggedInUserProfile = response.data;
        setUserProfile(loggedInUserProfile);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        setIsLoading(false);
      }
    };
  
    fetchUserProfile();
  }, []);

  const style = {
    height: 150,
    width: 150,
  };

  if (isLoading || !userProfile || !userProfile.first_name || !userProfile.last_name) {
    return <Lottie animationData={loaderAnimation} loop={true} style={style} />;
  }

  return (
    <div>
      <MessageWrapper>
        <Message>Welcome back</Message>
        <Username>{`${userProfile.first_name} ${userProfile.last_name}`}</Username>
      </MessageWrapper>
    </div>
  );
};

export default GreetingMessage;

