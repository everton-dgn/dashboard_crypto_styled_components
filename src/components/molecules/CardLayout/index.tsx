import { CardLayoutProps } from './types'
import { ReactComponent as IconOptionsMenu } from 'assets/icons/optionsMenu.svg'
import * as S from './styles'
import * as C from 'components'

const CardLayout = ({ title, optionsMenu, children }: CardLayoutProps) => (
  <S.Container>
    {title && (
      <S.Header>
        <C.Typography text={title} type="text1" as="h1" />
        {optionsMenu && (
          <C.IconButton icon={<IconOptionsMenu />} ariaLabel="Options menu" />
        )}
      </S.Header>
    )}
    {children}
  </S.Container>
)

export default CardLayout
