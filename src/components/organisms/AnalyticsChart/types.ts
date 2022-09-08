import { ReactNode } from 'react'

type AnalyticsItems = {
  currency: string
  name: string
  isPositive: boolean
  currentPercentageVariation: number
  lastDayPercentageChange: number
  changePercentOfTheWeek: number
  totalPercentage: number
  price: number
  icon: ReactNode
}

export type AnalyticsChartProps = {
  dataAnalytics: AnalyticsItems[]
}
