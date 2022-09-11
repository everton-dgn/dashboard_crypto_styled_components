import styled, { css } from 'styled-components'
import T from 'theme'
import { Sizes } from './types'

export const Container = styled.div<{ size?: Sizes }>`
  display: grid;
  grid-template-columns: max-content max-content;
  align-items: center;
  column-gap: ${T.spacings.xxs};

  ${({ size }) =>
    size === 'small' &&
    css`
      svg {
        width: 8px;
        height: 4px;
      }
    `}
`
