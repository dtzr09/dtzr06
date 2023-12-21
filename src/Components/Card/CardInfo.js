import React, { useState } from "react";
import {
  Card,
  CardContainer,
  CardDetails,
  CardLanguage,
  CardTitle,
  DetailsContainer,
  GithubLogo,
  LiveLogo,
  LogosContainer,
  SkillsBox,
} from "./CardStyles";

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
          <CardLanguage>
            <p>Tech Stack:</p>
            <ul>
              {card?.skills.map((item, index) => (
                <li key={index}>
                  <SkillsBox>{item}</SkillsBox>
                </li>
              ))}
            </ul>{" "}
          </CardLanguage>
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
      </Card>
    </CardContainer>
  );
}

export default CardInfo;
