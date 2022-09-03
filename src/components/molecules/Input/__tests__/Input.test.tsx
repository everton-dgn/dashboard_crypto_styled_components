import { renderWithProviders } from 'testHelpers/providers'
import Input from '..'

describe('[Component] Input', () => {
  it('should render a snapshot', () => {
    const { container } = renderWithProviders(
      <Input
        name="searchRepositoriesInTheGithub"
        placeholder="Nome de usuário"
      />
    )
    expect(container).toMatchSnapshot()
  })
})
