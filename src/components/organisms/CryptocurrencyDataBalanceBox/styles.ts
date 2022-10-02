import styled from 'styled-components'
import T from 'theme'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(115px, 1fr));
  grid-auto-flow: row;
  align-items: center;
  gap: ${T.spacings.md};
  white-space: nowrap;

  span {
    width: fit-content;
    word-wrap: initial;
  }

  ${T.breakpoints.custom(1444)} {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
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
