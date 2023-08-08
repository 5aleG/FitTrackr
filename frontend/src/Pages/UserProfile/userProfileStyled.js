import styled from 'styled-components';

export const UserProfileSquare = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--background-color);
  border-radius: 30px;
  padding: 20px;
  color: var(--primary-text-color);
  cursor: pointer;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  box-shadow: 0 0 18px var(--box-shadow-color);
`;

export const PencilIcon = styled.div`
  position: absolute;
  bottom: 2px;
  right: 1px;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  background-color: #007bff;
  border-radius: 50%;
  border: 2px solid #ffff;
`;

export const UserEditAvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserEditAvatarWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #e67842;
  cursor: pointer;
`;

export const UserEditAvatar = styled.img`
  border-radius: 50%;
`;

export const UserEditText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 600;
  margin: 20px;
  color: var(--primary-text-color);
`;

export const UserFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
`;

export const InputDescription = styled.div`
  margin-left: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 12px;
  font-weight: 600;
  color: #b8b8bc;
`;

export const UserInputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f4f4f4;
  border-radius: 10px;
  padding: 8px 16px;
`;

export const Icon = styled.div`
  margin-right: 10px;
  color: #7b6f72;
`;

export const Input = styled.input`
  border: none;
  background: none;
  outline: none;
  color: #ada4a5;
  flex: 1;
  height: 40px;
`;

export const SubmitButton = styled.button`
  background-color: ${props => (props.success ? 'green' : '#e17641')};
  color: white;
  font-weight: bold;
  font-size: 16px;
  border: none;
  border-radius: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
  height: 40px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => (props.success ? 'green' : '#d15f32')};
  }
`;

export const RestetDataWrapper = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  `

export const ResetDataButton = styled.button`
  background-color: #000;
  color: white;
  font-weight: bold;
  font-size: 15px;
  border: none;
  border-radius: 40px;
  margin-top: 40px;
  margin-bottom: 120px;
  width: 250px;
  height: 35px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #BA3602;
  }
`