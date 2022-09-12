import styled from 'styled-components'
import T from 'theme'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-auto-flow: row;
  column-gap: ${T.spacings.lg};
  row-gap: ${T.spacings.md};
  justify-content: space-between;
  align-items: center;
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
