import styled, { css } from 'styled-components'
import T from 'theme'

export const ButtonFlag = styled.button<{ isSelected: boolean }>`
  width: 28px;
  height: 28px;
  overflow: hidden;
  border-radius: ${T.borderRadius.xl};
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  &:focus {
    box-shadow: 0 0 0 2px ${T.colors.focus};
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      filter: grayscale(1);
    `}
`

export const ImageFlag = styled.svg`
  width: 100%;
  height: 100%;
`
