import styled from 'styled-components'
import T from 'theme'
import { Align, Weight, Typography } from './types'

export const Text = styled.p<{
  align?: Align
  weight?: Weight
  color?: string
  type: Typography
}>`
  display: flex;
  width: 100%;
  text-align: ${({ align }) => align || 'left'};
  justify-content: ${({ align }) => align};
  padding: 0;
  margin: 0;
  font-weight: ${({ weight }) => weight || T.fonts.weights.regular};
  color: ${({ color }) => color || T.colors.textPrimary};
  font-size: ${({ type }) => T.fonts.sizes[type]};
`
