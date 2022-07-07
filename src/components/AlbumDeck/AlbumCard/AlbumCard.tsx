import { StyledAlbumCard, StyledAlbumCardTitle } from './Styled';
import { IAlbum } from '../../../types/types';

interface IProps {
  album: IAlbum;
}

const AlbumCard = ({ album }: IProps): JSX.Element => (
  <StyledAlbumCard to={`${album.id}`} thumbnail={album.thumbnail}>
    <StyledAlbumCardTitle>
      { album.title }
    </StyledAlbumCardTitle>
  </StyledAlbumCard>
);

export { AlbumCard };
