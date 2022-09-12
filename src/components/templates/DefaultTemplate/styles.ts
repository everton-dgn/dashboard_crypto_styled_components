import styled from 'styled-components'
import T from 'theme'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: ${T.grid.gutterDesktop};
  width: 100%;
  min-height: 100vh;
  padding: ${T.grid.paddingDesktop};
  height: 100vh;
  overflow-y: auto;

  aside {
    display: none;
  }

  ${T.breakpoints.desktop} {
    grid-template-columns: 23.2rem 1fr;

    aside {
      display: grid;
    }
  }
`
