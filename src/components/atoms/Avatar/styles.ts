import styled, { css } from 'styled-components'
import T from 'theme'
import { Sizes } from './types'

const sizes = {
  medium: css`
    width: 40px;
    height: 40px;

    img {
      width: 38px;
      height: 38px;
    }
  `,
  large: css`
    width: 52px;
    height: 52px;

    img {
      width: 49px;
      height: 49px;
    }
  `
}

export const Wrapper = styled.div<{ size: Sizes }>`
  display: grid;
  place-content: center;
  width: 52px;
  height: 52px;
  background-color: ${T.colors.lightGrey};
  border-radius: ${T.borderRadius.xl};
  background-image: ${T.colors.backgroundHighlight};
  ${({ size }) => sizes[size]}
`

export const Image = styled.img<{ isSelected?: boolean }>`
  display: block;
  width: 49px;
  height: 49px;
  object-fit: cover;
  border-radius: ${T.borderRadius.xl};
`
