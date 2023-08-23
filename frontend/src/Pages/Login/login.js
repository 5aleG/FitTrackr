import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { updateUserData } from '../../Redux/Slices/auth';
import logo from '../../Assets/logo.svg'
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
  Logo,
  LogoWrapper,
} from './loginStyles';
import fitTrackrAPI from '../../Axios/fitTrackrAPI';


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [loginFailed, setLoginFailed] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fitTrackrAPI.post("/auth/token/", formData);
      if (response.status === 200) {
        const data = response.data;
        console.log('Received data:', data);
  
        localStorage.setItem("access_token", data.access);
        localStorage.setItem("refresh_token", data.refresh);
        localStorage.setItem("user_id", data.user_id);
        
        dispatch(updateUserData({ username: formData.username }));
        console.log('Dispatched username:', formData.username);
        
        localStorage.setItem('userInfo', JSON.stringify({ username: formData.username }));
        navigate('/home'); 
      } else {
        console.error("Login failed");
        setLoginFailed(true)
      }
    } catch (error) {
      console.error(error);
      setLoginFailed(true);
    }
  };
  

  return (
    <>
      <LogoWrapper>
          <Logo src={logo} alt='logo' sty/>
        </LogoWrapper>
      <LoginContainer>
        <HelloText>Hey there,</HelloText>
        <WelcomeText>Welcome Back</WelcomeText>
        <FormContainer onSubmit={handleLogin}>
          <InputContainer failed={loginFailed}>
            <Icon>
              <FaUser />
            </Icon>
            <Input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
              autoComplete='username'
            />
          </InputContainer>
          <InputContainer failed={loginFailed}>
            <Icon>
              <FaLock />
            </Icon>
            <Input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              autoComplete="current-password"
            />
            <Icon onClick={handleShowPassword}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </Icon>
          </InputContainer>
          <ForgotPassword>Forgot password?</ForgotPassword>
          <LoginButton type="submit">Login</LoginButton>
        </FormContainer>
        <RegisterText>Don't have an account yet? Register</RegisterText>
      </LoginContainer>
    </>
  );
};

export default Login;
