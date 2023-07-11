import React, { useState } from 'react'
import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'
import { NavLink as LinkR, useNavigate } from 'react-router-dom'
import { FaBars } from "react-icons/fa"
import * as Scroll from "react-scroll";

const Navbar = ({ toggle }) => {

  const navigate = useNavigate();
  const scroller = Scroll.scroller;
  const [activeLink, setActiveLink] = useState("");

  const handleScrollLink = async(selector) => {
    await navigate("/");
    setActiveLink(selector);
    scroller.scrollTo(selector, {
      duration: 500,
      smooth: true,
      offset: -100,
      spy: true
    });
  }

  return ( 
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            Priyanshi
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinkScroll $active={activeLink === "home" ? true :  false} onClick={() => {handleScrollLink("home")}}>Home</NavLinkScroll>
            </NavItem>
            <NavItem>
              <NavLinkScroll $active={activeLink === "about" ? true : false} onClick={() => {handleScrollLink("about")}}>About</NavLinkScroll>
            </NavItem>
            <NavItem>
              <NavLinkRouter to="/experience" onClick={() => setActiveLink("")}>Experience</NavLinkRouter>
            </NavItem>
            <NavItem>
              <NavLinkRouter to="/resume" onClick={() => setActiveLink("")}>Resume</NavLinkRouter>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

const Nav = styled.nav`
  background-color: #fff;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  background-image: linear-gradient(180deg, rgb(26, 245, 225, 0.2), white);
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`  
const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  z-index: 1;
  padding: 0 24px;
`

const NavLogo = styled(LinkR)`
  color: #000;
  justify-self: flex-start;
  margin-left: 24px;
  display: flex;
  align-items: center;
  font-family: 'Sacramento', cursive;
  font-size: 2rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
`

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 760px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    color: #000;
    cursor: pointer;
    font-size: 1.8rem;
  }
`

const NavMenu = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  text-align: center;
  height: 100%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NavItem = styled.li`
  height: 100%;
`

const NavLinkScroll = styled.button`
  /* color: rgb(28, 54, 54); */
  color: ${props => props.$active ? '#bb3459' : 'rgb(28,54,54)'};
  display: flex;
  align-items: center;
  text-decoration: none;
  border: none;
  background-color: transparent;
  padding: 0 1rem;
  font-size: 1rem;
  height: 100%;
  cursor: pointer;

  &:hover{
    color: #bb3459;
  }
  /* &:active{
    color: #bb3459;
  }
  &:focus{
    color: #bb3459;
  } */
`

const NavLinkRouter = styled(LinkR)`
  color: rgb(28, 54, 54);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  font-size: 1rem;
  height: 100%;
  cursor: pointer;

  &:hover{
    color: #bb3459;
  }

  &.active{
    color: #bb3459;
  }
`

export default Navbar;
