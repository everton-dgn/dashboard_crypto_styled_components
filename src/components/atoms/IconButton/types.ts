import { ButtonHTMLAttributes, ReactNode } from 'react'

export type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: ReactNode
  color?: string
  size?: string
  ariaLabel?: string
}
