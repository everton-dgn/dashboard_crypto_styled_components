import * as C from 'components'
import { OPTIONS_DATA } from 'fakeApi'
import { useTranslator } from 'translations'
import * as S from './styles'
import { AnalyticsChartProps } from './types'

const AnalyticsChart = ({ dataAnalytics }: AnalyticsChartProps) => {
  const { t } = useTranslator()

  const mainCryptocurrencies = dataAnalytics.slice(0, 3)

  return (
    <C.CardLayout
      title={t('analyticsChart.title')}
      optionsMenu={OPTIONS_DATA()}
    >
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
