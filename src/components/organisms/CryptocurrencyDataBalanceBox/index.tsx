import * as S from './styles'
import * as C from 'components'
import { CryptocurrencyDataBalanceBoxProps } from './types'

const CryptocurrencyDataBalanceBox = ({
  cryptocurrencyDataBalance
}: CryptocurrencyDataBalanceBoxProps) => {
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
          <C.Typography text="Price:" type="text6" as="span" />
          <C.Typography text={`$${price}`} type="text6" as="span" />
        </S.ContentValues>

        <S.ContentValues>
          <C.Typography text="24h %:" type="text6" as="span" />
          <C.PercentageChange
            isPositive={isPositive}
            percent={lastDayPercentageChange}
          />
        </S.ContentValues>

        <S.ContentValues>
          <C.Typography text="7d %:" type="text6" as="span" />
          <C.PercentageChange
            isPositive={isPositive}
            percent={changePercentOfTheWeek}
          />
        </S.ContentValues>

        <S.WrapperLastWeekSChart>
          <C.Typography text="Last 7 days" type="text6" as="span" />
          <C.MiniIncomeChart isPositive={isPositive} />
        </S.WrapperLastWeekSChart>
      </S.Wrapper>
    </C.CardLayout>
  )
}

export default CryptocurrencyDataBalanceBox
