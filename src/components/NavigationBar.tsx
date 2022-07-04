import styled from "styled-components";
import { StyledNavigationLink } from "./StyledNavigationLink";
import { navLinks } from "../config/navLinks"

interface IStyledNavigationLinkList {
  length: number;
}

const StyledNavBar = styled.nav``;
const StyledNavigationLinkList = styled.ul<IStyledNavigationLinkList>`
  display: grid;
  grid-template-columns: repeat(${props => props.length}, 1fr);
  justify-items: center;
`;

const NavigationBar = () => {
  return (
    <StyledNavBar>
      <StyledNavigationLinkList length={navLinks.length}>
        { navLinks.map((link) => 
          <StyledNavigationLink 
            to={link.to} 
            key={link.to}
          >
            {link.text}
          </StyledNavigationLink>
        )}
      </StyledNavigationLinkList>
    </StyledNavBar>
  )
};

export { NavigationBar };