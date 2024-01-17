import styled from "styled-components";
import {
  backgroundColor_1,
  backgroundColor_2,
  boldedColor,
  boldedColor_1,
  textColor,
  textColor_1,
} from "../../styles/variables";

export const ExpWrapper = styled.div`
  height: 100vh;

  @media (min-width: 320px) and (max-width: 568px) {
    height: 100%;
    margin-bottom: 10%;
  }
`;

export const ExpContainer = styled.div`
  min-height: 200px;
  padding-left: 15%;

  @media (min-width: 320px) and (max-width: 568px) {
    padding-top: 0px;
    padding-left: 0px;
    width: 380px;
    height: 100%;
    margin: 0px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 15%;

  @media (min-width: 320px) and (max-width: 568px) {
    justify-content: left;
    padding: 0 40px;
  }
`;

export const TitleH1 = styled.h1`
  font-size: 3rem;
  font-weight: 100;
  color: ${boldedColor};

  @media (min-width: 320px) and (max-width: 568px) {
    font-size: 36px;
    padding-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
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

export const InfoContainer = styled.div`
  width: 50%;
  display: flex;
  position: relative;
  flex-direction: row;
`;

export const ExpLine = styled.div`
  background: ${textColor};
  width: 1px;
  height: 250px;
  position: absolute;
  left: 10px;
`;

export const ItemWrapper = styled.div`
  position: relative;

  @media (min-width: 320px) and (max-width: 568px) {
    display: flex;
    flex-direction: column;
    width: 90vw;
  }
`;
export const Item = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 0px 20px 0px;
  align-items: center;
  min-width: 220px;

  @media (min-width: 320px) and (max-width: 568px) {
    flex-direction: column;
    align-items: unset;
    background-color: ${backgroundColor_1};
    margin: 10px 0px;
    padding: 8px 16px;
    border-radius: 10px;
  }
`;

export const ItemBullet = styled.div`
  float: left;
  margin-right: 20px;
  background: ${({ isClicked }) => (isClicked ? boldedColor_1 : textColor)};
  height: 20px;
  width: 20px;
  line-height: 30px;
  border-radius: 100px;
  text-align: center;
  position: relative;
  cursor: pointer;
`;

export const DescBox = styled.div`
  color: ${textColor};
  min-width: 700px;
  margin-left: 10%;
  font-size: 20px;
  line-height: 35px;

  > ul {
    margin-top: 20px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;

    > li {
      margin-left: 0.5rem;
    }
  }

  @media (min-width: 320px) and (max-width: 568px) {
    margin: 0px;
    display: flex;
    flex-direction: column;
    padding: 0px 20px;
  }
`;

export const Desc = styled.div`
  display: flex;
  align-items: center;
  font-size: 30px;
  color: ${boldedColor_1};
  padding: 10px 0px;
  width: 100vw;

  > span {
    color: ${boldedColor};
  }

  @media (min-width: 320px) and (max-width: 568px) {
    flex-direction: column;
    text-align: left;
    align-items: unset;
    font-size: 22px;
    padding: 0px;

    > span {
      font-size: 22px;
      display: flex;
      text-align: left;
      justify-content: left;
    }
  }
`;
export const DescList = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    position: relative;
    align-items: center;

    > svg {
      position: absolute;
      margin-top: 7px;
    }
    > p {
      font-size: 22px;
      margin-left: 5%;
    }
  }
`;
export const ItemValues = styled.div`
  color: ${({ isClicked }) => (isClicked ? boldedColor_1 : textColor)};
  font-size: 20px;
  cursor: pointer;

  &:hover {
    color: ${boldedColor_1};
  }

  @media (min-width: 320px) and (max-width: 568px) {
    font-size: 16px;
  }
`;

export const Dot = styled.div`
  background: ${boldedColor_1};
  height: 4px;
  width: 4px;
  border-radius: 100px;
  margin: 0px 10px;

  @media (min-width: 320px) and (max-width: 568px) {
    display: none;
  }
`;

export const SkillsBox = styled.div`
  background: ${backgroundColor_2};
  color: ${textColor_1};
  width: fit-content;
  padding: 0.15rem 0.8rem 0.15rem 0.8rem;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 500;
`;