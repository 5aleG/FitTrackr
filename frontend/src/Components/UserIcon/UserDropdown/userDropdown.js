import React from 'react';
import { useNavigate } from "react-router-dom";
import { UserDropdownContainer, DropdownItem } from './userDropdownStyled';

const UserDropdown = () => {
  // Handle logout logic here
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <UserDropdownContainer>
      <DropdownItem onClick={handleClick}>Logout</DropdownItem>
    </UserDropdownContainer>
  );
};

export default UserDropdown;