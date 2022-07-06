import { StyledHeader, StyledHeaderTitle } from "./Styled";
import { NavigationBarWithConfig as NavigationBar } from "../NavigationBar";

const MainHeader = (): JSX.Element => {
  return (
    <StyledHeader>
      <StyledHeaderTitle>This is the title of the website</StyledHeaderTitle>
      <NavigationBar />
    </StyledHeader>
  )
}

export { MainHeader };