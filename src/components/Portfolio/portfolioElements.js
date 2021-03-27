import styled from 'styled-components'

/* #fff3e6 --> Tan  */
/* #2168eb --> Blue  */
/* #1e212d --> Black  */
// #d2ae6b --> Caramel 

export const PortContainer = styled.div`
  /* height: 100vh; */
  color: #1e212d;
  background: ${({lightBg}) => (lightBg ? '#fff3e6 ' : '#fff')};
  margin: 0;

  @media screen and (max-width: 768px){
    /* padding: 100px 0; */
  }
`

export const PortHeader = styled.div`
  width: 100%;
  padding: 65px 0;
  text-align: center;
  letter-spacing: -2px;
`

export const PortText = styled.div`
  /* margin: 55px 0; */
  font-size: 50px;
  font-weight: 800;
  letter-spacing: 2px;
  /* box-shadow: 5px 5px 50px 50px black; */
`

export const SocialWrap = styled.div`
  display: flex; 
  justify-content: center;
`

export const SocialLink = styled.a`
  color: #fff;
  font-size: 40px;
  padding: 12px 5px;

  &:hover {
    color: #f9ddbf;
  }
`


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

export const PortRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  grid-auto-columns: minmax(auto, 1fr);
  width: 100%;
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col1''col2'` : `'col1 col1' 'col2 col2'`)};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1''col2'` : `'col1 col1' 'col2 col2'`)}
  }
`

export const Column = styled.div`
  margin-bottom: 15px;
  padding: 0 0;
  grid-area: col1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`

// export const Column2 = styled.div`
//   margin-bottom: 15px;
//   padding: 0 15px;
//   grid-area: col2;
// `

export const TextWrapper = styled.div`
  max-width: 540px;
  height: 100%;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 480px) {
    height: 50%;
    text-align: center;

  }
`

export const TopLine = styled.p`
  color: #1e212d;
  font-size: 16px;
  line-height: 16px;
  font-weight: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 38px;
  line-height: 1.1.%;
  font-weight: 600;
  color: ${({lightText}) => (lightText ? '#d2ae6b' : '#1e212d')};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`
export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({darkText}) => (darkText ? '#1e212d' : '#1e212d')}
`
export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`
export const ImgWrap = styled.div`
  max-width: 400px;
  height: 100%;
  text-align: center;

  &:hover {
    opacity: 1;
  }

  @media screen and (max-width: 480px) {
    height: 200px;
    width: 100%;
    text-align: center;
  }
`
export const Img = styled.img`
  width: 80%;
  height: ${({heightFix}) => (heightFix ? '90%' : '100%')};
  /* -o-object-fit: cover; */
  /* object-fit: cover; */
  border-radius: ${({circleImg}) => (circleImg ? '50%' : 'none')};

  &:hover {
    opacity: .5;
  }

  @media screen and (max-width: 480px) {
    height: 200px;
    width: 200px;
    
    /* position: static; */
  }
`

export const Break =  styled.br`
  display: none;
  color: black;


  @media screen and (max-width: 480px) {
    display: static;

  }
`