import React, { useState } from 'react';
import { UserIconContainer, UserIconImage } from './userIconStyled';
import UserDropdown from './UserDropdown/userDropdown';

const userAvatar = require('../../Assets/user_avatar.svg').default;

const UserIcon = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible((prevState) => !prevState);
  };

  return (
    <>
      <UserIconContainer onClick={toggleDropdown}>
        <UserIconImage src={userAvatar} alt="User Avatar" />
      </UserIconContainer>
      {dropdownVisible && <UserDropdown />}
    </>
  );
};

export default UserIcon;
