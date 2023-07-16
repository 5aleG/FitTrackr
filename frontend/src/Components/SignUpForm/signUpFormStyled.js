import styled, { keyframes } from 'styled-components';


const slideIn = keyframes`
from {
  transform: translateY(100%);
}
to {
  transform: translateY(0);
}
`;

export const FormOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    animation: ${slideIn} 0.3s ease-in-out;
`;

export const FormContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffffff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 9999;
`;

export const FormTitle = styled.h2`
    text-align: center;
    margin-bottom: 20px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FormField = styled.div`
    margin-bottom: 10px;
`;

export const Label = styled.label`
    font-weight: bold;
`;

export const Input = styled.input`
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    width: 200px;
`;

export const SubmitButton = styled.button`
    padding: 8px 16px;
    border-radius: 4px;
    border: none;
    background-color: #79cff2;
    color: white;
    cursor: pointer;
`;

export const CloseButton = styled.button`
    padding: 8px 16px;
    border-radius: 4px;
    border: none;
    background-color: #cfbfba;
    color: white;
    cursor: pointer;
    margin-top: 10px;
    `;
