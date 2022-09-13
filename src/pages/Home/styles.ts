import styled from 'styled-components'
import T from 'theme'

export const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  gap: ${T.grid.gutterPhone};
  width: 100%;

  ${T.breakpoints.tablet} {
    gap: ${T.grid.gutterTablet};
  }

  ${T.breakpoints.desktop} {
    gap: ${T.grid.gutterDesktop};
  }

  ${T.breakpoints.custom(785)} {
    grid-template-columns: 1fr 35rem;
  }
`

export const MainLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  gap: ${T.grid.gutterPhone};
  width: 100%;

  ${T.breakpoints.tablet} {
    gap: ${T.grid.gutterTablet};
  }

  ${T.breakpoints.desktop} {
    gap: ${T.grid.gutterDesktop};
  }
`

export const WrapperCharts = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${T.grid.gutterPhone};

  section:first-child {
    min-height: 25.1rem;
  }

  ${T.breakpoints.tablet} {
    gap: ${T.grid.gutterTablet};
  }

  ${T.breakpoints.desktop} {
    gap: ${T.grid.gutterDesktop};
  }

  ${T.breakpoints.custom(1460)} {
    grid-template-columns: calc(50% - 15px) 1fr;
    gap: ${T.grid.gutterDesktop};
  }
`

export const SecondaryLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  gap: ${T.grid.gutterPhone};
  width: 100%;

  ${T.breakpoints.tablet} {
    gap: ${T.grid.gutterTablet};
  }

  ${T.breakpoints.desktop} {
    gap: ${T.grid.gutterDesktop};
  }
`
