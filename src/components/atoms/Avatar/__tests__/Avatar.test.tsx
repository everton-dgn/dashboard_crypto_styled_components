import { screen } from '@testing-library/react'
import { renderWithProviders } from 'testHelpers/providers'
import Avatar from '..'

describe('[Component] Avatar', () => {
  it('should render a square image with 38px on the side when passing the props size with medium value', () => {
    renderWithProviders(
      <Avatar name="valid_name" urlImage="valid_image.webp" size="medium" />
    )
    const img = screen.getByRole('img', {
      name: 'valid_name'
    })
    expect(img).toHaveStyle({
      width: '38px',
      height: '38px'
    })
  })

  it('should render a square image with 49px on the side when passing the props size with large value', () => {
    renderWithProviders(
      <Avatar name="valid_name" urlImage="valid_image.webp" size="large" />
    )
    const img = screen.getByRole('img', { name: 'valid_name' })
    expect(img).toHaveStyle({ width: '49px', height: '49px' })
  })

  it('should render a default image of urlImage is false', () => {
    renderWithProviders(<Avatar name="valid_name" urlImage="" size="large" />)
    const img = screen.getByRole('img', { name: 'valid_name' })
    expect(img).toHaveAttribute('src', 'assetsMock')
  })
})
