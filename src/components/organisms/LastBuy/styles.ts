import styled from 'styled-components'
import T from 'theme'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-auto-flow: row;
  gap: ${T.grid.gutterPhone};
  justify-content: space-between;
  align-items: center;

  span {
    display: none;
  }

  ${T.breakpoints.tablet} {
    gap: ${T.grid.gutterTablet};
  }

  ${T.breakpoints.tablet} {
    row-gap: ${T.grid.gutterTablet};
    column-gap: ${T.grid.gutterDesktop};
  }

  ${T.breakpoints.custom(1413)} {
    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
    column-gap: ${T.spacings.xxs};

    span {
      display: flex;
    }

    span,
    div,
    button {
      justify-self: center;
    }
  }
`

export const Crypto = styled.div`
  display: grid;
  grid-template-columns: 30px 1fr;
  column-gap: ${T.spacings.xs};
  align-items: center;
`

export const InfoCrypto = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 2px;
`
