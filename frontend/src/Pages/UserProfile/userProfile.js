import React, {useState, useEffect } from 'react'
import { 
    UserProfileSquare, 
    UserEditAvatarContainer,
    UserEditAvatarWrapper,
    UserEditAvatar,
    PencilIcon,
    UserEditText,
    UserFormContainer,
    InputDescription,
    UserInputContainer,
    Input
} from './userProfileStyled'
import UserIcon from '../../Components/UserIcon/userIcon';
import { FaPencilAlt } from 'react-icons/fa';
import DarkmodeToggle from '../../Components/DarkmodeToggle/darkmodeToggle';
import Navbar from '../../Components/Navbar/navbar';
import fitTrackrAPI from '../../Axios/fitTrackrAPI';

const userAvatar = require('../../Assets/user_avatar.svg').default;

const UserProfile = () => {
    const [formData, setFormData] = useState({
      email: '',
      password: '',
      first_name: '',
      last_name: '',
    });
    const [isLoading, setIsLoading] = useState(true);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await fitTrackrAPI.post('/user/profile/', formData);
        console.log('API Response:', response.data);
      } catch (error) {
        console.error('API Error:', error);
      }
    };
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    };
  
    useEffect(() => {
      const fetchUserData = async () => {
        try {
          const response = await fitTrackrAPI.get('/user/');
          setFormData(response.data[0]);
          setIsLoading(false);
        } catch (error) {
          console.error('API Error:', error);
          setIsLoading(false);
        }
      };
  
      fetchUserData();
    }, []);
  
    if (isLoading) {
      return null; // Or show a loading spinner
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
                <UserFormContainer onSubmit={handleSubmit}>
                <InputDescription>Email Address</InputDescription>
                    <UserInputContainer>
                        <Input
                        type='text'
                        name='email'
                        placeholder={formData.email}
                        onChange={handleInputChange}
                        >
                        </Input>
                    </UserInputContainer>
                    <InputDescription>Password</InputDescription>
                    <UserInputContainer>
                    <Input
                        type='text'
                        name='password'
                        placeholder='******'
                        onChange={handleInputChange}
                        >
                        </Input>
                    </UserInputContainer>
                    <InputDescription>First Name</InputDescription>
                    <UserInputContainer>
                    <Input
                        type='text'
                        name='first_name'
                        placeholder={formData.first_name}
                        onChange={handleInputChange}
                        >
                        </Input>
                    </UserInputContainer>
                    <InputDescription>Last Name</InputDescription>
                    <UserInputContainer>
                    <Input
                        type='text'
                        name='last_name'
                        placeholder={formData.last_name}
                        onChange={handleInputChange}
                        >
                        </Input>
                    </UserInputContainer>
                    <button type="submit">Submit</button> {/* Add the submit button here */}
                </UserFormContainer>
            </UserProfileSquare>
            <Navbar />
        </>
    )
}

export default UserProfile;