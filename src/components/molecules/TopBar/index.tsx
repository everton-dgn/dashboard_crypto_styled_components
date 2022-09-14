import { useRenderingByWindowSize } from 'hooks'
import { memo } from 'react'
import { ReactComponent as IconMenu } from 'assets/icons/menu.svg'
import * as C from 'components'
import * as S from './styles'
import { TopBarProps } from './types'

const TopBar = ({ onClick }: TopBarProps) => {
  const { windowSize } = useRenderingByWindowSize()

  return (
    <S.TopBar>
      <C.Logo size={windowSize.lg ? 'medium' : 'small'} />
      {!windowSize.lg && (
        <C.IconButton
          icon={<IconMenu />}
          ariaLabel="Menu"
          aria-hidden={windowSize.lg}
          size="32px"
          onClick={onClick}
        />
      )}
    </S.TopBar>
  )
}

export default memo(TopBar)
