import styled from 'styled-components'
import T from 'theme'

export const TopBar = styled.div`
  display: flex;
  width: 100%;
  background: ${T.colors.backgroundCard};
  position: absolute;
  top: 0;
  left: 0;
  height: 6rem;
  align-items: center;
  padding: 0 ${T.grid.paddingPhone};
  border-bottom: 0.5px solid ${T.colors.white};
  justify-content: space-between;
  z-index: ${T.layerOrder.topBar};
  box-shadow: 0 4px 15px 0 ${T.colors.shadow};

  ${T.breakpoints.tablet} {
    padding: 0 ${T.grid.paddingDesktop};
  }
`
