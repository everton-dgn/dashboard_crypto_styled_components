import { CardLayoutProps } from 'components/atoms/CardLayout/types'
import { ReactComponent as IconOptionsMenu } from 'assets/icons/optionsMenu.svg'
import * as S from './styles'
import * as C from 'components'

const CardLayout = ({ title, optionsMenu, children }: CardLayoutProps) => {
  return (
    <S.Container>
      {title && (
        <S.Header>
          <C.Typography text={title} type="text1" as="span" />
          {optionsMenu && (
            <C.IconButton
              icon={<IconOptionsMenu />}
              arialLabel="Options menu"
            />
          )}
        </S.Header>
      )}
      {children}
    </S.Container>
  )
}

export default CardLayout
