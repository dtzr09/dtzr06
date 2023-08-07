import React from "react";
import {
  HomeContainer,
  DetailsContainer,
  TitlesWrapper,
  TitleH1,
  TitleSpan,
  IntroP1,
  NavButtonContainer,
  ResumeButton,
  IntroP2,
} from "./MainStyles";
import Typical from "react-typical";
import Nav from "../../Components/Navbar/Nav.js";
import resume from "../../static/resume.pdf";

function Mainpage() {
  return (
    <>
      <HomeContainer id="/">
        <DetailsContainer>
          <TitlesWrapper>
            <TitleH1>
              Hello! <TitleSpan>Derrick</TitleSpan> here.
            </TitleH1>
          </TitlesWrapper>
          <IntroP1>
            I am
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                " a self-taught developer ",
                3000,
                " a student in NTU ",
                3000,
                " an aspiring SWE ",
                3000,
                " a Full Stack Developer ",
                3000,
              ]}
            />
          </IntroP1>
          <IntroP2>
            I am currently an undergraduate pursuing Chemical and Biomolecular
            Engineering. I am passionate in learning and upgrading my skillset
            to create better websites and algorithms to solve problems.
          </IntroP2>

          <NavButtonContainer>
            <ResumeButton to={resume} target="_blank">
              Resume
            </ResumeButton>
          </NavButtonContainer>
        </DetailsContainer>
        <Nav />
      </HomeContainer>
    </>
  );
}

export default Mainpage;
