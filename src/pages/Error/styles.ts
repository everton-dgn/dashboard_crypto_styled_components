import styled from 'styled-components'
import T from 'theme'
import { ReactComponent as Error404 } from 'assets/images/404ErrorMessage.svg'
import { ReactComponent as NotFoundRobot } from 'assets/images/notFoundRobot.svg'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  border-radius: ${T.borderRadius.lg};
  max-width: 167.5rem;
  width: 100%;
  height: 100%;
  background: ${T.colors.backgroundCard};
  overflow: hidden;
  padding-top: ${T.grid.paddingPhone};

  ${T.breakpoints.tablet} {
    overflow: visible;
    padding-top: ${T.grid.paddingTablet};
  }

  ${T.breakpoints.desktop} {
    padding-top: ${T.grid.paddingDesktop};
  }
`

export const WrapperContent = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  justify-items: center;
  row-gap: 54px;
  margin-bottom: 50px;
  padding: 0 ${T.grid.paddingPhone};
  z-index: ${T.layerOrder.base};

  ${T.breakpoints.tablet} {
    margin-bottom: -8%;
  }
`

export const WrapperButton = styled.div`
  display: flex;
  width: 100%;
  max-width: 288px;
`

export const ImageError404 = styled(Error404)`
  max-width: 397px;
  width: 100%;
  height: auto;
`

export const ImageNotFoundRobot = styled(NotFoundRobot)`
  max-width: 1022px;
  min-width: 500px;
  width: 100%;
  height: auto;
`
