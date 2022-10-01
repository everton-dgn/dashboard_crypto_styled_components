import styled from 'styled-components'
import T from 'theme'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: fit-content;
  height: fit-content;
  z-index: ${T.layerOrder.options};
`

export const Menu = styled.div<{ startAnimation: boolean }>`
  display: grid;
  row-gap: 2px;
  position: absolute;
  top: 2px;
  right: 0;
  width: fit-content;
  min-width: 140px;
  height: fit-content;
  background: ${T.colors.backgroundCard};
  box-shadow: 0 2px 15px 4px ${T.colors.shadow};
  border-radius: ${T.borderRadius.lg};
  padding: ${T.spacings.sm};
  border: 0.5px solid ${T.colors.white};
  transform-origin: top right;
  animation: ${({ startAnimation }) =>
      startAnimation ? T.animations.showOptions : T.animations.hiddenOptions}
    0.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
`

export const Item = styled.button`
  display: flex;
  width: 100%;
  padding: 6px ${T.spacings.sm};
  cursor: pointer;
  border-radius: ${T.borderRadius.md};
  background: transparent;

  &:focus {
    box-shadow: 0 0 0 2px ${T.colors.focus};
  }

  &:hover {
    background: ${T.colors.backgroundHighlight};

    span {
      color: ${T.colors.white};
    }
  }
`
