import styled from 'styled-components'
import T from 'theme'

export const Wrapper = styled.div`
  display: flex;
  min-height: 14rem;
  position: relative;
`

export const ContainerTooltip = styled.div`
  background: ${T.colors.backgroundCard};
  padding: ${T.spacings.xxs} ${T.spacings.xs};
  border-radius: ${T.borderRadius.sm};
  box-shadow: 0 4px 20px -2px #0b22663d;
`

export const ContentTotalYield = styled.div`
  display: flex;
  position: absolute;
  bottom: 33px;
  right: 14px;
`

export const TooltipItem = styled.li`
  color: ${T.colors.textPrimary};
  text-shadow: 0 0 3px ${T.colors.backgroundPage};

  &:first-child {
    text-align: center;
  }
`
