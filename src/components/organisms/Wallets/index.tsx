import { OPTIONS_DATA } from 'fakeApi'
import { useTranslator } from 'translations'
import * as S from './styles'
import * as C from 'components'
import T from 'theme'
import { currencyFormatter } from 'data/currencyFormatter'
import { WalletsProps } from './types'
import credCard from 'assets/images/credCard.webp'
import { ReactComponent as IconAdd } from 'assets/icons/plus.svg'

const Wallets = ({ wallet, name, flagLogo }: WalletsProps) => {
  const { t } = useTranslator()

  return (
    <C.CardLayout title={t('wallets.title')} optionsMenu={OPTIONS_DATA}>
      <S.Wrapper>
        <S.AddButton
          icon={<IconAdd />}
          title={t('wallets.buttonAdd')}
          color={T.colors.white}
        />
        <S.Content>
          <S.Logotipo title="Logo Crypto System" />
          <S.ValueInTheWallet>
            {currencyFormatter({ value: wallet })}
          </S.ValueInTheWallet>
          <S.Name>{name}</S.Name>
          {flagLogo}
          <S.ImageCredCard
            width={290}
            height={173}
            src={credCard}
            alt={t('wallets.descriptionImageCredCard')}
          />
        </S.Content>
      </S.Wrapper>
    </C.CardLayout>
  )
}

export default Wallets
