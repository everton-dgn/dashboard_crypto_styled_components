import styled, { css } from 'styled-components'
import T from 'theme'
import { Link } from 'react-router-dom'

export const NavList = styled.nav`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: ${T.spacings.sm};
  width: 100%;
  padding: ${T.grid.paddingDesktop} ${T.spacings.sm};
`

export const Item = styled.li`
  display: flex;
  width: 100%;
`

export const NavLink = styled(Link)<{ active: 'true' | 'false' }>`
  display: grid;
  grid-template-columns: max-content max-content;
  column-gap: ${T.spacings.xs};
  align-items: center;
  width: 100%;
  padding: ${T.spacings.xs} ${T.spacings.xm};
  border-radius: ${T.borderRadius.md};

  &:hover,
  &:focus {
    box-shadow: 0 0 0 1px ${T.colors.focus};
  }

  svg {
    fill: ${T.colors.grey};
  }

  ${({ active }) =>
    active === 'true' &&
    css`
      background: ${T.colors.backgroundHighlight};

      span {
        color: ${T.colors.white};
        text-shadow: 0 1px 14px ${T.colors.lightBlue};
      }

      svg {
        fill: ${T.colors.white};
      }
    `}
`