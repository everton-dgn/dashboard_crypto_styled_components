import * as C from 'components'
import * as S from './styles'
import {
  NameType,
  Payload,
  ValueType
} from 'recharts/types/component/DefaultTooltipContent'
import { SemesterChartProps } from './types'
import { currencyFormatter } from 'data/currencyFormatter'
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis
} from 'recharts'
import T from 'theme'

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

const SemesterChart = ({ chartData }: SemesterChartProps) => {
  const totalYield: number = chartData
    .map(({ wallet }) => wallet)
    .reduce((acc, cur) => cur + acc)

  return (
    <C.CardLayout title="SEMESTER" optionsMenu={[]}>
      <S.Wrapper>
        <S.ContentTotalYield>
          <C.VariableValueWithArrowSign
            isPositive={totalYield > 0}
            value={`${currencyFormatter(totalYield)}`}
            size="large"
            color={T.colors.textPrimary}
          />
        </S.ContentTotalYield>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{
              top: 0,
              right: 0,
              left: 12,
              bottom: -8
            }}
          >
            <CartesianGrid
              strokeDasharray="0.2 1"
              strokeWidth={0.5}
              stroke="transparent"
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
      </S.Wrapper>
    </C.CardLayout>
  )
}

export default SemesterChart
