import { StyledTitle } from '../StyledTitle';
import { NavigationBar } from '../NavigationBar';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

function HomePage() {
  return (
    <StyledWrapper>
      <StyledTitle>This is the home page</StyledTitle>
      <NavigationBar />
    </StyledWrapper>
  );
}

export { HomePage };
