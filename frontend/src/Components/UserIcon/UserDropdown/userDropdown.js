import React from 'react';
import { UserDropdownContainer, DropdownItem } from './userDropdownStyled';

const UserDropdown = () => {
  // Handle logout logic here
  const handleLogout = () => {
    // Add your logout logic here
    console.log('User logged out!');
  };

  return (
    <UserDropdownContainer>
      <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
    </UserDropdownContainer>
  );
};

export default UserDropdown;