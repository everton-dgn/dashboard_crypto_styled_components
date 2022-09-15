import styled from 'styled-components'
import T from 'theme'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: ${T.grid.gutterPhone};
  width: 100%;
  min-height: 100vh;
  padding: 80px ${T.grid.paddingPhone} ${T.grid.paddingTablet}
    ${T.grid.paddingPhone};
  height: 100vh;
  overflow-y: auto;
  justify-content: center;

  ${T.breakpoints.tablet} {
    padding: 80px ${T.grid.paddingTablet} ${T.grid.paddingTablet}
      ${T.grid.paddingTablet};
    column-gap: ${T.grid.gutterTablet};
  }

  ${T.breakpoints.desktop} {
    grid-template-columns: 28rem minmax(min-content, 129.4rem);
    padding: ${T.grid.paddingDesktop};
    column-gap: ${T.grid.gutterDesktop};
  }
`
