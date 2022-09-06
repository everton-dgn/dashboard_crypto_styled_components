import { borderRadius, grid } from './base'
import { breakpoints } from './breakpoints'
import { colors } from './colors'
import { spacings } from './spacings'
import { fonts } from './typographies'
import { windowSizes } from './windowSizes'

const T = {
  colors,
  fonts,
  spacings,
  breakpoints,
  windowSizes,
  borderRadius,
  grid
} as const

export default T
