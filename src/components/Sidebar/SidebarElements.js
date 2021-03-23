import styled from 'styled-components'
import {FaTimes, FaLinkedin, FaGithubSquare} from 'react-icons/fa'
// import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

/* #fff3e6 --> Tan  */
/* #2168eb --> Blue  */
/* #1e212d --> Black  */

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 70%;
  background: #1e212d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: .3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`

export const Icon =styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`

export const SidebarWrapper = styled.div`
  color: #fff;
`

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center; 
  font-size: 2em;
  text-decoration: none;
  list-style: none;
  transition: .2s ease-in-out;
  text-decoration: none;
  color: #fff; 
  cursor: pointer;

  &:hover {
    color: #fff3e6;
    font-weight: 800;
    transition: .2s ease-in-out;
  }
`

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`

export const SideLinkedin = styled(FaLinkedin)`
  color: ${({iconDark}) => (iconDark ? '#1e212d' : '#fff')};
  font-size: 50px;
  cursor: pointer;

  &:hover {
    opacity: .5;
    background-color: #fff3e6;
    /* cursor:pointer; */
  }
`
export const SideGithub = styled(FaGithubSquare)`
  color: ${({iconDark}) => (iconDark ? '#1e212d' : '#fff')};
  font-size: 50px;
  cursor: pointer;

  &:hover {
    opacity: .5;
    background-color: #fff3e6;
    /* cursor: pointer; */
  }
`
// export const SidebarRoute = styled(LinkR)`
//   border-radius: 50px;
//   background: #01bf71;
//   white-space: nowrap;
//   padding: 16px 64px; 
//   color: #fff;
//   font-size: 16px;
//   outline: none;
//   border: none;
//   cursor: pointer;
//   transition: all .2s ease-in-out;
//   text-decoration: none;

//   &:hover {
//     transition: all .2s ease-in-out;
//     background: #fff;
//     color: #1e212d;
//   }
// `
