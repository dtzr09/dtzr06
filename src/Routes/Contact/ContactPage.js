import React, { useRef } from "react";
import {
  ContactContainer,
  ContactWrapper,
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
import emailjs from "@emailjs/browser";

function ContactPage() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rbf100n",
        "template_k5eepdj",
        form.current,
        "biYs1dXe9iBABIwkR"
      )
      .then(
        (result) => {
          if (result.text == "OK") {
            alert("Your Email has been sent successfully!");
            form.current.reset();
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <ContactContainer id="contact">
        <ContactWrapper>
          <ContactTitle>Let's Connect !</ContactTitle>
          <form ref={form}>
            <ContainerTwo>
              <InputBox>
                <NameInput placeholder="Name: " name="name" />
              </InputBox>
              <InputBox>
                <PhoneInput placeholder="Phone Number: " name="number" />
              </InputBox>
            </ContainerTwo>
            <InputBox>
              <EmailInput placeholder="Email Address: " name="email" />
            </InputBox>
            <InputBox>
              <MessageInput placeholder="LinkedIn handle..." name="message" />
            </InputBox>
          </form>

          <IconContext.Provider
            value={{
              style: {
                marginLeft: "9px",
                marginBottom: "4px",
              },
            }}
          >
            <SubmitButton onClick={sendEmail}>
              Send! <Send />
            </SubmitButton>
          </IconContext.Provider>
        </ContactWrapper>
      </ContactContainer>
    </>
  );
}

export default ContactPage;
