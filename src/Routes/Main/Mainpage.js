import React from "react";
import {
  HomeContainer,
  DetailsContainer,
  TitlesWrapper,
  TitleH1,
  TitleSpan,
  IntroP1,
  HelloButton,
  MailLogoContainer,
  NavButtonContainer,
  ResumeButton,
} from "./MainStyles";
import Typical from "react-typical";
import Nav from "../../Components/Navbar/Nav.js";
import { FiMail as Mail } from "react-icons/fi";
import { IconContext } from "react-icons";
import cv_file from "../../static/cv.pdf";

function Mainpage() {
  return (
    <>
      <HomeContainer id="/">
        <DetailsContainer>
          <TitlesWrapper>
            <TitleH1>
              Hi! I am <TitleSpan>Derrick</TitleSpan>.
            </TitleH1>
          </TitlesWrapper>
          <IntroP1>
            I
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                " love challenges.",
                2000,
                "'m a self-taught website developer.",
                2000,
              ]}
            />
          </IntroP1>
          {/* <IconContext.Provider
            value={{
              style: {
                width: "26px",
                height: "26px",
                marginRight: "8px",
              },
            }}
          >
            <HelloButton
              to="contact"
              smooth={true}
              duration={800}
              spy={true}
              exact="true"
            >
              <Mail />
              Reach out to me!
            </HelloButton>
            <ResumeButton to={cv_file} target="_blank">
              Resume
            </ResumeButton>
          </IconContext.Provider> */}
          <NavButtonContainer>
            <HelloButton
              to="contact"
              smooth={true}
              duration={800}
              spy={true}
              exact="true"
            >
              <MailLogoContainer>
                <Mail />
              </MailLogoContainer>
              Reach out to me!
            </HelloButton>
            <ResumeButton to={cv_file} target="_blank">
              Resume
            </ResumeButton>
          </NavButtonContainer>
        </DetailsContainer>
        <Nav />
      </HomeContainer>
    </>
  );
}

export default Mainpage;
