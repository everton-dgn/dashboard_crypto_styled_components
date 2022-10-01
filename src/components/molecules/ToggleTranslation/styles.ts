import styled from 'styled-components'
import T from 'theme'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${T.grid.gutterPhone};
  width: fit-content;
  height: fit-content;
  padding-bottom: ${T.grid.paddingPhone};
`
