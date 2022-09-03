import { GlobalStyles } from 'globalStyles'
import * as C from 'components'
import { MainProvidersProps } from './types'

export const MainProviders = ({ children }: MainProvidersProps) => (
  <C.ErrorBoundary>
    {children}
    <GlobalStyles />
  </C.ErrorBoundary>
)
