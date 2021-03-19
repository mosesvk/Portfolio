import React from "react";
// import { PortCardOne } from "./PortData";
// import {FaGripLines} from 'react-icons/fa'
import {Button} from '../ButtonElements'
import portOneImg from "../../images/cfp-cover-1.jpg";
import portTwoImg from "../../images/barz-cover.jpg";
import {
  PortContainer,
  PortHeader,
  PortText,
  PortWrap,
  PortRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img
} from "./portfolioElements";

const Portfolio = ({
  lightBg,
  id, 
  imgStart,
  topLine,
  lightText,
  headline,
  darkText, 
  description,
  buttonLabel1,
  buttonLabel2,
  img,
  alt
}) => {
  return (
    <>
      <PortContainer id={id} lightBg={lightBg}>
        <PortHeader>
          <PortText>PORTFOLIO</PortText>
          {/* <ColoredLine color="black" /> */}
        </PortHeader>
        <PortWrap>
          <PortRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button to="home" dark="true" border="true">{buttonLabel1}</Button>
                  <Button to="home" dark="true" border="true">{buttonLabel2}</Button>
                </BtnWrap>
              </TextWrapper>
              <ImgWrap>
                <Img src={portOneImg} />
              </ImgWrap>
            </Column1>
          </PortRow>
        </PortWrap>
      </PortContainer>
    </>
  );
};

export default Portfolio;
