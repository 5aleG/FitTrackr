import React, { useState } from 'react';
import LoginForm from "../../Components/LoginForm/loginForm";
import { BackgroundContainer, 
      MarketingText,
      LoginContainer, 
      LoginButton,
      ButtonText,
      SignUpButton } from "./loginStyles";

const Login = () => {

  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLoginClick = () => {
    setShowLoginForm(true);
  };
  return (
    <BackgroundContainer>
      <MarketingText>“ MAKE FITNESS YOUR DAILY HABBIT “</MarketingText>
      <LoginContainer>
        <LoginButton onTouchStart={handleLoginClick}>
          <ButtonText>Login</ButtonText>
        </LoginButton>
        <SignUpButton>
          <ButtonText>Sign Up</ButtonText>
        </SignUpButton>
      </LoginContainer>
      {showLoginForm && <LoginForm />}
    </BackgroundContainer>
  );
};

export default Login;
