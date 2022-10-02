import { ButtonHTMLAttributes, ReactNode } from 'react'

export type FlagProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  image: ReactNode
  isSelected: boolean
  onClick: () => void
}
