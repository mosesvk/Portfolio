import React from "react";
import {Button} from '../ButtonElements'
import {SideLinkedin, SideGithub } from '../Sidebar/SidebarElements'
import {
  PortContainer,
  PortHeader,
  PortText,
  PortP,
  SocialWrap,
  SocialLink,
  PortWrap,
  PortRow,
  Column,
  TextWrapper,
  // TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img, 
  Break
} from "./portfolioElements";
import PortImgOne from '../../images/cfp-cover-1.jpg'
import PortImgTwo from '../../images/barz-cover.jpg'
import PortImgThree from '../../images/Port-img.jpeg'
import Divider from '@material-ui/core/Divider';
const Portfolio = ({
  lightBg,
  id, 
  imgStart,
  lightText,
  darkText, 
}) => {
  return (
    <>
      <PortContainer id="portfolio" lightBg={lightBg}>
        <PortHeader>
          <PortText>PORTFOLIO</PortText>
          <PortP>Check out my Github and LinkedIn accounts for my other projects on React and JavaScripts.</PortP>
          <Divider variant="middle"/>
          <SocialWrap>
            <SocialLink><SideLinkedin iconDark="true"/></SocialLink>
            <SocialLink><SideGithub iconDark="true"/></SocialLink>
          </SocialWrap>
        </PortHeader>
        <PortWrap>
          <PortRow id={id} imgStart={imgStart}>
            <Column>
              <TextWrapper>
                {/* <TopLine>React Website</TopLine> */}
                <Heading lightText={lightText}>Cheefa's Fried Pies</Heading>
                <Subtitle darkText={darkText}>Bakery specialized in Fried Pies which are delicious and irresistible</Subtitle>
                <BtnWrap>
                  <Button to="home" dark="true" border="true">Live Website</Button>
                  <Button to="home" dark="true" border="true">Source Code</Button>
                </BtnWrap>
              </TextWrapper>
              <ImgWrap>
                <Img src={PortImgOne}/>
              </ImgWrap>
              <Break />
            </Column>
            <Column>
              <TextWrapper>
                {/* <TopLine>React Website</TopLine> */}
                <Heading lightText={lightText}>Barz</Heading>
                <Subtitle darkText={darkText}>Barz is a company famous for their homemade Gourmet Barz with only the best ingredients, from real sweet cream butter to freshlystone ground whole wheat flour</Subtitle>
                <BtnWrap>
                  <Button to="home" dark="true" border="true">Live Website</Button>
                  <Button to="home" dark="true" border="true">Source Code</Button>
                </BtnWrap>
              </TextWrapper>
              <ImgWrap>
                <Img src={PortImgTwo} circleImg="true" heightFix="true"/>
              </ImgWrap>
              <Break />
            </Column>
            <Column>
              <TextWrapper>
                {/* <TopLine>Personal Website</TopLine> */}
                <Heading lightText={lightText}>Portfolio</Heading>
                <Subtitle darkText={darkText}>Check out my Source Code for this Portfolio Site</Subtitle>
                <BtnWrap>
                  <Button to="home" dark="true" border="true">Source Code</Button>
                </BtnWrap>
              </TextWrapper>
              <ImgWrap>
                
                <Img src={PortImgThree} circleImg="true" heightFix="true"/>
              </ImgWrap>
              <Break />
            </Column>
          </PortRow>
        </PortWrap>
      </PortContainer>
    </>
  );
};

export default Portfolio;
