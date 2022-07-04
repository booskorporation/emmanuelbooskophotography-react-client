import styled from "styled-components";
import { StyledNavigationLink } from "./StyledNavigationLink";
import { linksConfig } from "../config/navLinks"

interface IStyledNavigationLinkList {
  length: number;
}

const StyledNavBar = styled.nav``;
const StyledNavigationLinkList = styled.ul<IStyledNavigationLinkList>`
  display: grid;
  grid-template-columns: repeat(${props => props.length}, 1fr);
  justify-items: center;
`;

const NavigationBar = (): JSX.Element => {
  const { navigationLinks } = linksConfig;
  return (
    <StyledNavBar>
      <StyledNavigationLinkList length={navigationLinks.length}>
        { navigationLinks.map((link) => 
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