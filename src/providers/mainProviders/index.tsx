import { GlobalStyles } from 'globalStyles'
import * as C from 'components'
import { ThemeProviders } from '../themeProviders'
import { MainProvidersProps } from './types'
import 'translations'

export const MainProviders = ({ children, setTheme }: MainProvidersProps) => {
  if (setTheme) document.body.dataset.theme = setTheme

  const Theme = () =>
    setTheme ? <>{children}</> : <ThemeProviders>{children}</ThemeProviders>

  return (
    <C.ErrorBoundary>
      <Theme />
      <GlobalStyles />
    </C.ErrorBoundary>
  )
}
