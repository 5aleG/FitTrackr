import React from 'react';
import { IoMdHome, IoMdApps, IoIosStats, IoMdPerson } from 'react-icons/io';
import { NavbarContainer, IconWrapper, Icon, PlusIcon } from './navbarStyled';

const Navbar = () => {
  return (
    <NavbarContainer>
      <IconWrapper>
        <Icon>
          <IoMdHome size={25} />
        </Icon>
        <Icon>
          <IoMdApps size={25} />
        </Icon>
      </IconWrapper>
      <PlusIcon />
      <IconWrapper>
        <Icon>
          <IoIosStats size={25} />
        </Icon>
        <Icon>
          <IoMdPerson size={25} />
        </Icon>
      </IconWrapper>
    </NavbarContainer>
  );
};

export default Navbar;

