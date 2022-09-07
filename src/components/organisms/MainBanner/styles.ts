import styled from 'styled-components'
import T from 'theme'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 26.2rem;
  border-radius: ${T.borderRadius.lg};
  box-shadow: 0 4px 25px -2px #0b226619;
  padding: ${T.grid.paddingDesktop};
  background: ${T.colors.backgroundBanner};
  overflow: hidden;
`

export const ImageNft = styled.img`
  display: flex;
  width: 41.2rem;
  height: 26.2rem;
  position: absolute;
  top: 0;
  right: 0;
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  row-gap: ${T.grid.gutterDesktop};
  width: 100%;
  height: 100%;
  max-width: 50%;
  z-index: ${T.layerOrder.base};
`

export const WrapperText = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: ${T.spacings.md};
`

export const WrapperSubtitle = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  gap: ${T.grid.gutterDesktop};
  width: 100%;
`
