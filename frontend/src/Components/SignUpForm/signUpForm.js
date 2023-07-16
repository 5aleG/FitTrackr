import React, { useState } from 'react';
import { FormOverlay,
    FormContainer,
    FormTitle,
    Form,
    FormField,
    Label,
    Input,
    SubmitButton,
    CloseButton, } from "./signUpFormStyled"

const SignUpForm = ( {onClose}) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your sign-up logic here
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    // Reset the form
    setUsername('');
    setEmail('');
    setPassword('');
  };

    return (
        <FormOverlay>
        <FormContainer>
          <FormTitle>Sign Up</FormTitle>
          <Form onSubmit={handleSubmit}>
            <FormField>
              <Label>Username</Label>
              <Input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                placeholder="Enter your username"
              />
            </FormField>
            <FormField>
              <Label>Email</Label>
              <Input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
              />
            </FormField>
            <FormField>
              <Label>Password</Label>
              <Input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter your password"
              />
            </FormField>
            <SubmitButton type="submit">Submit</SubmitButton>
          </Form>
          <CloseButton onClick={onClose}>Close</CloseButton>
        </FormContainer>
      </FormOverlay>
    )
}

export default SignUpForm;