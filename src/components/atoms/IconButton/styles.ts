import styled, { css } from 'styled-components'
import T from 'theme'

export const Button = styled.button<{ color?: string; size?: string }>`
  display: grid;
  place-content: center;
  border-radius: ${T.borderRadius.sm};
  background-color: transparent;
  border: 1px solid transparent;

  &:focus {
    border: 1px solid ${T.colors.focus};
  }

  ${({ color, size }) => css`
    width: ${size || '24px'};
    height: ${size || '24px'};

    svg,
    path {
      fill: ${color || T.colors.textPrimary};
    }
  `}
`
