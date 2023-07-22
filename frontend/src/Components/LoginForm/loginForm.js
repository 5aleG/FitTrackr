import { useNavigate } from "react-router-dom";
import React, { useState, useRef } from 'react';
import {
  FormContainer,
  FormOverlay,
  FormTitle,
  Form,
  FormField,
  Input,
  SubmitButton,
} from './loginFormStyled';

const LoginForm = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const formRef = useRef();

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    // Reset the form
    setUsername('');
    setPassword('');
  };

  return (
    <FormOverlay>
      <FormContainer ref={formRef}>
        <FormTitle>Login</FormTitle>
        <Form onSubmit={handleSubmit}>
          <FormField>
            <Input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Enter your username"
            />
          </FormField>
          <FormField>
            <Input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
            />
          </FormField>
          <SubmitButton onClick={handleClick} type="submit">Submit</SubmitButton>
        </Form>
      </FormContainer>
    </FormOverlay>
  );
};

export default LoginForm;
