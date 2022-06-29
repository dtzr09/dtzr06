import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #1d2638;

  @media (min-width: 320px) and (max-width: 568px) {
    width: 300px;
    height: 100%;
    margin-bottom: 20%;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const DetailsContainer = styled.div`
  width: 55%;
  height: 50%;
  padding-top: 10%;
  padding-left: 15%;
  font-weight: 80;
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
  color: #aa475c;

  @media (min-width: 320px) and (max-width: 568px) {
    width: 100%;
    justify-content: center;
  }
`;

export const TitleH1 = styled.h1`
  color: #e0e1dc;
  font-size: 4.5rem;
  font-weight: 80;

  @media (min-width: 320px) and (max-width: 568px) {
    font-size: 35px;
  }
`;

export const TitleSpan = styled.span`
  color: #aa475c;
`;
export const IntroP1 = styled.p`
  font-size: 40px;
  color: #c3c5bc;

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

export const HelloButton = styled(LinkS)`
  color: #aa475c;
  width: fit-content;
  background-color: transparent;
  border: 3px solid #aa475c;
  margin-top: 10%;
  padding: 15px;
  cursor: pointer;
  font-size: 26px;
  font-weight: 100;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover {
    border-color: #e28ea0;
    color: #e28ea0;
  }

  @media (min-width: 320px) and (max-width: 568px) {
    font-size: 12px;
    padding: 8px;
    border: 1px solid #aa475c;
    margin: 0;
  }
`;

export const MailLogoContainer = styled.div`
  margin-right: 10px;
  width: 36px;
  height: 40px;
  font-size: 36px;

  @media (min-width: 320px) and (max-width: 568px) {
    font-size: 18px;
    width: 18px;
    height: 20px;
    margin-right: 6px;
  }
`;

export const ResumeButton = styled(LinkR)`
  display: none;

  @media (min-width: 320px) and (max-width: 568px) {
    display: block;
    position: relative;
    font-size: 12px;
    padding: 8px;
    border: 1px solid #aa475c;
    margin: 0;
    border-radius: 8px;
    text-decoration: none;
    color: #aa475c;
  }

  @media (min-width: 569px) and (max-width: 1260px) {
    display: block;
    position: relative;
    font-size: 26px;
    padding: 15px 25px;
    border: 3px solid #aa475c;
    margin: 0;
    z-index: 1;
    color: #aa475c;
    border-radius: 8px;
    text-decoration: none;
    margin-top: 10%;

    &:hover {
      color: #e28ea0;
      border-color: #e28ea0;
    }
  }
`;
