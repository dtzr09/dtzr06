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
} from "./AboutStyles";

import { AiOutlineDoubleRight } from "react-icons/ai";

function AboutPage() {
  const techList = [
    {
      id: 1,
      language: "Javascript",
    },
    {
      id: 2,
      language: "React.js",
    },
    {
      id: 3,
      language: "Next.js",
    },
    {
      id: 4,
      language: "Node.js",
    },
    {
      id: 4,
      language: "HTML",
    },
    {
      id: 5,
      language: "CSS",
    },
    {
      id: 6,
      language: "PostgreSQL",
    },
    {
      id: 7,
      language: "MongoDB",
    },
    {
      id: 7,
      language: "Python",
    },
    {
      id: 8,
      language: "AWS",
      details: "S3, Amplify",
    },
  ];

  const languageStyle = {
    marginRight: "20px",
    fontSize: "20px",
  };

  return (
    <AboutWrapper id="about">
      <AboutContainer>
        <TitleWrapper>
          <TitleH1> /about me</TitleH1>
          <Titlespan />
        </TitleWrapper>
        <InfoContainer>
          <DetailsContainer>
            I am currently an undergraduate pursuing Chemical and Biomolecular
            Engineering. I am also an aspiring self-taught software engineer. On
            top of my school curriculum, I have been practicing my website
            development skills by doing web-dev projects.
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
          Here are some tech stack that I have recently used:
        </LanguageTitle>
        <LanguagesContainer>
          {techList.map((item) => {
            return (
              <LanguageContainer>
                <AiOutlineDoubleRight style={languageStyle} /> {item.language}{" "}
                <br />
              </LanguageContainer>
            );
          })}
        </LanguagesContainer>
      </AboutContainer>
    </AboutWrapper>
  );
}

export default AboutPage;
