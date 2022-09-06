import { useLayoutEffect } from 'react'
import { useStorage } from 'hooks'
import { UseThemeType } from './types'

export const useTheme = (): UseThemeType => {
  const { getStorage: isDarkMode, setStorageState: changeTheme } = useStorage({
    key: 'isDark',
    initialValue: false
  })

  const theme = isDarkMode ? 'dark' : 'light'

  useLayoutEffect(
    function switchTheme() {
      document.body.dataset.theme = theme
    },
    [theme]
  )

  const setTheme = (): void => {
    changeTheme(!isDarkMode)
  }

  return { theme, setTheme, isDarkMode }
}
