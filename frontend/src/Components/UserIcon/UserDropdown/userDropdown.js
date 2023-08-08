import React from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../Redux/Slices/auth";
import { UserDropdownContainer, DropdownItem } from './userDropdownStyled';

const UserDropdown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    dispatch(logout()); 

    navigate("/");
  };

  return (
    <UserDropdownContainer>
      <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
    </UserDropdownContainer>
  );
};

export default UserDropdown;
