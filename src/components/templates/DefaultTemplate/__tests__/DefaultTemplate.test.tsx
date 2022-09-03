import { renderWithProviders } from 'testHelpers/providers'
import Default from '..'

describe('[Template] Default', () => {
  it('should render a Footer com texto', () => {
    const { container } = renderWithProviders(<Default />)
    expect(container).toBeInTheDocument()
  })
})
