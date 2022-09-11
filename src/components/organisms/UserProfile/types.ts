import { ReactNode } from 'react'

type UserProfile = {
  name: string
  email: string
  isPremium: boolean
  hasNewsNotifications: boolean
  urlImage: string
  wallet: number
  flagLogo: ReactNode
}

export type UserProfileProps = {
  userData: UserProfile
}
