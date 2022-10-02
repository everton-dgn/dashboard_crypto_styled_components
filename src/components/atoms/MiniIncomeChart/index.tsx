import { useTranslator } from 'translations'
import * as S from './styles'
import { MiniIncomeChartProps } from './types'
import chartRed from 'assets/images/chartRed.webp'
import chartGreen from 'assets/images/chartGreen.webp'

const MiniIncomeChart = ({ isPositive }: MiniIncomeChartProps) => {
  const { t } = useTranslator()

  const chartImage = isPositive ? chartGreen : chartRed
  const status = isPositive
    ? t('miniIncomeChart.imageGraphDescription.1')
    : t('miniIncomeChart.imageGraphDescription.0')

  return (
    <S.Image
      width={105}
      height={30}
      src={chartImage}
      title={status}
      alt={status}
    />
  )
}

export default MiniIncomeChart
