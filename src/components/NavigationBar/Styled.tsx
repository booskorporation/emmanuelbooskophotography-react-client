import styled from "styled-components";
import { NavLink } from "react-router-dom";

interface IStyledLinks {
  length: number;
}

const StyledNavigationBar = styled.nav``;

const StyledNavigationLinks = styled.ul<IStyledLinks>`
  display: grid;
  grid-template-columns: repeat(${props => props.length}, 1fr);
  justify-items: center;
`;

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

export { StyledNavigationBar, StyledNavigationLinks, StyledNavigationLink };