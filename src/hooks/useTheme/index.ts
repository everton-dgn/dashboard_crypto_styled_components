import { useLayoutEffect } from 'react'
import { useStorage } from 'hooks'
import { UseThemeType } from './types'

export const useTheme = (): UseThemeType => {
  const { getStorage, setStorageState: changeTheme } = useStorage({
    key: 'isDark',
    initialValue: true
  })

  const isDarkMode = !!getStorage

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

  return { setTheme, isDarkMode }
}
