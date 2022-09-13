import styled from 'styled-components'
import T from 'theme'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: ${T.grid.gutterPhone};
  width: 100%;
  max-width: 167rem;
  min-height: 100vh;
  padding: ${T.grid.paddingTablet} ${T.grid.paddingPhone};
  height: 100vh;
  overflow-y: auto;

  aside {
    display: none;
  }

  ${T.breakpoints.tablet} {
    padding: ${T.grid.paddingTablet};
    column-gap: ${T.grid.gutterTablet};
  }

  ${T.breakpoints.desktop} {
    grid-template-columns: 28rem 1fr;
    padding: ${T.grid.paddingDesktop};
    column-gap: ${T.grid.gutterDesktop};

    aside {
      display: grid;
    }
  }
`
