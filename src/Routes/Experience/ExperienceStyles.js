import styled from "styled-components";
import profileImg from "../../static/profileImg.png";
import {
  backgroundColor_2,
  boldedColor,
  boldedColor_1,
  textColor,
  textColor_1,
} from "../../styles/variables";

export const ExpWrapper = styled.div`
  height: 80vh;
  @media (min-width: 320px) and (max-width: 568px) {
    height: fit-content;
    margin-bottom: 10%;
  }
`;

export const ExpContainer = styled.div`
  min-height: 200px;
  padding-top: 8%;
  padding-left: 15%;

  @media (min-width: 320px) and (max-width: 568px) {
    padding-top: 0px;
    padding-left: 0px;
    width: 380px;
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
  font-size: 3.5rem;
  font-weight: 100;
  color: ${boldedColor};

  @media (min-width: 320px) and (max-width: 568px) {
    font-size: 38px;
    padding-bottom: 20px;
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

  @media (min-width: 320px) and (max-width: 568px) {
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ExpLine = styled.div`
  background: ${textColor};
  width: 1px;
  height: 250px;
  position: absolute;
  left: 10px;
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

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 0px 20px 0px;
  align-items: center;
  min-width: 200px;
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
`;

export const Desc = styled.div`
  display: flex;
  align-items: center;
  font-size: 30px;
  color: ${boldedColor_1};
  padding: 10px 0px;

  > span {
    color: ${boldedColor};
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
      margin-left: 5%;
    }
  }
`;
export const ItemValues = styled.div`
  color: ${({ isClicked }) => (isClicked ? boldedColor_1 : textColor)};
  color: ;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: ${boldedColor_1};
  }
`;

export const Dot = styled.div`
  background: ${boldedColor_1};
  height: 4px;
  width: 4px;
  border-radius: 100px;
  margin: 0px 10px;
`;

export const SkillsBox = styled.div`
  background: ${backgroundColor_2};
  color: ${textColor_1};
  width: fit-content;
  padding: 0.15rem 0.8rem 0.15rem 0.8rem;
  border-radius: 10px;
  font-size: 17px;
  font-weight: 500;
`;

export const PicContainer = styled.div`
  border-radius: 10px;
  height: fit-content;
  width: fit-content;
  overflow: hidden;
  border: 3px solid #aa475c;
  margin-bottom: 10px;

  @media (min-width: 320px) and (max-width: 568px) {
    margin-left: auto;
    margin-right: auto;
    margin-top: 10%;
    height: 200px;
  }
`;

export const SelfImage = styled.div`
  background-image: url(${profileImg});
  background-repeat: no-repeat;
  background-position: center 30%;
  width: 300px;
  height: 300px;
`;
