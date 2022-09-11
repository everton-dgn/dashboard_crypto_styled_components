import { ButtonHTMLAttributes } from 'react'

export type SizeProps = 'large' | 'small'

export type ColorProps = 'primary'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text?: string
  size: SizeProps
  color: ColorProps
  fullWidth?: boolean
}
