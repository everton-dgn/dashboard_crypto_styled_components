import { ReactNode } from 'react'

type QuickTransferItems = {
  name: string
  urlImage: string
  flagLogo: ReactNode
  cardNumber: number
}

export type QuickTransferProps = {
  quickTransferData: QuickTransferItems[]
}
