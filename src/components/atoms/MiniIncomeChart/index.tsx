import * as S from './styles'
import { MiniIncomeChartProps } from './types'
import chartRed from 'assets/images/chartRed.webp'
import chartGreen from 'assets/images/chartGreen.webp'

const MiniIncomeChart = ({ isPositive }: MiniIncomeChartProps) => {
  const chartImage = isPositive ? chartGreen : chartRed
  const chartColor = isPositive ? 'Green' : 'Red'
  const chartType = isPositive ? 'gain' : 'loss'

  return (
    <S.Image
      width={105}
      height={30}
      src={chartImage}
      alt={`${chartColor} graph indicating ${chartType}`}
    />
  )
}

export default MiniIncomeChart
