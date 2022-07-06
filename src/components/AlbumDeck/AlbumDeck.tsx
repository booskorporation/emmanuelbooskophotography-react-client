import { StyledAlbumDeck } from "./Styled";
import { AlbumCard } from "./AlbumCard";
import { IAlbum } from "../../types/types";

interface IProps {
  albums: IAlbum[];
}

const AlbumDeck = ({ albums }: IProps): JSX.Element => (
  <StyledAlbumDeck>
    { albums.map((album) => <AlbumCard key={album.id} album={album} />) }
  </StyledAlbumDeck>
);

export { AlbumDeck };