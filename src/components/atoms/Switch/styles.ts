import styled from 'styled-components'
import T from 'theme'

export const Container = styled.div`
  display: flex;
`

export const Input = styled.input`
  display: none;

  & + label {
    width: 26px;
    height: 13px;
    background-color: ${T.colors.grey};
    display: block;
    position: relative;
    border-radius: ${T.borderRadius.lg};
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    box-shadow: inset 1px -2px 2px #00000012, inset 1px 2px 3px #0000001a;
  }

  & + label:before {
    content: '';
    position: absolute;
    width: 11px;
    height: 11px;
    background-color: ${T.colors.greyDynamic};
    display: block;
    border-radius: ${T.borderRadius.xl};
    right: unset;
    left: calc(100% - 25px);
    top: 1px;
    box-shadow: 0 0 2px #0000005c;
    transition: all 0.2s ease-in-out;
  }

  &:checked + label {
    background-color: ${T.colors.primary};
    box-shadow: inset 1px -2px 3px #00000012, inset 1px 2px 3px #0000001a;
  }

  &:checked + label:before {
    content: '';
    left: 14px;
    box-shadow: 0 0 3px #0000005c;
  }
`

export const Label = styled.label``

export const Button = styled.button`
  display: flex;
  width: 26px;
  height: 13px;
  background-color: transparent;
  border-radius: ${T.borderRadius.lg};
  position: absolute;

  &:focus {
    box-shadow: 0 0 0 2px ${T.colors.focus};
  }
`
