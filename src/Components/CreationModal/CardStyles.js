import styled from "styled-components";
import { hoverColor, textColor } from "../../styles/variables";
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
  @media (min-width: 320px) and (max-width: 568px) {
    font-size: 30px;
  }
`;

export const CardDetails = styled.p`
  font-size: 20px;
  color: ${textColor};

  @media (min-width: 320px) and (max-width: 568px) {
    font-size: 15px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const CardLanguage = styled.div`
  width: 100%;
  font-size: 18px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: ${textColor};

  @media (min-width: 320px) and (max-width: 568px) {
    font-size: 12px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    padding: 10px 0px;
  }
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
