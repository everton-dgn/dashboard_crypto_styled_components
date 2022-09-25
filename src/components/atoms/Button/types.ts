import { ButtonHTMLAttributes } from 'react'

export type SizeProps = 'large' | 'small'

export type ColorProps = 'primary'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size: SizeProps
  color: ColorProps
  text?: string
  fullWidth?: boolean
}
