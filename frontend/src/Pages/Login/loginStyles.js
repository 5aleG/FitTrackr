import styled, { keyframes, css} from 'styled-components'

const shakeAnimation = keyframes`
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-10px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(10px);
  }
`;

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

export const LogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`

export const Logo = styled.img`
    width: 50px;
    height: 50px;
`

export const HelloText = styled.h2`
    font-weight: normal;
    color: var(--primary-text-color);
    margin-top: 30px;
    margin-bottom: 10px;
`;

export const WelcomeText = styled.h2`
    font-weight: bold;
    font-size: 24px;
    color: var(--primary-text-color);
    margin-bottom: 50px;
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props =>
    props.failed ? '#FFF0F0' : 'var(--input-background-color)'};
  border: ${props =>
    props.failed ? '2px solid #FF6C70' : 'none'};
  border-radius: 40px;
  padding: 8px 16px;
  width: 100%;
  max-width: 300px;
  margin-bottom: 15px;
  ${props =>
    props.failed &&
    css`
      animation: ${shakeAnimation} 0.5s;
    `}
`;

export const Icon = styled.div`
    margin-right: 10px;
    color: #7B6F72;
`;

export const Input = styled.input`
    border: none;
    background: none;
    outline: none;
    color: #ada4a5;
    flex: 1;
    width: 315px;
    height: 40px;
`;

export const ForgotPassword = styled.p`
    display: flex;
    justify-content: center;
    color: #ada4a5;
    font-size: 14px;
    margin-bottom: 20px;
    text-decoration: underline;
    margin-bottom: 50px;

`;

export const LoginButton = styled.button`
    background-color: #e17641;
    color: white;
    font-weight: bold;
    font-size: 20px;
    border: none;
    border-radius: 40px;
    height: 60px;
    cursor: pointer;
    transition: background-color 0.3s;

  &:hover {
    background-color: #d15f32;
  }
`;

export const RegisterText = styled.p`
    margin-top: 20px;
    color: var(--primary-text-color);
`;