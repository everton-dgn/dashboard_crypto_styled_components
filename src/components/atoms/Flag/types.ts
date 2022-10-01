import { ReactNode } from 'react'

export type FlagProps = {
  image: ReactNode
  isSelected: boolean
  onClick: () => void
}
