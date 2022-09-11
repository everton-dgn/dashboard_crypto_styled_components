import * as S from './styles'
import * as C from 'components'
import T from 'theme'
import { currencyFormatter } from 'data/currencyFormatter'
import { WalletsProps } from './types'
import credCard from 'assets/images/credCard.webp'
import { ReactComponent as IconAdd } from 'assets/icons/plus.svg'

const Wallets = ({ wallet, name, flagLogo }: WalletsProps) => {
  return (
    <C.CardLayout title="WALLETS" optionsMenu={[]}>
      <S.Wrapper>
        <S.AddButton icon={<IconAdd />} title="Add" color={T.colors.white} />
        <S.Content>
          <S.Logotipo title="Logo Crypto System" />
          <S.ValueInTheWallet>{currencyFormatter(wallet)}</S.ValueInTheWallet>
          <S.Name>{name}</S.Name>
          {flagLogo}
          <S.ImageCredCard src={credCard} alt="Credit card" />
        </S.Content>
      </S.Wrapper>
    </C.CardLayout>
  )
}

export default Wallets
