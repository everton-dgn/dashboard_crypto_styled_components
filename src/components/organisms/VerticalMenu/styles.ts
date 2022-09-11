import styled from 'styled-components'
import T from 'theme'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: ${T.borderRadius.lg};
  box-shadow: 0 4px 15px -4px ${T.colors.shadow};
  background: ${T.colors.backgroundCard};
  padding: ${T.grid.paddingDesktop} 0;
  height: calc(100vh - 60px);
  overflow-y: auto;
`

export const WrapperHelp = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  flex-grow: 1;
  margin-bottom: 30px;
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
