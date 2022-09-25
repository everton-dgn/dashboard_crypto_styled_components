import styled from 'styled-components'
import T from 'theme'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  min-height: 100vh;
  height: 100vh;
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
