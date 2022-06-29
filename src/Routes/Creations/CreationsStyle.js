import styled from "styled-components";
import { Link } from "react-router-dom";

export const CreationWrapper = styled.div`
  width: 100vw;
  height: 125vh;
  min-height: 100%;

  @media (min-width: 320px) and (max-width: 568px) {
    height: 100%;
    padding-bottom: 70%;
  }
`;

export const CreationContainer = styled.div`
  width: 60%;
  height: 100%;
  padding-top: 8%;
  padding-left: 15%;
  position: relative;

  @media (min-width: 320px) and (max-width: 568px) {
    padding-top: 0px;
    padding-left: 0px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    height: fit-content;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (min-width: 320px) and (max-width: 568px) {
    justify-content: center;
    padding: 0 35px;
  }
`;

export const TitleH1 = styled.h1`
  font-size: 50px;
  font-weight: 100;
  color: #e0e1dc;

  @media (min-width: 320px) and (max-width: 568px) {
    font-size: 38px;
  }
`;

export const Titlespan = styled.div`
  width: 300px;
  height: 1px;
  background-color: #c3c5bc;
  margin-left: 5%;

  @media (min-width: 320px) and (max-width: 568px) {
    display: none;
  }
`;

export const SliderContainer = styled.div`
  position: absolute;
  height: 100%;
  max-height: 800px;
  width: 95%;
  display: flex;
  flex-direction: column;

  @media (min-width: 320px) and (max-width: 568px) {
    height: 100%;
  }

  @media (max-width: 1270px) {
    height: 100%;
  }
`;

export const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: white;
  text-align: center;
  padding-top: 20px;
`;

export const InfoContainer = styled.div`
  width: 100%;
  margin-top: 35px;
  background-color: rgba(46, 57, 79, 0.5);
  border-radius: 0px 0px 15px 15px;

  @media (min-width: 320px) and (max-width: 568px) {
    width: 100vw;
    display: flex;
    margin-left: auto;
    margin-right: auto;
  }
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
  color: rgba(255, 255, 255, 0.85);

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
  color: rgba(255, 255, 255, 0.7);

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
  color: #fff;
`;

export const LiveLogo = styled(Link)`
  cursor: pointer;
  color: #fff;
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
  color: rgba(255, 255, 255, 0.7);

  @media (min-width: 320px) and (max-width: 568px) {
    top: 0;
    font-size: 25px;
    height: 110px;
  }
`;

export const LeftContainer = styled.div`
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;
export const RightContainer = styled.div`
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;
