import React, { useState } from "react";
import {
  Job,
  JobContainer,
  JobDetails,
  JobLanguage,
  JobTitle,
  DetailsContainer,
  SkillsBox,
  DescList,
  DescContainer,
} from "./JobStyles.js";
import { BiRightArrow } from "react-icons/bi";

function JobInfo({ card }) {
  return (
    <JobContainer>
      <Job>
        <DetailsContainer>
          <JobTitle>{card?.name}</JobTitle>
          <JobDetails>{card.duration}</JobDetails>
          <span>{card.role} </span>
        </DetailsContainer>
        <DescContainer>
          <DescList>
            {card &&
              card.desc?.map((item, index) => (
                <div key={index}>
                  <BiRightArrow size={10} />
                  <p>{item}</p>
                </div>
              ))}
          </DescList>
          <ul>
            {card &&
              card.skills?.map((item, index) => (
                <li key={index}>
                  <SkillsBox>{item}</SkillsBox>
                </li>
              ))}
          </ul>
        </DescContainer>
      </Job>
    </JobContainer>
  );
}

export default JobInfo;
