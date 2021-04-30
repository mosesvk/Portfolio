import styled from 'styled-components'
import {Link} from 'react-scroll'

/* #fff3e6 --> Tan  */
// #d2ae6b --> Caramel 
/* #2168eb --> Blue  */
/* #1e212d --> Black  */

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({primary}) => (primary ? '#fff' : '#fff3e6')};
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? '#1e212d' : '#fff')};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: ${({border}) => (border ? '1px solid' : '')};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .2s ease-in-out;
  z-index: 1;
  height: ${({eighty}) => (eighty ? '80' : '')};
  margin: ${({fifteen}) => (fifteen ? '15px 0' : 'auto 10px')};
  /* margin: auto 10px; */

  &:hover {
    transition: all .2s ease-in-out;
    background: ${({primary}) => (primary ? '#fff3e6' : '#d2ae6b')};
    color: #2168eb;
    font-weight: bold;
    text-decoration: none;
  }

  @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px) 
    and (-webkit-min-device-pixel-ratio: 1.5){
      font-size: 2rem;
    }
`