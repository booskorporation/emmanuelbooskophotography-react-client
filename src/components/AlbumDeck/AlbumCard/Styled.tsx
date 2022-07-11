import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface IStyledAlbumCardProps {
  thumbnail?: string;
}

const StyledAlbumCardTitle = styled.h3`
  padding: var(--step-0);
  text-align: center;
  color: var(--clr-primary);
`;

const cssAlbumCardWithThumbnail = css<IStyledAlbumCardProps>`
  &:hover {
    background-image: url(${(props) => props.thumbnail});
    background-repeat: no-repeat;
  }

  &:hover ${StyledAlbumCardTitle} {
    color: var(--white);
    background-color: var(--clr-primary-opacity);
  }
`;

const StyledAlbumCard = styled(Link)<IStyledAlbumCardProps>`
  background-color: var(--fg);
  list-style: none;
  cursor: pointer;
  width: 400px;
  height: 200px;
  text-decoration: none;
  border: 2px solid var(--clr-secondary);

  ${(props) => props.thumbnail && cssAlbumCardWithThumbnail}
`;

export { StyledAlbumCardTitle, StyledAlbumCard };
