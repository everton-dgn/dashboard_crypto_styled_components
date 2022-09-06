import styled from 'styled-components'
import T from 'theme'
import { ReactComponent as Logotipo } from 'assets/images/logo.svg'

export const Logo = styled(Logotipo)`
  width: 151px;
  height: 46px;
  margin-left: ${T.grid.gutterDesktop};

  path:nth-child(11) {
    fill: ${T.colors.logo};
  }
`
