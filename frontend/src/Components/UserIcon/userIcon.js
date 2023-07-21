import React from 'react'
import { 
    UserIconContainer, 
    UserIconImage } from "./userIconStyled"

const userAvatar = require("../../Assets/user_avatar.svg").default;
//API call for users avatar

const UserIcon = () => {
    return (
      <UserIconContainer>
        <UserIconImage src={userAvatar} alt="User Avatar" />
      </UserIconContainer>
    );
  };

  export default UserIcon;
  