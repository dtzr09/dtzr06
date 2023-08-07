import styled from "styled-components";
import { textColor } from "../../styles/variables";

export const FooterContainer = styled.div`
  width: 100%;
  height: 100%;
  z-index: -1;

  @media (min-width: 320px) and (max-width: 568px) {
    height: 100px;
  }
`;

export const FooterWrapper = styled.div`
  height: 100%;
  width: 100vw;
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  background-color: transparent;
`;

export const FooterDetails = styled.div`
  position: absolute;
  bottom: 3%;
  color: ${textColor};

  @media (min-width: 320px) and (max-width: 568px) {
    font-size: 7px;
  }
`;
