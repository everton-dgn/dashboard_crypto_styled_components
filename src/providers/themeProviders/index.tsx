import { useTheme } from 'hooks'
import { ThemeProvidersProps } from './types'

export const ThemeProviders = ({ children }: ThemeProvidersProps) => {
  useTheme()

  return <>{children}</>
}
