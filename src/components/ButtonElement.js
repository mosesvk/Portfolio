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
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .2s ease-in-out;
  z-index: 10;

  &:hover {
    transition: all .2s ease-in-out;
    background: ${({primary}) => (primary ? '#fff3e6' : '#1e212d')};
    color: #2168eb;
    font-weight: bold;
  }
`