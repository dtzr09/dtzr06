import styled from "styled-components";
import { Modal } from "semantic-ui-react";

export const Creation = styled.div`
  background: transparent;
`;

export const CustomModal = styled(Modal).attrs(() => ({
  className: "custom-modal",
}))`
  &&&.custom-modal {
    background-color: transparent;
`;

export const SliderContainer = styled.div`
  height: 100%;
  max-height: 800px;
  display: flex;
  flex-direction: column;

  @media (min-width: 320px) and (max-width: 568px) {
    height: 100%;
  }

  @media (max-width: 1270px) {
    height: 100%;
  }
`;

export const InfoContainer = styled.div`
  width: 100%;
  margin-top: 35px;
  background-color: rgba(46, 57, 79, 0.8);
  border-radius: 0px 0px 15px 15px;

  @media (min-width: 320px) and (max-width: 568px) {
    width: 100vw;
    display: flex;
    margin-left: auto;
    margin-right: auto;
  }
`;
