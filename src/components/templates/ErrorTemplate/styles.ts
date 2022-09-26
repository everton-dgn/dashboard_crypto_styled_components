import styled from 'styled-components'
import T from 'theme'
import Div100vh from 'react-div-100vh'

export const CustomDiv100vh = styled(Div100vh)`
  width: 100%;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  height: 100vh;
  min-height: 520px;
  overflow-y: auto;
  padding: ${T.grid.paddingPhone};
  justify-items: center;

  ${T.breakpoints.tablet} {
    padding: ${T.grid.paddingTablet};
  }

  ${T.breakpoints.desktop} {
    padding: ${T.grid.paddingDesktop};
  }
`
