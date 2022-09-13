import styled, { css } from 'styled-components'
import T from 'theme'

export const Container = styled.div<{ noMove?: boolean }>`
  display: grid;
  place-content: center;
  width: 30px;
  height: 30px;

  &:hover svg {
    ${({ noMove }) =>
      !noMove &&
      css`
        transform: translateY(-2px);
      `};
    filter: drop-shadow(0 0 0 ${T.colors.white});
  }

  svg {
    filter: drop-shadow(0 0 3px ${T.colors.white});
    transition: all 0.2s linear;
  }

  path {
    fill: ${T.colors.logo};
  }
`
