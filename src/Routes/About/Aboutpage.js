import React from "react";
import {
  AboutWrapper,
  AboutContainer,
  TitleWrapper,
  TitleH1,
  Titlespan,
  InfoContainer,
  DetailsContainer,
  PicContainer,
  SelfImage,
  LanguagesContainer,
  LanguageTitle,
  LanguageContainer,
  RightArrowLogo,
} from "./AboutStyles";

function AboutPage() {
  return (
    <AboutWrapper id="about">
      <AboutContainer>
        <TitleWrapper>
          <TitleH1> /about me</TitleH1>
          <Titlespan />
        </TitleWrapper>
        <InfoContainer>
          <DetailsContainer>
            I am a Chemical and Biomolecular Engineer but also an aspiring
            self-taught software developer. On top of my school curriculum, I
            have been practicing my website development skills by doing web-dev
            projects.
            <br />
            <br />I enjoy solving complex problems and is keen on learning more
            about the implementation of Artificial Intelligence/Machine Learning
            onto my website to enhance and personalise the experience of each
            user.
          </DetailsContainer>
          <PicContainer>
            <SelfImage />
          </PicContainer>
        </InfoContainer>
        <LanguageTitle>
          Here are some languages that I have recently used:
        </LanguageTitle>
        <LanguagesContainer>
          <LanguageContainer>
            <RightArrowLogo /> Javascript <br />
          </LanguageContainer>
          <LanguageContainer>
            <RightArrowLogo /> Reactjs <br />
          </LanguageContainer>
          <LanguageContainer>
            <RightArrowLogo /> Python <br />
          </LanguageContainer>
          <LanguageContainer>
            <RightArrowLogo /> C <br />
          </LanguageContainer>
          <LanguageContainer>
            <RightArrowLogo /> HTML and CSS <br />
          </LanguageContainer>
        </LanguagesContainer>
      </AboutContainer>
    </AboutWrapper>
  );
}

export default AboutPage;
