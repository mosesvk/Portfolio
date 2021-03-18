import styled from 'styled-components'

/* #fff3e6 --> Tan  */
/* #2168eb --> Blue  */
/* #1e212d --> Black  */
// #d2ae6b --> Caramel 

export const PortContainer = styled.div`
  color: #fff;
  background: ${({lightBg}) => (lightBg ? '#fff3e6 ' : '#fff')};

  @media screen and (max-width: 768px){
    padding: 100px 0;
  }
`

export const PortWrap = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%auto;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`
