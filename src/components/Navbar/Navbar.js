import React, {useState, useEffect} from 'react' 
import {FaBars} from 'react-icons/fa'
import {animateScrlll as scroll} from 'react-scroll';
import {
  Nav,
  NavbarContainer,
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavItem,
  NavLinks,
  NavBtn, 
  NavBtnLink
} from './navbarElements'

const Navbar = (props) => {
  const {toggle} = props

  const  [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY > 90) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome} >Moses K</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="portfolio"
                smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >PORTFOLIO</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="skills">SKILLS</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">ABOUT</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/contact">Contact Me</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar

