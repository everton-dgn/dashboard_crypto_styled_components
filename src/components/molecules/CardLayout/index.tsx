import { useLazyLoad } from 'hooks'
import { CardLayoutProps } from './types'
import { ReactComponent as IconOptionsMenu } from 'assets/icons/optionsMenu.svg'
import * as S from './styles'
import * as C from 'components'

const CardLayout = ({ title, optionsMenu, children }: CardLayoutProps) => {
  const { showComponent, renderRef } = useLazyLoad({
    distancePXWindowCallComponent: 50
  })

  return (
    <S.Container ref={renderRef}>
      {title && (
        <S.Header>
          <C.Typography text={title} type="text1" as="span" />
          {optionsMenu && (
            <C.IconButton icon={<IconOptionsMenu />} ariaLabel="Options menu" />
          )}
        </S.Header>
      )}
      {showComponent && children}
    </S.Container>
  )
}

export default CardLayout
