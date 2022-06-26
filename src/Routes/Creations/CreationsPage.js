import React from "react";
import {
  CreationWrapper,
  CreationContainer,
  TitleWrapper,
  TitleH1,
  Titlespan,
  CardsContainer,
  Card,
  LogosContainer,
  FolderLogo,
  MainLogo,
  GithubLogo,
  LiveLogo,
  DetailsContainer,
  Title,
  Details,
  LanguagesContainer,
  Languages,
} from "./CreationsStyle";

import { VscGithubAlt as Github } from "react-icons/vsc";
import { IconContext } from "react-icons";

function CreationsPage() {
  const cards = [
    {
      key: 1,
      name: "Bird Encyclopedia",
      details: "An encyclopedia that uses the CRUD system.",
      langauge: "Reactjs, HTML, CSS, Javascript",
      url: "https://birdex.herokuapp.com/",
      source: "github.com/dtzr09/birdex",
    },
    {
      key: 2,
      name: "Netflix Clone",
      details: "A clone of Netflix implemented with Stripe and Firebase",
      langauge: "Reactjs, HTML, CSS, Javascript, Stripe, Firebase",
      url: "https://netflix2-clone-e95d8.web.app/",
      source: "github.com/dtzr09/birdex",
    },
  ];

  return (
    <CreationWrapper id="creations">
      <CreationContainer>
        <TitleWrapper>
          <TitleH1>/ creations</TitleH1>
          <Titlespan />
        </TitleWrapper>
        <CardsContainer>
          {cards.map((card) => {
            return (
              <Card key={card.key}>
                <LogosContainer>
                  <IconContext.Provider
                    value={{
                      style: {
                        width: "26px",
                        height: "26px",
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    <FolderLogo />
                    <MainLogo>
                      <GithubLogo to={`//${card.source}`} target="_blank">
                        <Github />
                      </GithubLogo>
                      {card.url ? (
                        <LiveLogo
                          to={`//${card.url}`}
                          target="_blank"
                        ></LiveLogo>
                      ) : null}
                    </MainLogo>
                  </IconContext.Provider>
                </LogosContainer>
                <DetailsContainer>
                  <Title>{card.name}</Title>
                  <Details>{card.details}</Details>
                  <LanguagesContainer>
                    <Languages>{card.langauge}</Languages>
                  </LanguagesContainer>
                </DetailsContainer>
              </Card>
            );
          })}
        </CardsContainer>
      </CreationContainer>
    </CreationWrapper>
  );
}

export default CreationsPage;