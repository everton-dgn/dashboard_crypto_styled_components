import styled, { css } from 'styled-components'

const layout = css`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Grid = styled.div`
  ${layout};
  min-height: 100vh;
`

export const WrapperPage = styled.div`
  ${layout};
  align-items: center;
  height: 100%;
  flex-grow: 1;
`
