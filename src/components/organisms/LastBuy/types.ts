import { ReactNode } from 'react'

type LastButItems = {
  currency: string
  isPositive: boolean
  percent: number
  icon: ReactNode
}

export type LastBuyProps = {
  dataLastBuy: LastButItems[]
}
