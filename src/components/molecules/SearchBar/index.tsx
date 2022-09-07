import { ReactComponent as IconSearch } from 'assets/icons/search.svg'
import T from 'theme'
import * as S from './styles'
import * as C from 'components'
import { SearchBarProps } from './types'

const SearchBar = ({ ariaLabel, ...props }: SearchBarProps) => (
  <S.Container>
    <S.WrapperButton>
      <C.IconButton
        icon={<IconSearch />}
        color={T.colors.white}
        ariaLabel={ariaLabel}
      />
    </S.WrapperButton>
    <C.Input {...props} paddingLeft="44px" />
  </S.Container>
)

export default SearchBar
