import { AnalyticsChartProps } from 'components/organisms/AnalyticsChart/types'
import T from 'theme'
import * as S from './styles'
import * as C from 'components'

const AnalyticsChart = ({ dataAnalytics }: AnalyticsChartProps) => {
  const mainCryptocurrencies = dataAnalytics.slice(0, 3)

  return (
    <C.CardLayout title="ANALYTICS" optionsMenu={[]}>
      <S.WrapperChart>
        {mainCryptocurrencies.map(({ totalPercentage, name, price, icon }) => (
          <S.WrapperBoxCrypto key={name}>
            <S.WrapperText>
              <C.Typography
                text={`${totalPercentage}%`}
                type="text2"
                as="h2"
                weight={500}
                align="center"
              />
              <C.Typography
                text={name}
                type="text6"
                as="h3"
                weight={500}
                align="center"
                color={T.colors.textTertiary}
              />
              <C.Typography
                text={`P${price}`}
                type="text6"
                as="p"
                align="center"
              />
            </S.WrapperText>
            <C.CircleChartCripto
              totalPercentage={totalPercentage}
              icon={icon}
            />
          </S.WrapperBoxCrypto>
        ))}
      </S.WrapperChart>
    </C.CardLayout>
  )
}

export default AnalyticsChart
