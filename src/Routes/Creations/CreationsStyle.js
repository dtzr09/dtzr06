import styled from "styled-components";
import { Link } from "react-router-dom";

export const CreationWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  max-height: 100%;
  @media (min-width: 320px) and (max-width: 480px) {
    height: fit-content;
  }
`;

export const CreationContainer = styled.div`
  width: 600px;
  height: 100%;
  padding-top: 8%;
  padding-left: 15%;

  @media (min-width: 320px) and (max-width: 480px) {
    padding-top: 0px;
    padding-left: 0px;
    width: 350px;
    margin-left: auto;
    margin-right: auto;
    height: fit-content;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (min-width: 320px) and (max-width: 480px) {
    justify-content: center;
    padding: 0 35px;
  }
`;

export const TitleH1 = styled.h1`
  font-size: 50px;
  font-weight: 100;
  color: #e0e1dc;

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 22px;
  }
`;

export const Titlespan = styled.div`
  width: 300px;
  height: 1px;
  background-color: #c3c5bc;
  margin-left: 5%;

  @media (min-width: 320px) and (max-width: 480px) {
    display: none;
  }
`;

export const CardsContainer = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 10px;

  @media (min-width: 320px) and (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Card = styled.div`
  width: 260px;
  height: 300px;
  border-radius: 15px;
  background-color: #2a3853;
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;

  &:hover {
    background-color: #36496d;
    transition: 0.3s ease-in-out;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 200px;
    height: 160px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
  }
`;

export const LogosContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: transparent;
`;

export const MainLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: transparent;
`;

export const GithubLogo = styled(Link)`
  width: 29px;
  height: 30px;
  cursor: pointer;
  background-color: transparent;
  color: #fff;
`;

export const LiveLogo = styled(Link)`
  background-repeat: no-repeat;
  width: 29px;
  height: 30px;
  cursor: pointer;
  background-color: transparent;
`;

export const DetailsContainer = styled.div`
  margin-top: 10px;
  height: 100%;
  background-color: transparent;
  position: relative;
`;

export const Title = styled.p`
  font-size: 32px;
  color: rgba(79, 128, 224, 0.55);
  background-color: transparent;
  font-weight: bold;

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 18px;
  }
`;
export const Details = styled.p`
  background-color: transparent;
  height: 80px;
  max-height: 120px;
  line-height: 1.5;
  font-size: 18px;
  color: #c3c5bc;

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 15px;
  }
`;

export const LanguagesContainer = styled.div`
  width: 100%;
  background-color: transparent;
  position: absolute;
  bottom: 10%;
`;

export const Languages = styled.p`
  background-color: transparent;
  color: #c3c5bc;
  font-size: 16px;
  margin-top: 20px;
  line-height: 1.5;

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 12px;
  }
`;
