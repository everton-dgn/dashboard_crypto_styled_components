import { act } from '@testing-library/react'
import { renderHooksProvider } from 'testHelpers/providers'
import { useTheme } from '..'

describe('[Hooks] useTheme', () => {
  it('should start with the clear theme and switch theme between dark and light when calling setTheme and toggle data-theme attribute in body', () => {
    const { result } = renderHooksProvider(() => useTheme())
    expect(result.current.theme).toBe('light')
    expect(document.body.dataset.theme).toBe('light')

    act(() => result.current.setTheme())

    expect(result.current.theme).toBe('dark')
    expect(document.body.dataset.theme).toBe('dark')

    act(() => {
      result.current.setTheme()
    })

    expect(result.current.theme).toBe('light')
    expect(document.body.dataset.theme).toBe('light')
  })
})
