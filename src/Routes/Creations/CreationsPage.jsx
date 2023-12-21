import React, { useState } from "react";
import {
  CreationWrapper,
  CreationContainer,
  TitleWrapper,
  TitleH1,
  Titlespan,
  ProjectContainer,
  ImageContainer,
  ProjectWrapper,
  SkillsBox,
} from "./CreationsStyle";

import { creations } from "../../variables/creations";
import CreationModal from "../../Components/CreationModal/CreationModal";

function CreationsPage() {
  const [currentCard, setCurrentCard] = useState();
  const [open, setOpen] = useState(false);
  return (
    <div>
      <CreationWrapper id="projects">
        <CreationContainer>
          <TitleWrapper>
            <TitleH1>Projects</TitleH1>
            <Titlespan />
          </TitleWrapper>

          <ProjectWrapper>
            {creations.map((creation) => {
              return (
                <ProjectContainer
                  onClick={() => {
                    setOpen(true);
                    setCurrentCard(creation);
                  }}
                >
                  <ImageContainer>
                    <img src={creation.preview} alt="" />
                  </ImageContainer>
                  <span>{creation.name}</span>
                  <p>{creation.details}</p>
                  <ul>
                    {creation.skills.map((item, index) => (
                      <li key={index}>
                        <SkillsBox>{item}</SkillsBox>
                      </li>
                    ))}
                  </ul>
                </ProjectContainer>
              );
            })}
          </ProjectWrapper>
        </CreationContainer>
      </CreationWrapper>
      <CreationModal
        type="Job"
        card={currentCard}
        open={open}
        setOpen={setOpen}
        image={true}
      />
    </div>
  );
}

export default CreationsPage;
