import styled from 'styled-components'
import T from 'theme'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  row-gap: ${T.spacings.xm};
  position: relative;
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
  height: 31px;
  justify-content: center;
  margin: -18px auto 0 auto;
  z-index: ${T.layerOrder.base};
`

export const WrapperViewMore = styled.span`
  position: absolute;
  background: ${T.colors.blur};
  filter: blur(21px);
  left: -30px;
  bottom: -30px;
  width: calc(100% + 60px);
  height: 100px;
`
