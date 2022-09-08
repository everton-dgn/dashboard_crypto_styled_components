import styled from 'styled-components'
import T from 'theme'

export const Percent = styled.div`
  position: relative;
  width: 82px;
  height: 82px;
  border-radius: 50%;
  z-index: ${T.layerOrder.overlay};

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 2px;
    left: 2px;
    width: 78px;
    height: 78px;
    border-radius: 50%;
    background: ${T.colors.gradientOverlay};
    z-index: 1100;
  }
`

export const WrapperCrypto = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${T.borderRadius.xl};
`

export const Svg = styled.svg`
  position: relative;
  width: 82px;
  height: 82px;
  z-index: ${T.layerOrder.base};
  rotate: -88deg;
`

export const CircleBase = styled.circle`
  width: 100%;
  height: 100%;
  fill: none;
  stroke: ${T.colors.greyDynamic};
  stroke-width: 4;
  stroke-linecap: round;
  transform: translate(5px, 5px);
`

export const percentCircleWithColor = styled(CircleBase)<{
  colorFillPercentage: number
}>`
  stroke-dasharray: 244;
  stroke-dashoffset: ${({ colorFillPercentage }) => colorFillPercentage};
  stroke: ${T.colors.primary};
`
