import styled from 'styled-components'

// #fff3e6 --> Tan 
// #2168eb --> Blue
// #1e212d --> Black  
// #d2ae6b --> Caramel 

export const ExperienceContainer = styled.div`
  /* height: 100vh; */
  color: #1e212d;
  background: ${({lightBg}) => (lightBg ? '#fff3e6 ' : '#fff')};
  margin: 0;

  @media screen and (max-width: 768px){
    /* padding: 100px 0; */
  }
`

export const ExperienceHeader = styled.div`
  width: 100%;
  padding: 65px 0;
  text-align: center;
  letter-spacing: -2px;
`

export const ExperienceHeaderText = styled.div`
  /* margin: 55px 0; */
  font-size: 50px;
  font-weight: 800;
  letter-spacing: 2px;
  /* box-shadow: 5px 5px 50px 50px black; */
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
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  /* justify-content: center; */
`

export const SkillContainer =styled.div`
  /* height: 100vh; */
  color: #1e212d;
  background: ${({lightBg}) => (lightBg ? '#fff3e6 ' : '#fff')};
  margin: 0;
  padding: 100px 0px;

  @media screen and (max-width: 481px){
    /* padding: 100px 0; */
  }
`

export const SkillWrap = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
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

export const Skill = styled.img`
  width: 125px;
  height: 125px;
`