import styled from 'styled-components'
import T from 'theme'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Input = styled.input<{ paddingLeft?: string }>`
  display: flex;
  width: 100%;
  background-color: transparent;
  font-size: ${T.fonts.sizes.text3};
  font-weight: ${T.fonts.weights.regular};
  color: ${T.colors.white};
  height: 38px;
  border-radius: ${T.borderRadius.md};
  padding: 0 ${T.spacings.sm} 0
    ${({ paddingLeft }) => paddingLeft || T.spacings.sm};
  border: 1px solid ${T.colors.white};
  transition: 0.1s linear;

  &::placeholder {
    color: ${T.colors.white};
    font-weight: ${T.fonts.weights.light};
  }

  &:focus {
    box-shadow: 0 0 0 1px ${T.colors.white};
  }
`
