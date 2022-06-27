import React from "react";
import {
  ContactContainer,
  ContactWrapper,
  ContactSpan,
  ContactTitle,
  ContainerTwo,
  InputBox,
  NameInput,
  PhoneInput,
  EmailInput,
  MessageInput,
  SubmitButton,
} from "./ContactPageStyles";
import { IoMdSend as Send } from "react-icons/io";
import { IconContext } from "react-icons";

function ContactPage() {
  return (
    <>
      <ContactContainer id="contact">
        <ContactWrapper>
          <ContactTitle>
            <ContactSpan /> Let's Connect ! <ContactSpan />
          </ContactTitle>
          <ContainerTwo>
            <InputBox>
              Name: <br />
              <NameInput />
            </InputBox>
            <InputBox>
              Phone Number: <br />
              <PhoneInput />
            </InputBox>
          </ContainerTwo>
          <InputBox>
            Email: <br />
            <EmailInput />
          </InputBox>
          <InputBox>
            Message: <br />
            <MessageInput />
          </InputBox>
          <IconContext.Provider
            value={{
              style: {
                marginLeft: "9px",
                marginBottom: "4px",
              },
            }}
          >
            <SubmitButton>
              Send! <Send />
            </SubmitButton>
          </IconContext.Provider>
        </ContactWrapper>
      </ContactContainer>
    </>
  );
}

export default ContactPage;
