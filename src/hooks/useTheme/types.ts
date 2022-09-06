export type SetThemeType = { payload: undefined; type: string } | undefined

export type UseThemeType = {
  theme: 'dark' | 'light'
  setTheme: () => void
  isDarkMode: unknown
}
