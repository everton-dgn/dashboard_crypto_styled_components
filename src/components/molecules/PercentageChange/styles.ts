import styled from 'styled-components'
import T from 'theme'

export const Container = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  align-items: center;
  column-gap: ${T.spacings.xxs};
`
