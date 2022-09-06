import { ReactNode } from 'react'

type ListItemsType = {
  text: string
  icon: ReactNode
  route: string
}

export type MenuListProps = {
  dataListMenu: ListItemsType[]
}
