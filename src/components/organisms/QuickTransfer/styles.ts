import styled, { css } from 'styled-components'
import T from 'theme'

export const Wrapper = styled.div<{ paddingBottom: boolean }>`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  row-gap: ${T.spacings.xm};
  position: relative;
  ${({ paddingBottom }) =>
    paddingBottom &&
    css`
      padding-bottom: ${T.spacings.lg};
    `}
`

export const WrapperUser = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  grid-auto-rows: max-content;
  column-gap: ${T.spacings.sm};
  align-items: center;
`

export const ContentInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  row-gap: ${T.spacings.xxs};
`

export const WrapperInfoCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    width: 38px;
    height: 11px;
    margin-right: ${T.spacings.xxs};
  }

  path {
    fill: ${T.colors.grey};
  }
`

export const WrapperButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: -18px auto 0 auto;
  z-index: ${T.layerOrder.base};
  position: absolute;
  left: 0;
  bottom: 0;
  overflow: hidden;
  height: 110px;
  border-radius: 0 0 ${T.borderRadius.lg} ${T.borderRadius.lg};
  align-items: end;
  background: ${T.colors.blur};

  & > *:first-child {
    z-index: ${T.layerOrder.base};
    margin-bottom: ${T.grid.paddingPhone};

    ${T.breakpoints.tablet} {
      margin-bottom: ${T.grid.paddingTablet};
    }

    ${T.breakpoints.desktop} {
      margin-bottom: ${T.grid.paddingDesktop};
    }
  }
`

export const WrapperViewMore = styled.span`
  position: absolute;
  filter: blur(21px);
  left: 0;
  bottom: 2px;
  width: 100%;
  height: 75px;
  background: ${T.colors.blur};
`
