import { keyframes } from 'styled-components'

export const animations = {
  openSideBar: keyframes`
    0% {
      transform: translate3d(-100%, 0, 0);
      max-width: 28rem;
    }
    60% {
      transform: translate3d(0, 0, 0);
      max-width: 30rem;
    }
    100% {
      transform: translate3d(0, 0, 0);
      max-width: 28rem;
    }
  `,
  closeSideBar: keyframes`
    0% {
      transform: translate3d(0, 0, 0);
    }
    40% {
      transform: translate3d(0, 0, 0);
      max-width: 31rem;
    }
    100% {
      transform: translate3d(-100%, 0, 0);
      max-width: 28rem;
    }
  `,
  showOptions: keyframes`
    0% {
      opacity: 0.6;
      transform: scale(0) translateX(10px);
    }
    100% {
      opacity: 1;
      transform: scale(1) translateX(10px);
    }
  `,
  hiddenOptions: keyframes`
    0% {
      opacity: 1;
      transform: scale(1) translateX(10px);
    }
    100% {
      opacity: 0.6;
      transform: scale(0) translateX(10px);
    }
  `,
  rotate: keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  `
}
