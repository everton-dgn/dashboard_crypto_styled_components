import styled from 'styled-components'
import T from 'theme'

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  min-height: 2.4rem;
  height: fit-content;

  button {
    transform: translateX(10px);
  }
`

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: ${T.borderRadius.lg};
  box-shadow: 0 4px 25px -2px #0b226619;
  background: ${T.colors.backgroundCard};
  padding: ${T.grid.paddingDesktop};
`
