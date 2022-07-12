import { StyledHeroWrapper, StyledHeroTitle } from './Styled';
import { NavigationBarWithConfig as NavigationBar } from '../NavigationBar';

const MainHero = (): JSX.Element => (
  <StyledHeroWrapper>
    <StyledHeroTitle>Lorem, ipsum dolor.</StyledHeroTitle>
    <NavigationBar />
  </StyledHeroWrapper>
);

export { MainHero };
