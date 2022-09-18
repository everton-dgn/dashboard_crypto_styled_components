import styled, { css } from 'styled-components'
import T from 'theme'

export const Container = styled.div<{ size?: number }>`
  ${({ size }) => css`
    display: flex;
    position: relative;
    width: ${size || 64}px;
    min-width: ${size || 64}px;
    height: ${size || 64}px;
    min-height: ${size || 64}px;
    justify-content: center;
    align-items: center;

    & div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: ${size || 64}px;
      min-width: ${size || 64}px;
      height: ${size || 64}px;
      min-height: ${size || 64}px;
      border-width: 2px;
      border-style: solid;
      border-color: ${T.colors.primary} transparent transparent transparent;
      border-radius: 50%;
      animation: ${T.animations.rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1)
        infinite;
    }
  `}

  & div:nth-child(1) {
    animation-delay: -0.45s;
  }

  & div:nth-child(2) {
    animation-delay: -0.3s;
  }

  & div:nth-child(3) {
    animation-delay: -0.15s;
  }
`

export const Circle = styled.div``
