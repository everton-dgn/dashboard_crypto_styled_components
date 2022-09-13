import styled from 'styled-components'
import T from 'theme'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: fit-content;
  border-radius: ${T.borderRadius.lg};
  box-shadow: 0 4px 15px -4px ${T.colors.shadow};
  padding: ${T.grid.paddingDesktop} ${T.grid.paddingPhone};
  background: ${T.colors.backgroundBanner};
  overflow: hidden;

  ${T.breakpoints.tablet} {
    padding: ${T.grid.paddingDesktop} ${T.grid.paddingTablet};
  }

  ${T.breakpoints.desktop} {
    padding: ${T.grid.paddingDesktop};
  }
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  row-gap: ${T.grid.gutterPhone};
  width: 100%;
  height: 100%;
  max-width: 100%;
  z-index: ${T.layerOrder.base};
  justify-items: center;

  ${T.breakpoints.tablet} {
    row-gap: ${T.grid.gutterTablet};
  }

  ${T.breakpoints.desktop} {
    row-gap: ${T.grid.gutterDesktop};
  }

  ${T.breakpoints.custom(500)} {
    justify-items: left;
  }

  ${T.breakpoints.custom(1413)} {
    max-width: 50%;
  }
`

export const WrapperText = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: ${T.spacings.md};

  h1 {
    text-shadow: 0 1px 7px #001435;
    text-align: center;
  }

  ${T.breakpoints.custom(500)} {
    h1 {
      text-align: left;
    }
  }
`

export const WrapperSubtitle = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  gap: ${T.grid.gutterPhone};
  width: 100%;
  justify-content: center;

  h2 {
    text-shadow: 0 1px 7px #001435;
  }

  ${T.breakpoints.tablet} {
    gap: ${T.grid.gutterTablet};
  }

  ${T.breakpoints.desktop} {
    gap: ${T.grid.gutterDesktop};
  }

  ${T.breakpoints.custom(500)} {
    width: fit-content;
  }
`

export const ImageNft = styled.img<{ opacity: number }>`
  opacity: ${({ opacity }) => opacity};
  display: flex;
  width: auto;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
`
