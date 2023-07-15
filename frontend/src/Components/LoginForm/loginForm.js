import React, { useState } from 'react';
import { FormContainer,
    FormOverlay,
    FormTitle,
    Form,
    FormField,
    Label,
    Input,
    SubmitButton,} from "./loginFormStyled"
    
    const LoginForm = ({ onClose }) => {
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
    
      const handleUsernameChange = (event) => {
        setUsername(event.target.value);
      };
    
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        // Add your login logic here
        console.log('Username:', username);
        console.log('Password:', password);
        // Reset the form
        setUsername('');
        setPassword('');
      };
    
      return (
        <FormOverlay>
          <FormContainer>
            <FormTitle>Login</FormTitle>
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
          </FormContainer>
        </FormOverlay>
      );
    };
    
    export default LoginForm;