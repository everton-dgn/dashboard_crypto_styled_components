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
  border-bottom: 1px solid #ffffffa8;
  justify-content: space-between;
  z-index: ${T.layerOrder.sidebar};

  ${T.breakpoints.tablet} {
    padding: 0 ${T.grid.paddingDesktop};
  }
`
