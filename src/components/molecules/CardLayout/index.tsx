import { CardLayoutProps } from './types'
import * as S from './styles'
import * as C from 'components'

const CardLayout = ({
  children,
  title,
  optionsMenu,
  overflowHidden,
  positionRelative
}: CardLayoutProps) => (
  <S.Container
    overflowHidden={overflowHidden}
    positionRelative={positionRelative}
  >
    {title && (
      <S.Header>
        <C.Typography text={title} type="text1" as="h1" />
        {optionsMenu && <C.Options />}
      </S.Header>
    )}
    {children}
  </S.Container>
)

export default CardLayout
