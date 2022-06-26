import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 100vw;
  height: 100vh;

  @media (min-width: 320px) and (max-width: 480px) {
    height: 100%;
  }
`;

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 700px;
  width: 600px;
  padding: 20px 30px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;
  margin-top: 100px;

  @media (min-width: 320px) and (max-width: 480px) {
    padding: 0;
    width: 100%;
    justify-content: center;
  }
`;

export const ContactSpan = styled.div`
  height: 5px;
  width: 15%;
  margin: 0 25px;
  background-color: #aa475c;
  border-radius: 70%;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 12%;
    border-radius: 0;
    height: 1px;
  }
`;
export const ContactTitle = styled.p`
  margin-bottom: 10px;
  display: flex;
  font-size: 60px;
  font-weight: 500;
  color: #e0e1dc;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 35px;
  }
`;

export const ContainerTwo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 100%;
`;

export const InputBox = styled.div`
  line-height: 1.5;
  font-size: 20px;
  color: #c3c5bc;
  padding: 20px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 15px;
    padding: 15px;
  }
`;

export const NameInput = styled.input`
  color: #fff;
  font-size: 20px;
  width: 100%;
  border: 1.5px solid #aa475c;
  border-radius: 8px;
  height: 26px;
  outline: none;
  padding: 2px 8px;
  box-sizing: border-box;
  autofill: none;

  &:autofill,
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: all 5000s ease-in-out 0s;
  }

  &:-webkit-autofill {
    transition: background-color 5000s ease-in-out 0s !important;
    -webkit-text-fill-color: #c3c5bc;
  }

  &:focus {
    border-color: #e28ea0;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    height: 22px;
    border: 1px solid #aa475c;
    box-sizing: border-box;
  }
`;

export const PhoneInput = styled(NameInput)``;

export const EmailInput = styled(NameInput)``;

export const MessageInput = styled.textarea`
  width: 100%;
  min-height: 290px;
  resize: none;
  color: #fff;
  font-size: 20px;
  border-radius: 8px;
  height: 26px;
  border-color: #aa475c;
  outline: none;
  padding: 2px 8px;
  -webkit-text-fill-color: #c3c5bc;

  &:focus {
    border-color: #e28ea0;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    border: 1px solid #aa475c;
    box-sizing: border-box;
  }
`;

export const SubmitButton = styled.div`
  color: #aa475c;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  justify-content: center;
  width: 20%;
  border: 2px solid #aa475c;
  cursor: pointer;
  padding: 8px 2px;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    border-color: #e28ea0;
    color: #e28ea0;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 13px;
    border: 1px solid #aa475c;
  }
`;
