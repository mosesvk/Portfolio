import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SideLinkedin,
  SideGithub,
  SidebarDiv,
  SideFacebook,
  SideYoutube
} from "./SidebarElements";
import {NavLogo} from '../Navbar/navbarElements'
import { animateScroll as scroll } from "react-scroll";

const Sidebar = (props) => {
  const { toggle, isOpen, scrollNav } = props;

  const toggleHome = () => {
    scroll.scrollToTop();
  };


  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <NavLogo to="home" onClick={toggleHome} scrollNav={scrollNav}>
            &lt; Moses K &gt;
        </NavLogo>
        <SidebarMenu>
          <SidebarLink
            to="portfolio"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            PORTFOLIO
          </SidebarLink>
          <SidebarLink
            to="experience"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            EXPERIENCE
          </SidebarLink>
          <SidebarLink
            to="about"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            ABOUT
          </SidebarLink>
          <SidebarLink
            to="contact"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            CONTACT
          </SidebarLink>
          <SidebarDiv>
              <a href='https://www.linkedin.com/in/mosesvk/' target='_blank' rel="noreferrer" onClick={toggle} >
                <SideLinkedin/>
              </a>
              <a href='https://www.linkedin.com/in/mosesvk/' target='_blank' rel="noreferrer" onClick={toggle} >
                <SideGithub/>
              </a>
              <a href='https://www.linkedin.com/in/mosesvk/' target='_blank' rel="noreferrer" onClick={toggle} >
                <SideYoutube/>
              </a>
              <a href='https://www.linkedin.com/in/mosesvk/' target='_blank' rel="noreferrer" onClick={toggle} >
                <SideFacebook/>
              </a>
          </SidebarDiv>
        </SidebarMenu>
        <SideBtnWrap>
          {/* <SideLinkedin onClick={toggle} />
          <SideGithub onClick={toggle} /> */}
          {/* <SidebarRoute>
            <FaLinkedin />
            <FaGithubSquare />
          </SidebarRoute> */}
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
