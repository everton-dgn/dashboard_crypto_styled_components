import { grid } from './grid'
import { borderRadius } from './borderRadius'
import { breakpoints } from './breakpoints'
import { colors } from './colors'
import { spacings } from './spacings'
import { fonts } from './typographies'
import { windowSizes } from './windowSizes'
import { layerOrder } from './layerOrder'

const T = {
  colors,
  fonts,
  spacings,
  breakpoints,
  windowSizes,
  borderRadius,
  grid,
  layerOrder
} as const

export default T
