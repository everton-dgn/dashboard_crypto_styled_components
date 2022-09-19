import { lazy } from 'react'

export { default as AnalyticsChart } from './AnalyticsChart'
export { default as CryptocurrencyDataBalanceBox } from './CryptocurrencyDataBalanceBox'
export { default as LastBuy } from './LastBuy'
export { default as MainBanner } from './MainBanner'
export const QuickTransfer = lazy(() => import('./QuickTransfer'))
export const SemesterChart = lazy(() => import('./SemesterChart'))
export const StatisticsChart = lazy(() => import('./StatisticsChart'))
export { default as UserProfile } from './UserProfile'
export { default as VerticalMenu } from './VerticalMenu'
export const Wallets = lazy(() => import('./Wallets'))
