import React, {useState } from 'react'
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

const userAvatar = require('../../Assets/user_avatar.svg').default;

const UserProfile = () => {
    const [formData, setFormData] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };

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
                        placeholder='user@email.com'
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
                        placeholder='Sasha'
                        onChange={handleInputChange}
                        >
                        </Input>
                    </UserInputContainer>
                    <InputDescription>Last Name</InputDescription>
                    <UserInputContainer>
                    <Input
                        type='text'
                        name='last_name'
                        placeholder='Golijanin'
                        onChange={handleInputChange}
                        >
                        </Input>
                    </UserInputContainer>
                </UserFormContainer>
            </UserProfileSquare>
            <Navbar />
        </>
    )
}

export default UserProfile;