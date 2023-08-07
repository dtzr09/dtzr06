import React, { useState } from "react";
import {
  Card,
  CardContainer,
  CardDetails,
  CardLanguage,
  CardTitle,
  DetailsContainer,
  GithubLogo,
  LeftContainer,
  LiveLogo,
  LogosContainer,
  NavigationLogo,
  RightContainer,
} from "./CardStyles";

import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { VscGithubAlt as Github } from "react-icons/vsc";
import { MdWifiTethering } from "react-icons/md";
import { creations } from "../../variables/creations.js";

function CardInfo({ card }) {
  const [cardKey, setcardKey] = useState(1);
  const currentCard = creations[cardKey - 1];
  const handleNavigation = (data) => {
    switch (data) {
      case "left":
        if (cardKey > creations.length) {
          setcardKey(1);
        } else {
          setcardKey(cardKey + 1);
        }
      case "right":
        if (cardKey == 1) {
          setcardKey(creations.length);
        } else {
          setcardKey(cardKey - 1);
        }
      default:
        break;
    }
  };

  return (
    <CardContainer>
      <Card>
        <CardTitle>{card?.name}</CardTitle>
        <DetailsContainer>
          <CardDetails>{card?.details}</CardDetails>
          <CardLanguage>Tech Stack: {card?.langauge} </CardLanguage>
        </DetailsContainer>
        <LogosContainer>
          <GithubLogo to={`//${card?.source}`} target="_blank">
            <Github />
          </GithubLogo>
          {card.url ? (
            <LiveLogo to={`//${card?.url}`} target="_blank">
              <MdWifiTethering />
            </LiveLogo>
          ) : null}
        </LogosContainer>
        {/* <NavigationLogo>
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
        </NavigationLogo> */}
      </Card>
    </CardContainer>
  );
}

export default CardInfo;
