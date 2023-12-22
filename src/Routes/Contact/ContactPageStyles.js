import styled from "styled-components";
import { boldedColor, hoverColor, textColor } from "../../styles/variables";

export const ContactContainer = styled.div`
  width: 100vw;
  height: 100%;
`;

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 700px;
  width: 50%;
  padding: 20px 30px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;

  @media (min-width: 320px) and (max-width: 568px) {
    width: 100%;
    height: 100%;
    justify-content: center;
  }
`;

export const ContactTitle = styled.p`
  margin-bottom: 10px;
  display: flex;
  font-size: 50px;
  font-weight: 500;
  color: ${boldedColor};
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (min-width: 320px) and (max-width: 568px) {
    font-size: 36px;
  }
`;

export const ContainerTwo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const InputBox = styled.div`
  line-height: 1.5;
  font-size: 20px;
  color: ${textColor};
  padding: 20px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;

  @media (min-width: 320px) and (max-width: 568px) {
    font-size: 12px;
    padding: 15px;
  }
`;

export const NameInput = styled.input`
  font-family: monospace;
  color: #fff;
  font-size: 18px;
  width: 100%;
  background-color: transparent;
  border: 2px solid ${textColor};
  border-radius: 8px;
  height: 40px;
  outline: none;
  padding: 12px;
  box-sizing: border-box;
  autofill: none;

  &::placeholder {
    font: 15px monospace;
    color: ${textColor};
  }

  &:autofill,
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: all 5000s ease-in-out 0s;
  }

  &:-webkit-autofill {
    transition: background-color 5000s ease-in-out 0s !important;
    -webkit-text-fill-color: ${textColor};
  }

  &:focus {
    border-color: ${hoverColor};
  }

  @media (min-width: 320px) and (max-width: 568px) {
    height: 12px;
    font-size: 10px;
    border: 1px solid ${textColor};
    box-sizing: border-box;

    &::-webkit-input-placeholder {
      font: 10px monospace;
    }
  }
`;

export const PhoneInput = styled(NameInput)``;

export const EmailInput = styled(NameInput)``;

export const MessageInput = styled.textarea`
  font-family: monospace;
  width: 100%;
  height: 290px;
  min-height: 200px;
  resize: none;
  color: #fff;
  font-size: 16px;
  border-radius: 8px;
  height: 26px;
  border: 2px solid ${textColor};
  outline: none;
  padding: 12px;
  box-sizing: border-box;
  background-color: transparent;

  &:focus {
    border-color: ${hoverColor};
  }

  &::placeholder {
    font: 15px monospace;
    color: ${textColor};
  }

  @media (min-width: 320px) and (max-width: 568px) {
    border: 1px solid ${textColor};
    height: 12px;
    font-size: 10px;
    box-sizing: border-box;
    height: 200px;

    &::-webkit-input-placeholder {
      font: 10px monospace;
    }
  }
`;

export const SubmitButton = styled.div`
  color: ${textColor};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  justify-content: center;
  width: 20%;
  border: 2px solid ${textColor};
  cursor: pointer;
  padding: 8px 2px;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    border-color: ${hoverColor};
    color: ${hoverColor};
  }

  @media (min-width: 320px) and (max-width: 568px) {
    font-size: 13px;
    border: 1px solid ${textColor};
  }
`;
