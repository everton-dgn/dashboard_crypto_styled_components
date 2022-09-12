export type GetWindowSizeType = {
  sm: boolean
  md: boolean
  lg: boolean
  custom: (size: number) => boolean
}

export type UseRenderingByWindowSizeType = {
  windowSize: GetWindowSizeType
}
