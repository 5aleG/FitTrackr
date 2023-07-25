import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaEyeSlash, FaEye } from 'react-icons/fa';
import {
  LoginContainer,
  HelloText,
  WelcomeText,
  FormContainer,
  InputContainer,
  Icon,
  Input,
  ForgotPassword,
  LoginButton,
  RegisterText,
} from './loginStyles';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home');
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', formData.username);
    console.log('Password:', formData.password);
    // Perform the login logic here
  };

  return (
    <LoginContainer>
      <HelloText>Hey there,</HelloText>
      <WelcomeText>Welcome Back</WelcomeText>
      <FormContainer onSubmit={handleSubmit}>
        <InputContainer>
          <Icon>
            <FaUser />
          </Icon>
          <Input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </InputContainer>
        <InputContainer>
          <Icon>
            <FaLock />
          </Icon>
          <Input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            autoComplete="current-password" // Add autoComplete attribute here
          />
          <Icon onClick={handleShowPassword}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </Icon>
        </InputContainer>
        <ForgotPassword>Forgot password?</ForgotPassword>
        <LoginButton type="submit" onClick={handleClick}>Login</LoginButton>
      </FormContainer>
      <RegisterText>Don't have an account yet? Register</RegisterText>
    </LoginContainer>
  );
};

export default Login;
