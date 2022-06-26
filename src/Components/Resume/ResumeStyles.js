import { Link } from "react-router-dom";
import styled from "styled-components";

export const ResumeButton = styled(Link)`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  border: 2px solid #aa475c;
  font-size: 20px;
  color: #aa475c;
  padding: 3px 18px;
  margin-right: 80px;
  margin-top: 22px;
  border-radius: 8px;
  text-decoration: none;

  &:hover {
    color: #e28ea0;
    border-color: #e28ea0;
  }
  
  @media (min-width: 320px) and (max-width: 480px) {
    display: none;
  }
`;
