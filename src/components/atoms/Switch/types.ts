import { InputHTMLAttributes } from 'react'

export type SwitchProps = InputHTMLAttributes<HTMLInputElement> & {
  initialValue?: boolean
  onClick: () => void
  ariaLabel: string
}
