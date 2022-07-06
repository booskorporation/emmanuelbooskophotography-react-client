import { StyledHeroWrapper, StyledHeroTitle } from "./Styled";
import { NavigationBarWithConfig as NavigationBar } from "../NavigationBar";

const MainHero = (): JSX.Element => {
  return (
    <StyledHeroWrapper>
      <StyledHeroTitle>This is the home page</StyledHeroTitle>
      <NavigationBar />
    </StyledHeroWrapper>
  );
}

export { MainHero };
