import { StyledAlbumCard, StyledAlbumCardTitle } from "./Styled";
import { IAlbum } from "../../../types/types";

interface IProps {
  album: IAlbum;
}

function AlbumCard({ album }: IProps) {
  return (
    <StyledAlbumCard thumbnail={ album.thumbnail }>
      <StyledAlbumCardTitle>
        { album.title }
      </StyledAlbumCardTitle>
    </StyledAlbumCard>
  );
}

export { AlbumCard };