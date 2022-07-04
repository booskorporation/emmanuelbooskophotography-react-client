import styled from "styled-components";
import { NavigationBar } from "./NavigationBar";
import { StyledTitle } from "./StyledTitle";

const StyledHeader = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
`;

const MainHeader = (): JSX.Element => {
  return (
    <StyledHeader>
      <StyledTitle>This is the title of the website</StyledTitle>
      <NavigationBar />
    </StyledHeader>
  )
};

export { MainHeader };