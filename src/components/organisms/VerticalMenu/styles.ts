import styled from 'styled-components'
import T from 'theme'

export const Container = styled.aside<{ isOpenMenu: boolean }>`
  display: grid;
  grid-template-columns: 100%;
  width: 100%;
  max-width: 28rem;
  border-radius: 0;
  box-shadow: 0 4px 15px -4px ${T.colors.shadow};
  background: ${T.colors.backgroundCard};
  padding: 0 0 ${T.grid.paddingDesktop};
  height: calc(100vh - 60px);
  overflow-y: auto;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: ${T.layerOrder.sidebar};
  animation: ${({ isOpenMenu }) =>
      isOpenMenu ? T.animations.openSideBar : T.animations.closeSideBar}
    0.3s ease-in-out forwards;

  ${T.breakpoints.desktop} {
    display: grid;
    position: sticky;
    border-radius: ${T.borderRadius.lg};
    padding: ${T.grid.paddingDesktop} 0;
    transform: inherit;
    top: 0;
    bottom: inherit;
    animation: none;
  }
`

export const Content = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 0;

  ${T.breakpoints.desktop} {
    & > svg {
      padding-left: ${T.grid.paddingDesktop};
    }
  }
`

export const WrapperHelp = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  flex-grow: 1;
  margin-bottom: ${T.spacings.lg};

  ${T.breakpoints.desktop} {
    margin-bottom: 20px;
  }
`

export const WrapperTextHelp = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  row-gap: ${T.spacings.xs};
  padding: 0 ${T.grid.paddingDesktop};
`

export const ImageBegin = styled.img`
  display: flex;
  width: 100%;
  height: auto;
  max-width: 232px;
  margin: 0 auto;
`

export const WrapperTextFooter = styled(WrapperTextHelp)`
  margin-top: auto;
`

export const WrapperSwitch = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${T.spacings.xm};

  p {
    margin-left: ${T.spacings.sm};
  }
`
