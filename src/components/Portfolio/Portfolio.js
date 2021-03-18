import React from 'react'
import {Button} from 'react-scroll'
import {
  PortContainer,
  PortWrapper,
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
} from './portfolioElements'

const Portfolio = ({
}) => {
  return (
    <>
      {/* Remember id for the container  */}
      <PortContainer id="portfolio">
        <PortWrapper>
          <PortRow>
            <Column1>
              <TextWrapper>
                <TopLine>TopLine</TopLine>
                <Heading>Heading</Heading>
                <Subtitle>Subtitle</Subtitle>
                <BtnWrap>
                  <Button to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                  />
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img />
              </ImgWrap>
            </Column2>
          </PortRow>
        </PortWrapper>
      </PortContainer>
    </>
  )
}

export default Portfolio
