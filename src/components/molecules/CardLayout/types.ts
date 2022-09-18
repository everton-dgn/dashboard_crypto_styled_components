import { ReactNode } from 'react'

export type CardLayoutProps = {
  children: ReactNode
  title?: string
  optionsMenu?: []
  overflowHidden?: boolean
  positionRelative?: boolean
}
