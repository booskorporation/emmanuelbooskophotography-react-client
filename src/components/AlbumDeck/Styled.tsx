import styled from 'styled-components';

const StyledAlbumDeck = styled.ul`
  display: grid;
  justify-items: center;
  gap: 1rem;

  @media (min-width: 960px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export { StyledAlbumDeck };
