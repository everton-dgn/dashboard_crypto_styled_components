import styled, { css } from 'styled-components'
import { SeparatorProps } from './types'
import T from 'theme'

export const Content = styled.span<SeparatorProps>`
  ${({ maxWidth, maxHeight }) => css`
    background-color: ${T.colors.grey};
    width: ${maxWidth ? '100%' : '0.1rem'};
    height: ${maxHeight ? '100%' : '0.1rem'};
    max-width: ${maxWidth || 'inherit'};
    max-height: ${maxHeight || 'inherit'};
  `};
`
