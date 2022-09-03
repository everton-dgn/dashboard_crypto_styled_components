import { BrowserRouter } from 'react-router-dom'
import Routes from 'routes'
import { MainProviders } from 'providers'

const App = () => (
  <MainProviders>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </MainProviders>
)

export default App
