import styled from 'styled-components'
import T from 'theme'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  row-gap: ${T.spacings.xm};
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
