import styled from 'styled-components';

const StyledHeroWrapper = styled.div`
  min-height: 100vh;
  width: min(90%, 1140px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-inline: auto;
`;

const StyledHeroTitle = styled.h1`
  background-color: var(--fg);
  font-size: var(--step-5);
  padding: var(--step-2) var(--step-5);
  font-weight: bold;
`;

export { StyledHeroWrapper, StyledHeroTitle };
