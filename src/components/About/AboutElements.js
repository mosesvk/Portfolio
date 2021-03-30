import styled from 'styled-components'

/* #fff3e6 --> Tan  */
/* #2168eb --> Blue  */
/* #1e212d --> Black  */
// #d2ae6b --> Caramel 

export const AboutContainer = styled.div`
  /* height: 100vh; */
  color: #1e212d;
  background: ${({lightBg}) => (lightBg ? '#fff3e6 ' : '#fff')};
  margin: 0;
  padding: 25px 15px 150px;

  @media screen and (max-width: 768px){
    padding: 100px 0;
  }
`

export const AboutHeader = styled.div`
  width: 100%;
  padding: 65px 0;
  text-align: center;
  /* align-items: center; */

  @media screen and (max-width: 480px) {
    padding: 15px 0;
  }
`

export const AboutHeaderText = styled.div`
  /* margin: 55px 0; */
  font-size: 50px;
  font-weight: 800;
  /* text-align: center; */
  /* box-shadow: 5px 5px 50px 50px black; */
`

export const AboutWrap = styled.div`
  display: flex;
  justify-content: space-between;
  /* flex-wrap: wrap; */
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  /* justify-content: center; */

  @media screen and (max-width: 480px) {
    flex-wrap: wrap;
  }
`

export const AboutText = styled.div`
  font-size: 20px;
  text-align: left;
  padding: 0 25px;
  /* white-space: nowrap; */
  width: 60%;

  @media screen and (max-width: 480px) {
    width: 100%;
    padding: 15px 0px;
  }
`

export const ImgWrap = styled.div`
  padding: 0 12px;
  width: 50%;
  text-align: center;
`

export const Img = styled.img`
  height: 350px;
  width: 300px;
  border-radius: 20px;

  /* @media screen and (max-width: 480px) {
    height: 150px;
    width: 200px;
  } */
`