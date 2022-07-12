import styled, { css } from 'styled-components';

interface IProps {
  disabled?: boolean;
}

const cssDisabled = css`
  cursor: not-allowed;
  opacity: 0.5;
  background-color: #737373;

  &:hover {
    background-color: #737373;
  }
`;

const StyledButton = styled.button<IProps>`
  cursor: pointer;
  padding: 0.75rem 1.5rem;
  border-radius: 0.25rem;
  border-width: 0rem;
  box-shadow: 0.125rem 0.125rem 0.5rem gray;
  background-color: #2563eb;
  font-weight: bold;
  color: white;

  &:hover, :focus {
    background-color: #1e40af;
  }

  ${(props) => props.disabled && cssDisabled
}
`;

export { StyledButton };
