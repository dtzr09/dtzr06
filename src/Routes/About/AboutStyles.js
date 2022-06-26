import styled from "styled-components";
import profileImg from "../../static/profileImg.png";

export const AboutWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  @media (min-width: 320px) and (max-width: 480px) {
    height: fit-content;
    margin-bottom: 10%;
  }
`;

export const AboutContainer = styled.div`
  width: 600px;
  height: 280px;
  padding-top: 8%;
  padding-left: 15%;

  @media (min-width: 320px) and (max-width: 480px) {
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
    font-size: 38px;
    padding-bottom: 20px;
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

export const InfoContainer = styled.div`
  width: 900px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const DetailsContainer = styled.div`
  max-width: 550px;
  max-height: 700px;
  color: #c3c5bc;
  font-size: 20px;
  line-height: 1.5;

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const PicContainer = styled.div`
  border-radius: 10px;
  height: fit-content;
  width: fit-content;
  overflow: hidden;
  border: 3px solid #aa475c;
  margin-bottom: 10px;

  @media (min-width: 320px) and (max-width: 480px) {
    margin-left: auto;
    margin-right: auto;
    margin-top: 10%;
  }
`;

export const SelfImage = styled.div`
  background-image: url(${profileImg});
  background-repeat: no-repeat;
  background-position: center 30%;
  width: 300px;
  height: 300px;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 150px;
    height: 150px;
  }
`;

export const LanguageTitle = styled.div`
  color: #c3c5bc;
  font-size: 20px;
  line-height: 1.5;

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 18px;
    margin-top: 20px;
    text-align: center;
  }
`;

export const LanguagesContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  padding-top: 20px;
  align-items: center;
  color: #c3c5bc;

  @media (min-width: 320px) and (max-width: 480px) {
    padding-top: 0px;
    justify-content: center;
  }
`;

export const LanguageContainer = styled.div`
  width: 100%;
  height: fit-item;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 18px;

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 18px;
    padding: 0 22px;
  }
`;
