import * as C from 'components'
import * as S from './styles'
import { AnalyticsChartProps } from './types'

const AnalyticsChart = ({ dataAnalytics }: AnalyticsChartProps) => {
  const mainCryptocurrencies = dataAnalytics.slice(0, 3)

  return (
    <C.CardLayout title="ANALYTICS" optionsMenu={[]}>
      <S.WrapperChart>
        {mainCryptocurrencies.map(({ totalPercentage, name, price, icon }) => (
          <C.BoxCircleCryptocurrency
            key={name}
            totalPercentage={totalPercentage}
            name={name}
            price={price}
            icon={icon}
          />
        ))}
      </S.WrapperChart>
    </C.CardLayout>
  )
}

export default AnalyticsChart
