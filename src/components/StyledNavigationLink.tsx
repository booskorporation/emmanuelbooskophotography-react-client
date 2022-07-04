import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavigationLink = styled(NavLink)`
  color: black;
  font-weight: bold;
  font-size: 1.75rem;
  padding: 1rem 2rem;
  text-decoration: none;

  &:hover {
    background-color: #ddd;
  }

  &.active {
    background-color: #d9f99d;
  }
`

export { StyledNavigationLink };