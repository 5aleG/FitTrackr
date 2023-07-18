import React from 'react'
import { BsHouse, BsGrid3X3Gap, BsBarChart, BsPerson } from 'react-icons/bs';
import { NavbarContainer,
    IconWrapper,
    Icon,
    PlusIcon } from "./navbarStyled"

    const Navbar = () => {
        return (
          <NavbarContainer>
            <IconWrapper>
              <Icon>
                <BsHouse size={20} />
              </Icon>
              <Icon>
                <BsGrid3X3Gap size={20} />
              </Icon>
            </IconWrapper>
            <PlusIcon />
            <IconWrapper>
              <Icon>
                <BsBarChart size={20} />
              </Icon>
              <Icon>
                <BsPerson size={20} />
              </Icon>
            </IconWrapper>
          </NavbarContainer>
        );
      };

export default Navbar

