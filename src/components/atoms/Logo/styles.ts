import styled, { css } from 'styled-components'
import T from 'theme'
import { ReactComponent as Logotipo } from 'assets/images/logo.svg'
import { Sizes } from './types'

const sizes = {
  small: css`
    width: 129px;
    height: 40px;
  `,
  medium: css`
    width: 196px;
    height: 60px;
  `
}

export const Logo = styled(Logotipo)<{ size: Sizes }>`
  ${({ size }) => sizes[size]}

  path:nth-child(11) {
    fill: ${T.colors.logo};
  }
`
