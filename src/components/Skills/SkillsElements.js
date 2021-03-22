import styled from 'styled-components'

// #fff3e6 --> Tan 
// #2168eb --> Blue
// #1e212d --> Black  
// #d2ae6b --> Caramel 

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