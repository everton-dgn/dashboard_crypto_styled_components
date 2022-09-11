import { ReactNode } from 'react'

type QuickTransferItems = {
  name: string
  urlImage: string
  flagLogo: ReactNode
  cardNumber: number
}

export type QuickTransferProps = {
  initialState: number
  increment: number
  quickTransferData: QuickTransferItems[]
}
