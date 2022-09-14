import { useCallback, useState } from 'react'
import T from 'theme'
import * as S from './styles'
import * as C from 'components'
import { MenuListProps } from './types'

const MenuList = ({ dataListMenu, onOpenMenu }: MenuListProps) => {
  const [activeItem, setActiveItem] = useState<number | null>(0)

  const handleSetActiveItem = useCallback(
    (index: number) => {
      if (index !== activeItem) setActiveItem(index)
    },
    [activeItem]
  )

  return (
    <S.NavList>
      {dataListMenu.map(({ text, icon, route }, i) => (
        <S.Item key={text}>
          <S.NavLink
            to={route}
            active={`${activeItem === i}`}
            onClick={() => {
              handleSetActiveItem(i)
              onOpenMenu()
            }}
          >
            {icon}
            <C.Typography
              text={text}
              type="text3"
              color={T.colors.textPrimary}
              weight={400}
              as="span"
            />
          </S.NavLink>
        </S.Item>
      ))}
    </S.NavList>
  )
}

export default MenuList
