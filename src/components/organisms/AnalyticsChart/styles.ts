import styled from 'styled-components'
import T from 'theme'

export const WrapperChart = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: ${T.grid.gutterPhone};
  row-gap: ${T.spacings.xm};
  justify-items: left;

  ${T.breakpoints.custom(450)} {
    grid-template-columns: max-content max-content max-content;
    justify-content: space-between;
  }
`
