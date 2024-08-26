import React, { useState } from "react";
import { FaSearch, FaHeart, FaShoppingBag, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: #25494E;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavigationLinksContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: ${({ menuOpen }) => (menuOpen ? '64px' : '-300px')}; /* For mobile */
  left: 0;
  width: 100%;
  background-color: #25494E;
  transition: top 0.3s ease-in-out;
  z-index: 10;
  padding: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    position: static;
    width: auto;
    padding: 0;
    background-color: transparent;
    justify-content: center; /* Center the menu */
  }
`;

const NavigationLink = styled.li`
  margin-bottom: 1rem;
  text-align: center;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #F7DC6F;
  }

  a {
    color: white;
    text-decoration: none;
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 20px;
  }
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{ position:'sticky', top:0, zIndex:1000 }}>
      <NavbarContainer>
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center space-x-1">
          <span className="text-yellow-500">F</span>
          <span>Harverse</span>
        </div>

        {/* Navigation Links */}
        <NavigationLinksContainer menuOpen={menuOpen}>
          <NavigationLink><a href="#">Home</a></NavigationLink>
          <NavigationLink><a href="#">Products</a></NavigationLink>
          <NavigationLink><a href="#">Categories</a></NavigationLink>
          <NavigationLink><a href="#">About us</a></NavigationLink>
          <NavigationLink><a href="#">Contact Us</a></NavigationLink>
          <NavigationLink><a href="#">Blog</a></NavigationLink>
        </NavigationLinksContainer>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-4 text-xl">
          <FaSearch className="cursor-pointer hover:text-yellow-500" />
          <FaHeart className="cursor-pointer hover:text-yellow-500" />
          <FaShoppingBag className="cursor-pointer hover:text-yellow-500" />
          <FaUser className="cursor-pointer hover:text-yellow-500" />
        </div>
      </NavbarContainer>
    </header>
  );
};

export default Navbar;
