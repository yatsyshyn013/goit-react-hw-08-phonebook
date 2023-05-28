import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const StyledLinks = styled(NavLink)`
    color: black;
    text-decoration: none;

    margin-left: 40px;

    &.active {
        color: white;
        background-color: black;
        text-decoration: none;
    }
`

export const Header = styled(NavLink)`
    display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  margin-bottom: 16px;
  border-bottom: 1px solid #2a363b;
`