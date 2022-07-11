import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--fg);
`;

const StyledHeaderTitle = styled.h1`
  padding-block: var(--step--1);
  font-size: var(--step-3);
  text-align: center;
  font-weight: bold;
`;

export { StyledHeader, StyledHeaderTitle };
