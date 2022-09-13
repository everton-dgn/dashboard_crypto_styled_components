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

  span:not(:last-child) {
    display: block;
    width: 150px;
    text-align: left;
    padding: 0;
    margin: 0;
    font-weight: 500;
    color: #798eae;
    font-size: 1.2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  ${T.breakpoints.custom(400)} {
    span:not(:last-child) {
      width: 200px;
    }
  }

  ${T.breakpoints.custom(785)} {
    span:not(:last-child) {
      width: 150px;
    }
  }
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
  align-self: flex-start;
  margin-left: auto;
  transform: translateX(6px);

  ${T.breakpoints.tablet} {
    transform: translateX(10px);
  }
`

export const Image = styled.img`
  display: block;
  width: 13px;
  height: 13px;
`
