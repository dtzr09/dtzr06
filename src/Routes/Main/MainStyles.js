import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";
import { boldedColor, hoverColor, textColor } from "../../styles/variables";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;

  @media (min-width: 320px) and (max-width: 568px) {
    width: 300px;
    height: 100%;
    margin-bottom: 20%;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const DetailsContainer = styled.div`
  height: 50%;
  padding-top: 25%;
  padding-left: 15%;
  line-height: 1.5;

  @media (min-width: 320px) and (max-width: 568px) {
    text-align: center;
    padding-top: 20%;
    padding-left: 0;
    width: 100%;
  }
`;

export const TitlesWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media (min-width: 320px) and (max-width: 568px) {
    width: 100%;
    justify-content: center;
  }
`;

export const TitleH1 = styled.h1`
  color: ${textColor};
  font-size: 5rem;
  font-weight: 400;

  @media (min-width: 320px) and (max-width: 568px) {
    font-size: 35px;
  }
`;

export const TitleSpan = styled.span`
  font-weight: 500;
  font-size: 6rem;
  color: ${boldedColor};
`;

export const IntroP1 = styled.p`
  font-size: 2.2rem;
  color: ${textColor};

  @media (min-width: 320px) and (max-width: 568px) {
    font-size: 20px;
  }
`;

export const IntroP2 = styled.p`
  max-width: 50%;
  margin-top: 10px;
  font-size: 1.5rem;
  color: ${textColor};

  @media (min-width: 320px) and (max-width: 568px) {
    font-size: 20px;
  }
`;

export const NavButtonContainer = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;

  @media (min-width: 320px) and (max-width: 568px) {
    font-size: 12px;
    padding: 8px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 568px) and (max-width: 1050px) {
    flex-direction: column;
    justify-content: left;
    align-items: flex-start;
  }
`;

export const ResumeButton = styled(LinkR)`
  display: none;

  @media (min-width: 320px) and (max-width: 568px) {
    display: block;
    position: relative;
    font-size: 12px;
    padding: 8px;
    border: 1px solid ${boldedColor};
    margin: 0;
    border-radius: 8px;
    text-decoration: none;
    color: ${textColor};
  }

  @media (min-width: 569px) and (max-width: 1260px) {
    display: block;
    position: relative;
    font-size: 26px;
    padding: 15px 25px;
    border: 3px solid ${boldedColor};
    margin: 0;
    z-index: 1;
    color: ${textColor};
    border-radius: 8px;
    text-decoration: none;
    margin-top: 10%;

    &:hover {
      color: ${hoverColor};
      border-color: ${hoverColor};
    }
  }
`;
