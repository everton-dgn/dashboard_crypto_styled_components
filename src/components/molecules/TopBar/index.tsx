import { memo } from 'react'
import { ReactComponent as IconMenu } from 'assets/icons/menu.svg'
import * as C from 'components'
import * as S from './styles'
import { TopBarProps } from './types'

const TopBar = ({ onClick }: TopBarProps) => (
  <S.TopBar>
    <C.IconButton
      icon={<IconMenu />}
      ariaLabel="Menu"
      size="32px"
      onClick={onClick}
    />
    <C.Logo size="small" />
  </S.TopBar>
)

export default memo(TopBar)
