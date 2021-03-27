import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
// import {Link} from 'react-scroll'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  // NavBtn,
  NavBtnLink,
} from "./navbarElements";

const Navbar = (props) => {
  const { toggle } = props;

  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY > 90) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="home" onClick={toggleHome} scrollNav={scrollNav}>
            &lt; Moses K &gt;
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="portfolio"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                PORTFOLIO
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="experience"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                EXPERIENCE
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                ABOUT
              </NavLinks>
            </NavItem>
            <NavBtnLink
              to="/contact"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Get In Touch
            </NavBtnLink>
          </NavMenu>
          {/* <NavBtn> */}
            
          {/* </NavBtn> */}
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
