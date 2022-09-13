import styled from 'styled-components'
import T from 'theme'

export const WrapperBoxCrypto = styled.div`
  display: grid;
  grid-template-columns: fit-content(100%) fit-content(100%);
  gap: ${T.spacings.md};
  justify-content: center;
  align-items: center;

  ${T.breakpoints.custom(350)} {
    grid-template-columns: max-content;
    gap: ${T.spacings.xs};
  }
`

export const WrapperText = styled.div`
  display: grid;
  grid-template-columns: max-content;
  order: 1;
  height: fit-content;

  h2,
  h3,
  p {
    justify-content: left;
  }

  ${T.breakpoints.custom(350)} {
    order: inherit;
    justify-content: center;
    height: inherit;

    h2,
    h3,
    p {
      justify-content: center;
    }
  }
`
