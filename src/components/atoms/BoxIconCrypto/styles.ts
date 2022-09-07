import styled from 'styled-components'
import T from 'theme'

export const Container = styled.div`
  display: grid;
  place-content: center;
  width: 30px;
  height: 30px;

  svg {
    filter: drop-shadow(0 0 3px white);
  }

  path {
    fill: ${T.colors.logo};
  }
`
