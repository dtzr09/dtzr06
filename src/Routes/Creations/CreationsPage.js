import React, { useEffect, useState } from "react";
import {
  CreationWrapper,
  CreationContainer,
  TitleWrapper,
  TitleH1,
  Titlespan,
  LogosContainer,
  SliderContainer,
  Card,
  GithubLogo,
  LiveLogo,
  CardTitle,
  CardDetails,
  CardLanguage,
  DetailsContainer,
  NavigationLogo,
  LeftContainer,
  RightContainer,
  InfoContainer,
  CardContainer,
} from "./CreationsStyle";

import { VscGithubAlt as Github } from "react-icons/vsc";
import { MdWifiTethering } from "react-icons/md";
import ImageSlider from "../../Components/ImageSlider/ImageSlider";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
function CreationsPage() {
  const cards = [
    {
      key: 1,
      name: "Birdex",
      details:
        "An encyclopedia that uses the CRUD framework with Redux library",
      langauge: "React.js, React-redux HTML, CSS, Javascript",
      url: "dtzr09.github.io/birdex-redux/",
      source: "github.com/dtzr09/birdex",
      file_name: "birdex/",
      photos: ["0.mp4", "2.png", "3.png", "4.png"],
    },
    {
      key: 2,
      name: "Netflix Clone",
      details: "A clone of Netflix implemented with Stripe and Firebase",
      langauge: "React.js, HTML, CSS, Javascript, Stripe, Firebase",
      url: "netflix2-clone-e95d8.firebaseapp.com",
      source: "github.com/dtzr09/netflix-clone",
      file_name: "netflix/",

      photos: ["0.mp4", "1.png", "2.png", "3.png"],
    },
  ];

  const [cardKey, setcardKey] = useState(1);

  const handleNavigation = (data) => {
    switch (data) {
      case "left":
        if (cardKey > cards.length) {
          setcardKey(1);
        } else {
          setcardKey(cardKey + 1);
        }
      case "right":
        if (cardKey == 1) {
          setcardKey(cards.length);
        } else {
          setcardKey(cardKey - 1);
        }
      default:
        break;
    }
  };

  const renderCards = () => {
    const currentCard = cards[cardKey - 1];

    return (
      <CardContainer>
        <Card>
          <CardTitle>{currentCard.name}</CardTitle>
          <DetailsContainer>
            <CardDetails>{currentCard.details}</CardDetails>
            <CardLanguage>Tech Stack: {currentCard.langauge} </CardLanguage>
          </DetailsContainer>
          <LogosContainer>
            <GithubLogo to={`//${currentCard.source}`} target="_blank">
              <Github />
            </GithubLogo>
            <LiveLogo to={`//${currentCard.url}`} target="_blank">
              <MdWifiTethering />
            </LiveLogo>
          </LogosContainer>
          <NavigationLogo>
            <LeftContainer
              onClick={() => {
                handleNavigation("left");
              }}
            >
              <AiFillCaretLeft />
            </LeftContainer>
            <RightContainer
              onClick={() => {
                handleNavigation("right");
              }}
            >
              <AiFillCaretRight />
            </RightContainer>
          </NavigationLogo>
        </Card>
      </CardContainer>
    );
  };

  return (
    <CreationWrapper id="creations">
      <CreationContainer>
        <TitleWrapper>
          <TitleH1>/ creations</TitleH1>
          <Titlespan />
        </TitleWrapper>
        <SliderContainer>
          <ImageSlider card={cards[cardKey - 1]} />
          <InfoContainer> {renderCards()} </InfoContainer>
        </SliderContainer>
      </CreationContainer>
    </CreationWrapper>
  );
}

export default CreationsPage;
