export type SetThemeType = { payload: undefined; type: string } | undefined

export type UseThemeType = {
  setTheme: () => void
  isDarkMode: boolean
}
