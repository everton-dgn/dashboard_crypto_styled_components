import styled from 'styled-components'
import T from 'theme'

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: ${T.borderRadius.sm};
  background-color: ${T.colors.backgroundCard};
  border: 1px solid transparent;

  &:focus {
    border: 1px solid ${T.colors.focus};
  }
`
