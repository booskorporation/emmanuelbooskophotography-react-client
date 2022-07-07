import { StyledNavigationBar, StyledNavigationLinks, StyledNavigationLink } from "./Styled";
import { ILink } from "../../types/types";

interface IProps {
  navigationLinks: ILink[];
};

const NavigationBar = ({ navigationLinks }: IProps): JSX.Element => (
  <StyledNavigationBar>
    <StyledNavigationLinks length={navigationLinks.length}>
      { navigationLinks.map((link) => 
        <StyledNavigationLink to={link.to} key={link.to}>
          {link.text}
        </StyledNavigationLink>
      )}
    </StyledNavigationLinks>
  </StyledNavigationBar>
);

export { NavigationBar };
