import styled, { css } from "styled-components";
import { IAlbum } from "../types/types";

interface IStyledAlbumCardProps {
  thumbnail?: string;
}

const cssAlbumCardWithThumbnail = css<IStyledAlbumCardProps>`
  &:hover {
    background-image: url(${props => props.thumbnail});
    background-repeat: no-repeat;
  }

  &:hover h3 {
    color: white;
    background: rgba(0, 0, 0, 0.7);
  }
`

const StyledAlbumCard = styled.li<IStyledAlbumCardProps>`
  background-color: #e2e8f0;
  list-style: none;
  cursor: pointer;
  width: 400px;
  height: 200px;
  border-radius: 1rem;
  box-shadow: 0.125rem 0.125rem 0.5rem gray;

  &:hover {
    transform: scale(1.025);
  }

  ${props => props.thumbnail && cssAlbumCardWithThumbnail }
`;

const StyledAlbumCardTitle = styled.h3`
  padding: 1rem;
  text-align: center;
`;

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