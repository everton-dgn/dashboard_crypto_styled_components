import styled from 'styled-components'
import T from 'theme'
import { ReactComponent as IconLogo } from 'assets/icons/logoIcon.svg'
import * as C from 'components'

export const AddButton = styled(C.IconButton)`
  position: absolute;
  z-index: ${T.layerOrder.base};
  right: 10px;
  top: -7px;

  &:focus {
    border-color: ${T.colors.white};
  }

  &:hover + div,
  &:focus + div {
    transform: translate3d(0, 0, 0) rotate(2deg);
  }

  &:hover + div:before,
  &:focus + div:before {
    transform: translate3d(1px, -16px, 0) rotate(-5.98deg);
  }
`

export const Wrapper = styled.div`
  position: relative;
`

export const Content = styled.div`
  position: relative;
  display: flex;
  border-radius: 16px;
  margin-top: 16px;
  z-index: 0;
  transition: transform 0.2s ease-in-out;

  svg:nth-child(4) {
    width: 42px;
    height: 14px;
    bottom: 18px;
    right: 16px;
    position: absolute;
  }

  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: ${T.colors.grey};
    border-radius: 16px;
    transform: translate3d(1px, -16px, 0) rotate(-3.98deg);
    z-index: -2;
    transition: transform 0.2s ease-in-out;
  }

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: ${T.colors.grey};
    border-radius: 16px;
    z-index: -1;
    filter: drop-shadow(0 -1px 10px #00000042) drop-shadow(0 0 11px #00000066);
  }

  &:hover:before {
    transform: translate3d(1px, -16px, 0) rotate(-5.98deg);
  }

  &:hover {
    transform: translate3d(0, 0, 0) rotate(2deg);
  }
`

export const Logotipo = styled(IconLogo)`
  width: 32px;
  height: 34px;
  top: 14px;
  left: 16px;
  position: absolute;
`

export const ValueInTheWallet = styled.span`
  font-size: 29px;
  font-weight: ${T.fonts.weights.medium};
  color: ${T.colors.white};
  text-shadow: 0 1px 2px #0000004c;
  position: absolute;
  bottom: 58px;
  left: 16px;
`

export const Name = styled.span`
  font-size: ${T.fonts.sizes.text6};
  font-weight: ${T.fonts.weights.medium};
  color: ${T.colors.white};
  text-transform: uppercase;
  text-shadow: 0 1px 2px #0000004c;
  position: absolute;
  bottom: 18px;
  left: 16px;
`

export const ImageCredCard = styled.img.attrs({ fetchpriority: 'high' })`
  display: flex;
  width: 100%;
  border: 1px solid #ffffff7b;
  border-radius: 16px;
`
