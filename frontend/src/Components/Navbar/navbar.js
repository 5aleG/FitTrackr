import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { IoMdHome, IoMdApps, IoIosStats, IoMdPerson } from 'react-icons/io';
import { NavbarContainer, IconWrapper, Icon, PlusIcon } from './navbarStyled';
import DropUpMenu from './DropUpMenu/dropUpMenu';

const Navbar = () => {
  const location = useLocation(); 
  const [isHidden, setIsHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let timeoutId;

    // Function to handle scroll event
    const handleScroll = () => {
      setIsHidden(true); // Hide the Navbar when the user starts scrolling

      // Clear any existing timeout and set a new timeout of 300 milliseconds
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsHidden(false); // Show the Navbar after 300 milliseconds of no scrolling
      }, 300);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove scroll event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Clear the timeout when the component unmounts
      clearTimeout(timeoutId);
    };
  }, []);

  const handlePlusIconClick = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <NavbarContainer isHidden={isHidden}>
      <IconWrapper>
        <Icon isActive={location.pathname === '/home'}>
          <Link to='/home'>
            <IoMdHome size={25} />
          </Link>
        </Icon>
        <Icon>
          <IoMdApps size={25} />
        </Icon>
      </IconWrapper>
      <PlusIcon onClick={handlePlusIconClick} isMenuOpen={isMenuOpen}>
        {isMenuOpen ? 'x' : '+'}
      </PlusIcon>
      <IconWrapper>
        <Icon>
          <Link to='/statistics'>
            <IoIosStats size={25} />
          </Link>
        </Icon>
        <Icon>
          <Link to='/userprofile'>
            <IoMdPerson size={25} />
          </Link>
        </Icon>
      </IconWrapper>
      {isMenuOpen && <DropUpMenu />}
    </NavbarContainer>
  );
};

export default Navbar;
