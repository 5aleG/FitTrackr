import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  UserEditText,
  UserEditAvatarContainer,
  UserEditAvatarWrapper,
  UserEditAvatar,
  PencilIcon,
  UserProfileSquare,
  UserFormContainer,
  InputDescription,
  UserInputContainer,
  Input,
  SubmitButton,
  RestetDataWrapper,
  ResetDataButton,
} from './userProfileStyled';
import { FaPencilAlt } from 'react-icons/fa';
import UserIcon from '../../Components/UserIcon/userIcon';
import DarkmodeToggle from '../../Components/DarkmodeToggle/darkmodeToggle';
import Navbar from '../../Components/Navbar/navbar';
import fitTrackrAPI from '../../Axios/fitTrackrAPI';

const userAvatar = require('../../Assets/user_avatar.svg').default;

const UserProfile = () => {
  const [emailPasswordFormData, setEmailPasswordFormData] = useState({
    email: '',
    password: '',
    repeatPassword: '',
  });

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    age: '',
    height: '',
    weight: '',
  });

  const [isLoading, setIsLoading] = useState(true);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const access_token = localStorage.getItem('access_token');
    const refresh_token = localStorage.getItem('refresh_token');

    if (!access_token || !refresh_token) {
      navigate('/login');
    }
  }, [navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fitTrackrAPI.put('/userprofile/me/', formData);
      setUpdateSuccess(true);
      console.log('API Response:', response.data);
    } catch (error) {
      console.error('API Error:', error);
    }
  };

  const handleEmailPasswordSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fitTrackrAPI.put('/user/me/', emailPasswordFormData);
      setUpdateSuccess(true);
      console.log('API Response:', response.data);
    } catch (error) {
      console.error('API Error:', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // Use conditional logic to set the correct form data
    if (name === 'email' || name === 'password' || name === 'repeatPassword') {
      setEmailPasswordFormData({ ...emailPasswordFormData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fitTrackrAPI.get('/userprofile/me/');
        setFormData({
          first_name: response.data.first_name,
          last_name: response.data.last_name,
          age: response.data.age,
          height: response.data.height,
          weight: response.data.weight,
        });
        setIsLoading(false);
      } catch (error) {
        console.error('API Error:', error);
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <>
      <UserIcon />
      <DarkmodeToggle />
      <UserEditText>Edit Profile</UserEditText>
      <UserEditAvatarContainer>
        <UserEditAvatarWrapper>
          <UserEditAvatar src={userAvatar} alt="User Avatar" />
          <PencilIcon>
            <FaPencilAlt size={12} />
          </PencilIcon>
        </UserEditAvatarWrapper>
      </UserEditAvatarContainer>
      <UserProfileSquare>
        <UserFormContainer onSubmit={handleEmailPasswordSubmit}>
          <InputDescription>Email Address</InputDescription>
          <UserInputContainer>
            <Input
              type="text"
              name="email"
              placeholder={emailPasswordFormData.email}
              onChange={handleInputChange}
            />
          </UserInputContainer>
          <InputDescription>Password</InputDescription>
          <UserInputContainer>
            <Input
              type="password"
              name="password"
              placeholder="New password"
              onChange={handleInputChange}
            />
          </UserInputContainer>
          <InputDescription>Repeat Password</InputDescription>
          <UserInputContainer>
            <Input
              type="password"
              name="repeatPassword"
              placeholder="Repeat new password"
              onChange={handleInputChange}
            />
          </UserInputContainer>
          <SubmitButton type="submit" success={updateSuccess}>
            {updateSuccess ? 'Updated' : 'Submit'}
          </SubmitButton>
        </UserFormContainer>
      </UserProfileSquare>
      <UserProfileSquare>
        <UserFormContainer onSubmit={handleSubmit}>
          <InputDescription>First Name</InputDescription>
          <UserInputContainer>
            <Input
              type="text"
              name="first_name"
              placeholder={formData.first_name}
              onChange={handleInputChange}
            />
          </UserInputContainer>
          <InputDescription>Last Name</InputDescription>
          <UserInputContainer>
            <Input
              type="text"
              name="last_name"
              placeholder={formData.last_name}
              onChange={handleInputChange}
            />
          </UserInputContainer>
          <InputDescription>Age</InputDescription>
          <UserInputContainer>
            <Input
              type="text"
              name="age"
              placeholder={formData.age}
              onChange={handleInputChange}
            />
          </UserInputContainer>
          <InputDescription>Height</InputDescription>
          <UserInputContainer>
            <Input
              type="text"
              name="height"
              placeholder={formData.height}
              onChange={handleInputChange}
            />
          </UserInputContainer>
          <InputDescription>Weight</InputDescription>
          <UserInputContainer>
            <Input
              type="text"
              name="weight"
              placeholder={formData.weight}
              onChange={handleInputChange}
            />
          </UserInputContainer>
          <SubmitButton type="submit" success={updateSuccess}>
            {updateSuccess ? 'Updated' : 'Submit'}
          </SubmitButton>
        </UserFormContainer>
      </UserProfileSquare>
      <RestetDataWrapper>
        <ResetDataButton>Reset Data</ResetDataButton>
      </RestetDataWrapper>
      <Navbar />
    </>
  );
};

export default UserProfile;
