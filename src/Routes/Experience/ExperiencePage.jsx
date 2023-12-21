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
  ItemWrapper,
} from "./ExperienceStyles";
import { jobExperience } from "../../variables/experience";
import { BsExclamationCircle } from "react-icons/bs";
import CreationModal from "../../Components/CreationModal/CreationModal";
import { BiRightArrow } from "react-icons/bi";

function ExperiencePage() {
  const [job, setJob] = useState({});
  const [clickedExpId, setClickedExpId] = useState(null);
  const [mobile, setMobile] = useState(false);
  const [open, setOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState();

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

  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;

      if (currentWidth >= 320 && currentWidth <= 568) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  return (
    <ExpWrapper id="about">
      <TitleWrapper>
        <TitleH1> Experience</TitleH1>
        <Titlespan />
      </TitleWrapper>
      <ExpContainer>
        <InfoContainer>
          {!mobile ? (
            <div style={{ marginTop: "20px" }}>
              <ExpLine />
              <ItemWrapper>
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
              </ItemWrapper>
            </div>
          ) : null}

          <DescBox>
            {!mobile ? (
              <Desc>
                {job.role} <Dot /> <span>{job.name}</span>
              </Desc>
            ) : null}
            {mobile ? (
              <ItemWrapper>
                {jobExperience.map((exp, idx) => {
                  return (
                    <Item
                      key={idx}
                      onClick={() => {
                        setOpen(true);
                        setCurrentCard(exp);
                      }}
                    >
                      <Desc>
                        {exp.role}
                        <span>{exp.name}</span>
                      </Desc>

                      <ItemValues>{exp.duration}</ItemValues>
                      <BsExclamationCircle
                        style={{ position: "absolute", right: 10 }}
                      />
                    </Item>
                  );
                })}
              </ItemWrapper>
            ) : null}

            {!mobile ? (
              <>
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
              </>
            ) : null}
          </DescBox>
        </InfoContainer>
      </ExpContainer>
      <CreationModal
        type="Projects"
        card={currentCard}
        open={open}
        setOpen={setOpen}
      />
    </ExpWrapper>
  );
}

export default ExperiencePage;
