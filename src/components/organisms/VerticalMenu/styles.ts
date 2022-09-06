import styled from 'styled-components'
import T from 'theme'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: ${T.borderRadius.lg};
  box-shadow: 0 4px 25px -2px #0b226619;
  background: ${T.colors.backgroundCard};
  padding: ${T.grid.paddingDesktop} 0;
`

export const WrapperTextHelp = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  row-gap: ${T.spacings.xs};
  padding: 0 ${T.grid.paddingDesktop};
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
