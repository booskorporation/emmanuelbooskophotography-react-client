import styled from 'styled-components';

const StyledTitle = styled.h2`
  text-align: center;
`;

const StyledImageMosaic = styled.ul`
  padding: 1rem;
  margin: auto;
  display: grid;
  gap: 0rem;
  grid-template-columns: repeat(7, 1fr);
  justify-items: stretch;
`;

const StyledImage = styled.img`
  transition: transform 100ms ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

export { StyledTitle, StyledImageMosaic, StyledImage };
