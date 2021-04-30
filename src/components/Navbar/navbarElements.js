import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

/* #fff3e6 --> Tan  */
/* #2168eb --> Blue  */
/* #1e212d --> Black  */

export const Nav = styled.div`
  background: ${({scrollNav}) => (scrollNav ? '#1e212d' : 'transparent')};
  /* Similar to background image  */
  height: 80px;
  margin-top: -80px; 
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 970px) {
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 65px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
  align-items: baseline;
`

export const NavLogo = styled(LinkR)`
  color: #fff3e6; 
  justify-self: flex-start;
  cursor: pointer;
  font-size: ${({scrollNav}) => (scrollNav ? '2.25rem' : '2.75rem')};
  font-family: 'Oleo Script Swash Caps', cursive;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;

  @media screen and (max-width: 480px) {
    font-size: 2.25rem;
  }

  &:hover {
    text-decoration: none;
    color: #fff3e6;
  }
`
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 970px) {
    display: block; 
    position: absolute;
    top: 0; 
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin: 0px;
  align-items: baseline;
  /* margin-right: -22px; */

  @media screen and (max-width: 970px) {
    display: none
  }
`

export const NavItem = styled.li`
  height: 80px;
`

export const NavLinks = styled(LinkS)`
  font-size: 18px;
  color: ${({darkColor}) => (darkColor ? '#1e212d' : '#fff')};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 35px;
  padding: 0 25px;
  cursor: pointer;
  letter-spacing: 1px;
  @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px) 
    and (-webkit-min-device-pixel-ratio: 1.5){
      font-size: 22px;
    }

  &:hover {
    color: ${({darkColorHover}) => (darkColorHover ? '#2168eb' : '#fff3e6')};
    font-weight: 800;
    text-decoration: none;
  }

  &.active {
    background: #fff3e6;
    border-radius: 10px;
    margin-top: 15px;
    color: #1e212d;
  }

`

// export const NavBtn = styled.nav`
//   display: flex;
//   align-items: center;

//   @media screen and (max-width: 768px) {
//     display: none
//   }
// `

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #fff;
  white-space: nowrap;
  padding: 10px 12px;
  color: #1e212d;
  font-size: ${({sidebar}) => (sidebar ? '22px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 10px;

  &:hover {
    transition: all .2s ease-in-out;
    background: #fff3e6;
    color: #2168eb;
    font-weight: bold;
    text-decoration: none;
  } 

  @media screen and (max-width){
    
  }
`