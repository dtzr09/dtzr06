import React, { useState } from "react";
import {
  NavContainer,
  ResumeButton,
  HomeLink,
  ExperienceLink,
  CreationsLink,
  LogosContainer,
  LogoWrapper,
} from "./NavStyles";

import { FiGithub as Github } from "react-icons/fi";
import { BsLinkedin as Linkedin } from "react-icons/bs";
import { GrInstagram as Instagram } from "react-icons/gr";
import { IconContext } from "react-icons";
import resume from "../../static/resume.pdf";

function Nav() {
  return (
    <NavContainer>
      <ResumeButton to={resume} target="_blank">
        Resume
      </ResumeButton>
      <HomeLink to="/" smooth={true} duration={800} spy={true} exact="true">
        /home
      </HomeLink>
      <ExperienceLink
        to="about"
        smooth={true}
        duration={800}
        spy={true}
        exact="true"
        offset={80}
      >
        /experience
      </ExperienceLink>
      <CreationsLink
        to="projects"
        smooth={true}
        duration={800}
        spy={true}
        exact="true"
        offset={80}
      >
        /projects
      </CreationsLink>
      <IconContext.Provider
        value={{
          style: {
            width: "24px",
            height: "24px",
          },
        }}
      >
        <LogosContainer>
          <LogoWrapper
            to={`//github.com/dtzr09?tab=repositories`}
            target="_blank"
          >
            <Github />
          </LogoWrapper>
          <LogoWrapper to={`//www.linkedin.com/in/derrick-tay`} target="_blank">
            <Linkedin />
          </LogoWrapper>
          <LogoWrapper to={`//www.instagram.com/dtzr_/`} target="_blank">
            <Instagram />
          </LogoWrapper>
        </LogosContainer>
      </IconContext.Provider>
    </NavContainer>
  );
}

export default Nav;
