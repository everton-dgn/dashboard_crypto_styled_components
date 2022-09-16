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
      transform: translate3d(0%, 0, 0);
    }
    100% {
      transform: translate3d(-100%, 0, 0);
    }
  `
}
