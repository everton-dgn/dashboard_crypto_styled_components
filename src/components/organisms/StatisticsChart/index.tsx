import { currencyFormatter } from 'data/currencyFormatter'
import * as S from './styles'
import * as C from 'components'
import T from 'theme'
import { StatisticsChartProps } from './types'
import {
  NameType,
  Payload,
  ValueType
} from 'recharts/types/component/DefaultTooltipContent'
import {
  Area,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  TooltipProps
} from 'recharts'

const renderTooltipContent = ({
  payload,
  label
}: TooltipProps<ValueType, NameType>) => {
  const verifyType = (entry: Payload<ValueType, NameType>) => {
    return typeof entry.value === 'number'
      ? currencyFormatter(entry.value)
      : entry.value
  }

  return (
    <S.ContainerTooltip>
      <S.TooltipItem>{label}</S.TooltipItem>
      {payload?.map((entry, i) => (
        <S.TooltipItem key={`${i}-${entry.value}`}>
          {`${entry.name}: ${verifyType(entry)}`}
        </S.TooltipItem>
      ))}
    </S.ContainerTooltip>
  )
}

const StatisticsChart = ({ chartData }: StatisticsChartProps) => {
  const toCurrency = (decimal: number) => currencyFormatter(decimal, 0)

  return (
    <C.CardLayout title="STATISTICS" optionsMenu={[]}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={chartData}
          margin={{
            top: 0,
            right: 5,
            left: -30,
            bottom: -8
          }}
        >
          <CartesianGrid
            strokeDasharray="0.2 1"
            strokeWidth={0.5}
            stroke={T.colors.grey}
          />
          <defs>
            <linearGradient id="colorArea" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="7%"
                stopColor={T.colors.primary}
                stopOpacity={0.4}
              />
              <stop
                offset="96%"
                stopColor={T.colors.primary}
                stopOpacity={0.02}
              />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="month"
            tick={{ fill: T.colors.grey }}
            stroke={T.colors.grey}
            strokeWidth={0.3}
            fontSize={10}
          />
          <YAxis
            tickFormatter={toCurrency}
            tick={{ fill: T.colors.grey }}
            stroke={T.colors.grey}
            strokeWidth={0.3}
            fontSize={10}
          />
          <Tooltip content={renderTooltipContent} />
          <Area
            type="linear"
            dataKey="wallet"
            stroke={T.colors.chart}
            fillOpacity={0.5}
            fill="url(#colorArea)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </C.CardLayout>
  )
}

export default StatisticsChart
