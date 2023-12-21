import styled from "styled-components";
import {
  backgroundColor_2,
  boldedColor,
  boldedColor_1,
  textColor,
  textColor_1,
} from "../../styles/variables";

export const Job = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${textColor};
  text-align: center;
  padding-top: 20px;
`;

export const DetailsContainer = styled.div`
  padding-bottom: 10px;
  border-bottom: solid 2px ${backgroundColor_2};
  border-radius: 0px 0px 10px 10px;
  > span {
    font-size: 20px;
  }
`;

export const DescContainer = styled.div`
  margin-top: 10px;

  > ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 10px;

    > li {
      margin: 5px;
    }
  }
`;

export const DescList = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    position: relative;
    align-items: center;
    display: flex;
    margin: 10px 10px;
    text-align: left;
    font-size: 15px;

    > svg {
      position: absolute;
      top: 5px;
    }
    > p {
      margin-left: 5%;
    }
  }
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

export const JobContainer = styled.div`
  width: 100%;
  margin-top: 0;
`;

export const JobTitle = styled.p`
  font-size: 40px;

  @media (min-width: 320px) and (max-width: 568px) {
    font-size: 30px;
    margin-bottom: 0;
    color: ${boldedColor};
  }
`;

export const JobDetails = styled.p`
  font-size: 20px;
  color: ${boldedColor_1};

  @media (min-width: 320px) and (max-width: 568px) {
    font-size: 15px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const JobLanguage = styled.div`
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
