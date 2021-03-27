import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

/* #fff3e6 --> Tan  */
/* #2168eb --> Blue  */
/* #1e212d --> Black  */


export const MainContainer = styled.div`
  background: #fff3e6;
  display: flex; 
  justify-content: center;
  align-items: center; 
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  :before{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      180deg, 
      rgba(0,0,0,0.2), 0%, 
      rgba(0,0,0,0.6) 100%
      ),
      linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
      z-index: 2

  }
`

export const MainBg = styled.div`
  position: absolute;
  /* background-position: center; */
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const ImgBg = styled.img`
  width: 100%;
  height: 100%;
  background: no-repeat bottom center fixed;
  background-size: cover;
  /* background-position: center; */
  position: fixed center;
  -o-object-fit: cover;
  object-fit: cover;
`

export const MainContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  top: 35%;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const MainH1 = styled.h1`
  color: #fff3e6 ;
  font-size: 60px;
  text-align: center;
  margin-bottom: 10px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;

  @media screen and (max-width: 1500px){
    font-size: 67px
  }

  @media screen and (max-width: 840px){
    font-size: 50px;
  }

  @media screen and (max-width: 590px ){
    font-size: 35px;
  }
`

export const MainH2 = styled.h2`
  color: #fff3e6;
  font-size: 35px;
  text-align: center; 
  margin-bottom: 25px;
  

  @media screen and (max-width: 840px){
    font-size: 25px;
  }

  @media screen and (max-width: 480px ){
    font-size: 20px;
  }
`

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px; 
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px; 
`