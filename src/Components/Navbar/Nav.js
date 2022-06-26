import React, { useState } from "react";
import {
  NavContainer,
  HomeLink,
  AboutLink,
  CreationsLink,
  LogosContainer,
  LogoWrapper,
} from "./NavStyles";

import { FiGithub as Github } from "react-icons/fi";
import { BsLinkedin as Linkedin } from "react-icons/bs";
import { GrInstagram as Instagram } from "react-icons/gr";
import { IconContext } from "react-icons";

function Nav() {

  return (
    <NavContainer>
      <HomeLink to="/" smooth={true} duration={800} spy={true} exact="true">
        /home
      </HomeLink>
      <AboutLink
        to="about"
        smooth={true}
        duration={800}
        spy={true}
        exact="true"
        offset={80}
      >
        /about
      </AboutLink>
      <CreationsLink
        to="creations"
        smooth={true}
        duration={800}
        spy={true}
        exact="true"
        offset={80}
      >
        /creations
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
          <LogoWrapper
            to={`//https://www.instagram.com/dtzr_/`}
            target="_blank"
          >
            <Instagram />
          </LogoWrapper>
        </LogosContainer>
      </IconContext.Provider>
    </NavContainer>
  );
}

export default Nav;
