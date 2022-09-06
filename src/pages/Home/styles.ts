import styled from 'styled-components'
import T from 'theme'

export const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr 35rem;
  column-gap: ${T.spacings.lg};
  width: 100%;
`
