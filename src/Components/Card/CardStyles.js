import styled from "styled-components";
import {
  backgroundColor_2,
  boldedColor,
  hoverColor,
  textColor,
  textColor_1,
} from "../../styles/variables";
import { Link } from "react-router-dom";

export const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${textColor};
  text-align: center;
  padding-top: 20px;
`;

export const DetailsContainer = styled.div`
  line-height: 1.8;
`;

export const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const CardTitle = styled.p`
  font-size: 40px;
  color: ${boldedColor};

  @media (min-width: 320px) and (max-width: 568px) {
    font-size: 35px;
    margin-bottom: 10px;
  }
`;

export const CardDetails = styled.p`
  font-size: 20px;
  color: ${textColor};

  @media (min-width: 320px) and (max-width: 568px) {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const CardLanguage = styled.div`
  width: 100%;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: unset;
  text-align: left;
  color: ${textColor};

  > p {
    font-size: 20px;
    margin-bottom: 0px;
  }

  > ul {
    list-style-type: none;
    display: grid;
    grid-template-columns: auto auto auto auto;
    flex-wrap: wrap;
    grid-row-gap: 8px;
  }

  @media (min-width: 320px) and (max-width: 568px) {
    font-size: 12px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    padding: 10px 0px;
  }
`;

export const SkillsBox = styled.div`
  background: ${backgroundColor_2};
  color: ${textColor_1};
  width: fit-content;
  padding: 0.15rem 0.8rem 0.15rem 0.8rem;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 500;
`;

export const LogosContainer = styled.div`
  padding-top: 18px;
  font-size: 25px;
  width: 10%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-around;

  @media (min-width: 320px) and (max-width: 568px) {
    padding-top: 10px;
    width: 50%;
  }
`;

export const GithubLogo = styled(Link)`
  cursor: pointer;
  color: ${textColor};
`;

export const LiveLogo = styled(Link)`
  cursor: pointer;
  color: ${textColor};
`;

export const NavigationLogo = styled.div`
  width: 95%;
  align-items: center;
  text-align: center;
  position: absolute;
  display: flex;
  justify-content: space-between;
  font-size: 32px;
  cursor: pointer;
  left: 2.5%;
  right: 2.5%;
  bottom: 30%;
  color: ${textColor};

  @media (min-width: 320px) and (max-width: 568px) {
    top: 0;
    font-size: 25px;
    height: 110px;
  }
`;

export const LeftContainer = styled.div`
  &:hover {
    color: ${hoverColor};
  }
`;
export const RightContainer = styled.div`
  &:hover {
    color: ${hoverColor};
  }
`;
