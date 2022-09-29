import { keyframes } from 'styled-components'
import { breakpoints } from './breakpoints'

export const animations = {
  incrementCounter: (percentage: number) => keyframes`
    0% {
      stroke-dashoffset: 244;
    }
    100% {
      stroke-dashoffset: ${percentage};
    }
  `,
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
      transform: scale(0);

      ${breakpoints.tablet} {
        transform: scale(0);
      }
    }
    100% {
      opacity: 1;
      transform: scale(1);

      ${breakpoints.tablet} {
        transform: scale(1);
      }
    }
  `,
  hiddenOptions: keyframes`
    0% {
      opacity: 1;
      transform: scale(1);

      ${breakpoints.tablet} {
        transform: scale(1);
      }
    }
    100% {
      opacity: 0.6;
      transform: scale(0);

      ${breakpoints.tablet} {
        transform: scale(0);
      }
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
