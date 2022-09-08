import styled from 'styled-components'
import T from 'theme'

export const Wrapper = styled.div`
  display: flex;
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
