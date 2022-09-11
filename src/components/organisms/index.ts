import { lazy } from 'react'

export { default as AnalyticsChart } from './AnalyticsChart'
export const CryptocurrencyDataBalanceBox = lazy(
  () => import('./CryptocurrencyDataBalanceBox')
)
export { default as LastBuy } from './LastBuy'
export { default as MainBanner } from './MainBanner'
export { default as QuickTransfer } from './QuickTransfer'
export { default as SemesterChart } from './SemesterChart'
export { default as StatisticsChart } from './StatisticsChart'
export { default as UserProfile } from './UserProfile'
export { default as VerticalMenu } from './VerticalMenu'
export { default as Wallets } from './Wallets'
