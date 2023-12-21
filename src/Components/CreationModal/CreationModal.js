import React, { useState } from "react";
import {
  Creation,
  CustomModal,
  InfoContainer,
  SliderContainer,
} from "./CreationModalStyles";
import ImageSlider from "../ImageSlider/ImageSlider";
import CardInfo from "../Card/CardInfo";
import JobInfo from "../Job/JobInfo";

function CreationModal({ card, open, setOpen, image, type }) {
  return (
    <CustomModal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
    >
      <Creation>
        <SliderContainer>
          {image ? <ImageSlider card={card} /> : null}
          <InfoContainer>
            {type != "Projects" ? (
              <CardInfo card={card} />
            ) : (
              <JobInfo card={card} />
            )}
          </InfoContainer>
        </SliderContainer>
      </Creation>
    </CustomModal>
  );
}

export default CreationModal;
