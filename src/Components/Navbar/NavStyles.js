import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const NavContainer = styled.div`
  width: 90px;
  height: 110px;
  display: flex;
  flex-direction: column;
  padding-right: 40px;
  align-items: flex-end;
  position: fixed;
  right: 0;
  bottom: 110px;
  line-height: 2;
  z-index: 999;
  background: transparent;

  @media (max-width: 1260px) {
    display: none;
  }
`;

export const ResumeButton = styled(LinkR)`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  border: 2px solid #aa475c;
  font-size: 20px;
  color: #aa475c;
  padding: 3px 18px;
  margin-right: 40px;
  margin-top: 22px;
  border-radius: 8px;
  text-decoration: none;

  &:hover {
    color: #e28ea0;
    border-color: #e28ea0;
  }

  @media (min-width: 320px) and (max-width: 568px) {
    display: none;
  }
`;

export const HomeLink = styled(LinkS)`
  font-size: 20px;
  text-decoration: none;
  color: #aa475c;
  cursor: pointer;
  background: transparent;

  &:hover {
    color: #e28ea0;
  }
`;
export const AboutLink = styled(HomeLink)``;

export const CreationsLink = styled(HomeLink)``;

export const LogosContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 12%;
  background: transparent;
`;

export const LogoWrapper = styled(LinkR)`
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #aa475c;

  &:hover {
    height: 20px;
    color: #e28ea0;
  }
`;
