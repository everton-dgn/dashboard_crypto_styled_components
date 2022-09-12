import styled from 'styled-components'
import T from 'theme'

export const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr calc(31rem + 1vw);
  grid-auto-rows: max-content;
  column-gap: ${T.spacings.lg};
  width: 100%;
`

export const MainLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  gap: ${T.grid.gutterDesktop};
  width: 100%;
`

export const WrapperCharts = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${T.grid.gutterDesktop};

  ${T.breakpoints.custom(1413)} {
    grid-template-columns: calc(50% - 15px) 1fr;
    gap: ${T.grid.gutterDesktop};
  }

  section {
    min-height: 25.1rem;
  }
`

export const SecondaryLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  gap: ${T.grid.gutterDesktop};
  width: 100%;
`
