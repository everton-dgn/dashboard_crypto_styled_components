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
    width: 120px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  ${T.breakpoints.custom(364)} {
    span:not(:last-child) {
      width: 150px;
    }
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
  grid-template-columns: max-content;
  grid-auto-rows: max-content;
  column-gap: ${T.spacings.xxs};
  align-items: center;
  position: relative;
  bottom: -2px;
  left: -25px;

  span {
    display: none;
  }

  img {
    position: absolute;
  }

  ${T.breakpoints.tablet} {
    grid-template-columns: max-content max-content;
    bottom: inherit;
    left: inherit;

    span {
      display: flex;
    }

    img {
      position: relative;
    }
  }
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
