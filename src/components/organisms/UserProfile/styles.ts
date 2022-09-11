import styled from 'styled-components'
import T from 'theme'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  grid-auto-rows: max-content;
  column-gap: ${T.spacings.sm};
  align-items: center;
  justify-content: left;
`

export const WrapperText = styled.div`
  display: grid;
  grid-template-columns: max-content;
  grid-auto-rows: max-content;
`

export const WrapperPremium = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  grid-auto-rows: max-content;
  column-gap: ${T.spacings.xxs};
  align-items: center;
  margin-top: 3px;
`

export const WrapperIcons = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  grid-auto-rows: max-content;
  column-gap: ${T.spacings.sm};
  align-items: center;
  transform: translateX(10px);
  align-self: flex-start;
  margin-left: auto;
`

export const Image = styled.img`
  display: block;
  width: 13px;
  height: 13px;
`
