import styled from 'styled-components'

// #fff3e6 --> Tan 
// #2168eb --> Blue
// #1e212d --> Black  
// #d2ae6b --> Caramel 

import '../../_variables.scss';

export const ExperienceContainer = styled.div`
  color: #1e212d;
  background: ${({lightBg}) => (lightBg ? '#fff3e69e' : '#fff')};
  margin: 0;

  @media screen and (max-width: 480px){
    /* padding: 100px 0; */
    /* height: 110vh; */
    text-align: center;
  }
`

export const ExperienceHeader = styled.div`
  width: 100%;
  padding: 65px 0 0 0;
  text-align: center;
  letter-spacing: -2px;
`

export const ExperienceHeaderText = styled.div`
  /* margin: 55px 0; */
  font-size: 50px;
  font-weight: 800;
  letter-spacing: 2px;
  /* box-shadow: 5px 5px 50px 50px black; */

  @media (max-width: 450px){
    font-size: 40px;
  }
  @media only screen 
  and (min-width: 1024px) 
  and (max-height: 1366px) 
  and (-webkit-min-device-pixel-ratio: 1.5){
    font-size: 4rem;
  }
`

export const ExperienceP = styled.p`
  font-size: 1.05rem;
  color: gray;
  font-style: italic;
  letter-spacing: .25px;

  @media only screen 
  and (min-width: 1024px) 
  and (max-height: 1366px) 
  and (-webkit-min-device-pixel-ratio: 1.5){
    font-size: 1.25rem;
  }
`

// export const ColoredLine = ({ color, align }) => (
//   <hr
//       style={{
//           color: color,
//           backgroundColor: color,
//           height: 5,
//           width: 200,
//           alignContent: align
//       }}
//   />
// );

export const PortWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  z-index: 1;
  height: 100%;
  max-width: 1000px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  /* justify-content: center; */
`

export const SkillContainer =styled.div`
  /* height: 100vh; */
  color: #1e212d;
  /* background: ${({lightBg}) => (lightBg ? '#fff3e69e' : '#fff')}; */
  margin: 0;
  /* padding: 50px 0 0 0; */
  width: 50%;
  text-align: center;

  @media (max-width: 1200px){
    width: 70%
  }
  @media (max-width: 950px){
    width: 85%;
    padding-bottom: 50px;
  }
  @media (max-width: 750px){
    width: 100%
  }
  @media only screen 
  and (min-width: 1024px) 
  and (max-height: 1366px) 
  and (-webkit-min-device-pixel-ratio: 1.5){
    padding: 55px 0 150px;
  }
`

export const SkillWrap = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  z-index: 1;
  width: 100%;
  max-width: 1000px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  /* justify-content: center; */

  @media screen and (max-width: 481px){
    /* padding: 100px 0; */
    /* margin: 15px 45px; */
    padding: 0;
  }
`

export const Skill = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  font-size: 18px;
  margin-bottom: 24px;
  /* align-content: center; */

  @media (max-width: 481px){
    width: 22%;
    font-size: 15px;
  }
`

export const SkillImg = styled.img`
  width: 90px;
  height: 100px;

  @media (max-width: 481px){
    width: 55px;
  }
  @media (max-width: 400px){
    width: 45px;
  }
`