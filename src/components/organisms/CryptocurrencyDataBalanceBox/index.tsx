import { currencyFormatter } from 'data/currencyFormatter'
import T from 'theme'
import { useTranslator } from 'translations'
import * as S from './styles'
import * as C from 'components'
import { CryptocurrencyDataBalanceBoxProps } from './types'

const CryptocurrencyDataBalanceBox = ({
  cryptocurrencyDataBalance
}: CryptocurrencyDataBalanceBoxProps) => {
  const { t } = useTranslator()
  const {
    icon,
    currency,
    isPositive,
    price,
    lastDayPercentageChange,
    changePercentOfTheWeek
  } = cryptocurrencyDataBalance

  return (
    <C.CardLayout>
      <S.Wrapper>
        <S.WrapperCrypto>
          <C.BoxIconCrypto svgIcon={icon} />
          <C.Typography text={currency} type="text4" as="h2" weight={500} />
        </S.WrapperCrypto>

        <S.ContentValues>
          <C.Typography
            text={t('cryptocurrencyDataBalanceBox.price')}
            type="text6"
            as="span"
          />
          <C.Typography
            text={currencyFormatter({ value: price })}
            type="text6"
            as="span"
            color={T.colors.textQuaternary}
            weight={500}
          />
        </S.ContentValues>

        <S.ContentValues>
          <C.Typography text="24h %:" type="text6" as="span" />
          <C.VariableValueWithArrowSign
            isPositive={isPositive}
            value={`${lastDayPercentageChange}%`}
            size="small"
          />
        </S.ContentValues>

        <S.ContentValues>
          <C.Typography text="7d %:" type="text6" as="span" />
          <C.VariableValueWithArrowSign
            isPositive={isPositive}
            value={`${changePercentOfTheWeek}%`}
            size="small"
          />
        </S.ContentValues>

        <C.Typography
          text={t('cryptocurrencyDataBalanceBox.last7Days')}
          type="text6"
          as="span"
        />

        <C.MiniIncomeChart isPositive={isPositive} />
      </S.Wrapper>
    </C.CardLayout>
  )
}

export default CryptocurrencyDataBalanceBox
