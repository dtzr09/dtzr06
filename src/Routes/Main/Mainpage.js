import React from "react";
import {
  HomeContainer,
  DetailsContainer,
  TitlesWrapper,
  TitleH1,
  TitleSpan,
  IntroP1,
  HelloButton,
  MailLogo,
} from "./MainStyles";
import Typical from "react-typical";
import Nav from "../../Components/Navbar/Nav.js";
import Resume from "../../Components/Resume/Resume";
import { FiMail as Mail } from "react-icons/fi";
import { IconContext } from "react-icons";

function Mainpage() {
  return (
    <>
      <Resume />
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
                " create stuff sometimes.",
                2000,
                "'m a self-taught website developer.",
                2000,
              ]}
            />
          </IntroP1>
          <IconContext.Provider
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
              Talk to me!
            </HelloButton>
          </IconContext.Provider>
        </DetailsContainer>
        <Nav />
      </HomeContainer>
    </>
  );
}

export default Mainpage;
