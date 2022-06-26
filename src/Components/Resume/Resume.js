import React from "react";
import { ResumeButton } from "./ResumeStyles";
import cv_file from '../../Files/cv.pdf'
function Resume() {
  return (
    <>
      <ResumeButton to={cv_file} target="_blank">
        Resume
      </ResumeButton>
    </>
  );
}

export default Resume;
