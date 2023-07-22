import React, { useState, useRef, useEffect } from "react";
import LoginForm from "../../Components/LoginForm/loginForm";
import SignUpForm from "../../Components/SignUpForm/signUpForm";
import {
  BackgroundContainer,
  LoginContainer,
  LoginButton,
  ButtonText,
  SignUpButton,
} from "./loginStyles";

const Login = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  const loginFormRef = useRef(null);
  const signUpFormRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        loginFormRef.current &&
        !loginFormRef.current.contains(e.target) &&
        signUpFormRef.current &&
        !signUpFormRef.current.contains(e.target)
      ) {
        closeForms();
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleLoginTouch = () => {
    setShowLoginForm(true);
  };

  const handleSignUpTouch = () => {
    setShowSignUpForm(true);
  };

  const closeForms = () => {
    setShowLoginForm(false);
    setShowSignUpForm(false);
  };

  return (
    <BackgroundContainer>
      {/* <MarketingText>“ MAKE FITNESS YOUR DAILY HABBIT “</MarketingText> */}
      <LoginContainer>
        <LoginButton onTouchStart={handleLoginTouch}>
          <ButtonText>Login</ButtonText>
        </LoginButton>
        <SignUpButton onTouchStart={handleSignUpTouch}>
          <ButtonText>Sign Up</ButtonText>
        </SignUpButton>
      </LoginContainer>
      {showLoginForm && (
        <div ref={loginFormRef}>
          <LoginForm onClose={() => console.log('Form closed')} />
        </div>
      )}
      {showSignUpForm && (
        <div ref={signUpFormRef}>
          <SignUpForm />
        </div>
      )}
    </BackgroundContainer>
  );
};

export default Login;

