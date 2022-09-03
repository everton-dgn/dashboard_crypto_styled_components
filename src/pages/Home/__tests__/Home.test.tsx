import { screen } from '@testing-library/react'
import { renderWithProviders } from 'testHelpers/providers'
import Home from '..'

describe('[Page] Home', () => {
  it('should render a h1', () => {
    renderWithProviders(<Home />)
    const h1 = screen.getByRole('heading', { name: /hello world!/i })
    expect(h1).toBeInTheDocument()
  })
})
