import React, { useEffect, useState } from "react";
import {
  TitleWrapper,
  TitleH1,
  Titlespan,
  InfoContainer,
  ExpWrapper,
  ExpContainer,
  Item,
  ItemBullet,
  ExpLine,
  ItemValues,
  DescBox,
  Dot,
  Desc,
  DescList,
  SkillsBox,
} from "./ExperienceStyles";
import { BiRightArrow } from "react-icons/bi";
import { jobExperience } from "../../variables/experience";

function ExperiencePage() {
  const [job, setJob] = useState({});
  const [clickedExpId, setClickedExpId] = useState(null);

  const displayDesc = (id) => {
    const job = jobExperience.find((item) => item.id == id);
    setJob(job);
    if (clickedExpId === id) {
      setClickedExpId(null);
    } else {
      setClickedExpId(id);
    }
  };

  useEffect(() => {
    displayDesc(1);
  }, []);

  return (
    <ExpWrapper id="about">
      <ExpContainer>
        <TitleWrapper>
          <TitleH1> Experience</TitleH1>
          <Titlespan />
        </TitleWrapper>
        <InfoContainer>
          <div style={{ marginTop: "20px" }}>
            <ExpLine />
            {/* <PicContainer>
            <SelfImage />
          </PicContainer> */}
            <div>
              {jobExperience.map((exp, idx) => {
                return (
                  <Item key={idx}>
                    <ItemBullet
                      onClick={() => displayDesc(exp.id)}
                      isClicked={clickedExpId === exp.id}
                    />
                    <ItemValues
                      onClick={() => displayDesc(exp.id)}
                      isClicked={clickedExpId === exp.id}
                    >
                      {exp.duration}
                    </ItemValues>
                  </Item>
                );
              })}
            </div>
          </div>

          <DescBox>
            <Desc>
              {job.role} <Dot /> <span>{job.name}</span>
            </Desc>
            <DescList>
              {job &&
                job.desc?.map((item, index) => (
                  <div key={index}>
                    <BiRightArrow size={15} />
                    <p>{item}</p>
                  </div>
                ))}
            </DescList>
            <ul>
              {job &&
                job.skills?.map((item, index) => (
                  <li key={index}>
                    <SkillsBox>{item}</SkillsBox>
                  </li>
                ))}
            </ul>
          </DescBox>
        </InfoContainer>
      </ExpContainer>
    </ExpWrapper>
  );
}

export default ExperiencePage;
