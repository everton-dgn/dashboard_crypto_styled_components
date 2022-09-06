import styled from 'styled-components'
import T from 'theme'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Input = styled.input<{ error?: string }>`
  display: flex;
  width: 100%;
  font-size: ${T.fonts.sizes.text2};
  font-weight: ${T.fonts.weights.regular};
  color: ${({ error }) => (error ? T.colors.red : T.colors.darkGrey)};
  height: 39px;
  border-radius: ${T.borderRadius.sm};
  padding: 0 14px;
  border: 1px solid ${({ error }) => (error ? T.colors.red : T.colors.darkGrey)};
  transition: 0.1s linear;

  &::placeholder {
    color: ${T.colors.grey};
  }

  &:focus,
  &:active {
    border: 1px solid
      ${({ error }) => (error ? T.colors.red : T.colors.darkGrey)};
  }
`
