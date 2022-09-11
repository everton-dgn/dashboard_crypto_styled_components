import styled from 'styled-components'
import T from 'theme'

export const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr 35rem;
  column-gap: ${T.spacings.lg};
  height: calc(100vh - 60px);
  overflow-y: auto;
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
  grid-template-columns: calc(50% - 15px) 1fr;
  gap: ${T.grid.gutterDesktop};
  min-height: 25.1rem;
`

export const SecondaryLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  gap: ${T.grid.gutterDesktop};
  width: 100%;
`
