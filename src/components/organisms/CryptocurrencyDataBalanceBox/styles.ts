import styled from 'styled-components'
import T from 'theme'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: max-content max-content max-content max-content max-content;
  justify-content: space-between;
  align-items: center;
  gap: ${T.grid.gutterDesktop};
`

export const WrapperCrypto = styled.div`
  display: flex;
  align-items: center;

  div {
    margin-right: ${T.spacings.md};
  }
`

export const ContentValues = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  column-gap: ${T.spacings.xs};
  align-items: center;
`

export const WrapperLastWeekSChart = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  column-gap: ${T.spacings.xm};
  align-items: center;
`
