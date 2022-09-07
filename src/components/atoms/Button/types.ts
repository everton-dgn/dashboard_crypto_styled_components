import { ButtonHTMLAttributes } from 'react'

export type SizeProps = 'large'

export type ColorProps = 'primary'

export type BtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text?: string
  size: SizeProps
  color: ColorProps
  fullWidth?: boolean
}
