import styled from "styled-components";
import { AlbumCard } from "./AlbumCard";
import { albumsConfig } from "../config/albums";

const StyledAlbumDeck = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  gap: 1rem;
`;

function AlbumDeck() {
  const { albums } = albumsConfig;
  return (
    <StyledAlbumDeck>
      { albums.map((album) => <AlbumCard key={album.id} album={album} />) }
    </StyledAlbumDeck>
  );
}

export { AlbumDeck };