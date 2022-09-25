import { lazy } from 'react'

export { default as AnalyticsChart } from './AnalyticsChart'
export { default as CryptocurrencyDataBalanceBox } from './CryptocurrencyDataBalanceBox'
export { default as LastBuy } from './LastBuy'
export { default as MainBanner } from './MainBanner'
export { default as QuickTransfer } from './QuickTransfer'
export const SemesterChart = lazy(() => import('./SemesterChart'))
export const StatisticsChart = lazy(() => import('./StatisticsChart'))
export { default as UserProfile } from './UserProfile'
export { default as VerticalMenu } from './VerticalMenu'
export { default as Wallets } from './Wallets'
