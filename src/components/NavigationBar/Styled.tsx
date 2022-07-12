import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

interface IStyledLinks {
  length: number;
}

const StyledNavigationBar = styled.nav`
  background-color: var(--white);
`;

const StyledNavigationLinks = styled.ul<IStyledLinks>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.length}, 1fr);
  justify-items: stretch;
`;

const StyledNavigationLink = styled(NavLink)`
  font-size: var(--step-1);
  text-decoration: none;
  text-align: center;
  padding: var(--step--2) var(--step-2);

  &:hover {
    background-color: var(--bg);
    color: var(--white);
  }

  &.active,
  &:visited.active {
    background-color: var(--clr-secondary);
    color: var(--white);
  }

  &:visited {
    color: var(--clr-primary);
  }
`;

export { StyledNavigationBar, StyledNavigationLinks, StyledNavigationLink };
