import React, { useState } from 'react';
import LoginForm from "../../Components/LoginForm/loginForm";
import SignUpForm from '../../Components/SignUpForm/signUpForm';
import { BackgroundContainer, 
      MarketingText,
      LoginContainer, 
      LoginButton,
      ButtonText,
      SignUpButton } from "./loginStyles";

const Login = () => {

  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  const handleLoginTouch = () => {
    setShowLoginForm(true);
  };

  const handleSignUpTouch = () => {
    setShowSignUpForm(true);
  }

  return (
    <BackgroundContainer>
      <MarketingText>“ MAKE FITNESS YOUR DAILY HABBIT “</MarketingText>
      <LoginContainer>
        <LoginButton onTouchStart={handleLoginTouch}>
          <ButtonText>Login</ButtonText>
        </LoginButton>
        <SignUpButton onTouchStart={handleSignUpTouch}>
          <ButtonText>Sign Up</ButtonText>
        </SignUpButton>
      </LoginContainer>
      {showLoginForm && <LoginForm />}
      {showSignUpForm && <SignUpForm />}
    </BackgroundContainer>
  );
};

export default Login;
