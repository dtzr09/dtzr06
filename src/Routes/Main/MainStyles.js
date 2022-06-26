import { Link } from "react-scroll";
import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #1d2638;

  @media (min-width: 320px) and (max-width: 480px) {
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

  @media (min-width: 320px) and (max-width: 480px) {
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

  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    justify-content: center;
  }
`;

export const TitleH1 = styled.h1`
  color: #e0e1dc;
  font-size: 75px;
  font-weight: 80;

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 35px;
  }
`;

export const TitleSpan = styled.span`
  color: #aa475c;
`;
export const IntroP1 = styled.p`
  font-size: 40px;
  color: #c3c5bc;

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const HelloButton = styled(Link)`
  color: #aa475c;
  width: fit-content;
  background-color: transparent;
  border: 3px solid #aa475c;
  margin-top: 10%;
  padding: 15px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 100;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover {
    border-color: #e28ea0;
    color: #e28ea0;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 12px;
    padding: 8px;
    border: 1px solid #aa475c;
    margin-left: auto;
    margin-right: auto;
  }
`;
