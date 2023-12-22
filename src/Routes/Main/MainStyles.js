import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";
import { boldedColor, hoverColor, textColor } from "../../styles/variables";

export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;

  @media (min-width: 320px) and (max-width: 568px) {
    display: flex;
    width: 300px;
    height: 100vh;
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
    margin-top: auto;
    width: 100%;
    padding-top: 0%;
    padding-left: 0%;
  }
`;

export const TitlesWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media (min-width: 320px) and (max-width: 568px) {
    width: 100%;
    justify-content: left;
  }
`;

export const TitleH1 = styled.h1`
  color: ${textColor};
  font-size: 4.5rem;
  font-weight: 400;

  @media (min-width: 320px) and (max-width: 568px) {
    text-align: left;
    font-size: 30px;
  }
`;

export const TitleSpan = styled.span`
  font-weight: 500;
  font-size: 6rem;
  color: ${boldedColor};

  @media (min-width: 320px) and (max-width: 568px) {
    font-size: 40px;
  }
`;

export const IntroP1 = styled.p`
  font-size: 1.8rem;
  color: ${textColor};

  @media (min-width: 320px) and (max-width: 568px) {
    font-size: 1.3rem;
    text-align: left;
    margin-top: 15px;
    max-width: 100%;
  }
`;

export const IntroP2 = styled.p`
  max-width: 50%;
  margin-top: 5px;
  font-size: 1.8rem;
  color: ${textColor};

  @media (min-width: 320px) and (max-width: 568px) {
    font-size: 1.3rem;
    text-align: left;
    max-width: 100%;
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
  }

  @media (min-width: 568px) and (max-width: 1050px) {
    flex-direction: column;
    justify-content: left;
    align-items: flex-start;
  }
`;

export const ResumeButton = styled(LinkR)`
  display: none;

  &:hover {
    color: ${hoverColor};
    border-color: ${hoverColor};
  }

  @media (min-width: 320px) and (max-width: 568px) {
    display: block;
    position: relative;
    font-size: 16px;
    font-weight: 700;
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
  }
`;
