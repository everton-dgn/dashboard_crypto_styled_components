import { ReactNode } from 'react'

type OptionsMenuItems = {
  id: number
  text: string
}

export type CardLayoutProps = {
  children: ReactNode
  title?: string
  optionsMenu?: OptionsMenuItems[]
  overflowHidden?: boolean
  positionRelative?: boolean
}
