import styled from 'styled-components'
import T from 'theme'

export const WrapperChart = styled.div`
  display: grid;
  grid-template-columns: max-content max-content max-content;
  gap: ${T.grid.gutterDesktop};
  justify-content: space-between;
`

export const WrapperBoxCrypto = styled.div`
  display: grid;
  grid-template-columns: max-content;
  gap: ${T.spacings.xs};
  justify-content: center;
`

export const WrapperText = styled.div`
  display: grid;
  grid-template-columns: max-content;
  gap: 2px;
  justify-content: center;
`
