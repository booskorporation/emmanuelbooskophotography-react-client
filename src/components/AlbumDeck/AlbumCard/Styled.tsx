import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface IStyledAlbumCardProps {
  thumbnail?: string;
}

const StyledAlbumCardTitle = styled.h3`
  padding: 1rem;
  text-align: center;
`;

const cssAlbumCardWithThumbnail = css<IStyledAlbumCardProps>`
  &:hover {
    background-image: url(${(props) => props.thumbnail});
    background-repeat: no-repeat;
  }

  &:hover ${StyledAlbumCardTitle} {
    color: white;
    background: rgba(0, 0, 0, 0.7);
  }
`;

const StyledAlbumCard = styled(Link)<IStyledAlbumCardProps>`
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

  ${(props) => props.thumbnail && cssAlbumCardWithThumbnail}
`;

export { StyledAlbumCardTitle, StyledAlbumCard };
