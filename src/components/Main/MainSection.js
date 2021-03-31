import React, { useState } from "react";
import { Button } from "../ButtonElements";
import {
  MainContainer,
  MainBg,
  ImgBg,
  MainContent,
  MainH1,
  MainH2,
  ArrowForward,
  ArrowRight,
} from "./MainElements";
import ImgBackground from "../../images/sanFran.jpeg";
// import '../App.css'

const MainSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <MainContainer>
      <MainBg>
        <ImgBg className="main-background" src={ImgBackground} />
      </MainBg>
      <MainContent>
        <MainH1>MOSES KAUMATULE</MainH1>
        <MainH2>Software Developer</MainH2>
        <Button
          to="portfolio"
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          primary="true"
          dark="true"
          big="true"
          smooth={true}
          duration={600}
          spy={true}
          exact="true"
          offset={-80}
        >
          Start Here {hover ? <ArrowForward /> : <ArrowRight />}
        </Button>
      </MainContent>
    </MainContainer>
  );
};

export default MainSection;
