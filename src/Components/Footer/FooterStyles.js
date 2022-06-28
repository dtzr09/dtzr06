import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: 150px;
  z-index: -1;

  @media (min-width: 320px) and (max-width: 480px) {
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
  color: #c3c5bc;

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 7px;
  }
`;
