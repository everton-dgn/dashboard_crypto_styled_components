import { InputHTMLAttributes } from 'react'

export type SearchBarProps = InputHTMLAttributes<HTMLInputElement> & {
  ariaLabel: string
}
