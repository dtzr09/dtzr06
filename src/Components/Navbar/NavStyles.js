import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const NavContainer = styled.div`
  width: 90px;
  height: 110px;
  display: flex;
  flex-direction: column;
  padding-right: 80px;
  align-items: flex-end;
  position: fixed;
  right: 0;
  line-height: 2;
  z-index: 999;
  background: transparent;

  @media (min-width: 320px) and (max-width: 480px) {
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
