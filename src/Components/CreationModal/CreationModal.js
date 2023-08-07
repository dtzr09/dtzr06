import React, { useState } from "react";
import {
  Creation,
  CustomModal,
  InfoContainer,
  SliderContainer,
} from "./CreationModalStyles";
import ImageSlider from "../ImageSlider/ImageSlider";
import CardInfo from "./CardInfo";

function CreationModal({ card, open, setOpen }) {
  return (
    <CustomModal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
    >
      <Creation>
        <SliderContainer>
          <ImageSlider card={card} />
          <InfoContainer>
            <CardInfo card={card} />
          </InfoContainer>
        </SliderContainer>
      </Creation>
    </CustomModal>
  );
}

export default CreationModal;
