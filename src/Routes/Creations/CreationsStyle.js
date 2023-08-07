import styled from "styled-components";
import {
  backgroundColor_1,
  backgroundColor_2,
  backgroundColor_3,
  boldedColor,
  boldedColor_1,
  hoverColor,
  textColor,
  textColor_1,
} from "../../styles/variables";

export const CreationWrapper = styled.div`
  width: 100%;
  height: 80vh;

  @media (min-width: 320px) and (max-width: 568px) {
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
  color: ${boldedColor};

  @media (min-width: 320px) and (max-width: 568px) {
    font-size: 38px;
  }
`;

export const Titlespan = styled.div`
  width: 300px;
  height: 1px;
  background-color: ${textColor};
  margin-left: 5%;

  @media (min-width: 320px) and (max-width: 568px) {
    display: none;
  }
`;

export const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${textColor};
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

export const ProjectWrapper = styled.ul`
  width: 100%;
  height: 80%;
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  grid-gap: 20px;

  @media screen and (max-width: 1080px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;

export const ProjectContainer = styled.div`
  background: ${backgroundColor_1};
  border-radius: 20px;
  color: ${textColor};
  padding: 15px;
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > span {
    font-size: 22px;
    font-weight: 500px;
    color: ${boldedColor_1};
  }

  > p {
    font-size: 20px;
    line-height: 22px;
  }

  > ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;

    > li {
      margin-top: 1rem;
      margin-right: 0.5rem;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${backgroundColor_3};
    border-radius: 20px;
    z-index: 1;
  }

  &:hover::before {
    opacity: 0;
  }

  &:hover {
    transform: translateY(-7px);
    background: ${backgroundColor_1};

    > span {
      color: ${boldedColor};
    }
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 20px;
  margin-bottom: 20px;

  > img {
    max-height: 250px;
    width: auto;
    margin-left: -30%;
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
