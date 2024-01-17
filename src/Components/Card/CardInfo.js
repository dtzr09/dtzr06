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
import { BsDashCircle } from "react-icons/bs";
import { boldedColor } from "../../styles/variables.js";

function CardInfo({ card, setOpen }) {
  return (
    <CardContainer>
      <Card>
        <CardTitle>{card?.name}</CardTitle>
        <DetailsContainer>
          <CardDetails>{card?.details}</CardDetails>
          <CardLanguage>
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
          <BsDashCircle
            style={{
              position: "absolute",
              right: "15px",
              color: boldedColor,
            }}
            size={20}
            onClick={() => setOpen(false)}
          />
        </LogosContainer>
      </Card>
    </CardContainer>
  );
}

export default CardInfo;
