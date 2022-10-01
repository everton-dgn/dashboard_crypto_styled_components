import styled, { css } from 'styled-components'
import T from 'theme'

export const ButtonFlag = styled.button`
  width: 32px;
  height: 32px;
  overflow: hidden;
  border-radius: ${T.borderRadius.xl};
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  &:focus {
    box-shadow: 0 0 0 2px ${T.colors.focus};
  }
`

export const ImageFlag = styled.img<{ isSelected: boolean }>`
  width: 100%;
  height: 100%;
  ${({ isSelected }) =>
    isSelected &&
    css`
      filter: grayscale(1);
    `}
`
