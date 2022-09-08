import { ReactNode } from 'react'

type CryptoBalanceItems = {
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

export type CryptocurrencyDataBalanceBoxProps = {
  cryptocurrencyDataBalance: CryptoBalanceItems
}
