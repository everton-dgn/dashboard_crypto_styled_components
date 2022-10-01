import styled from 'styled-components'
import T from 'theme'

export const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  height: fit-content;
  width: 100%;
`

export const WrapperButton = styled.div`
  position: absolute;
  left: ${T.spacings.sm};

  button:focus {
    border: 2px solid ${T.colors.white};
  }
`
