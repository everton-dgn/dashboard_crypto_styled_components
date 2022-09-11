import styled, { css } from 'styled-components'
import T from 'theme'

export const Container = styled.div<{ hasNewsNotifications?: boolean }>`
  display: grid;
  place-content: center;
  position: relative;

  ${({ hasNewsNotifications }) =>
    hasNewsNotifications &&
    css`
      &:before {
        content: '';
        display: block;
        position: absolute;
        width: 8px;
        height: 8px;
        background-image: ${T.colors.backgroundHighlight};
        border-radius: ${T.borderRadius.xl};
        top: 0;
        right: 0;
      }
    `}
`
