import { animations } from './animations'
import { borderRadius } from './borderRadius'
import { breakpoints } from './breakpoints'
import { colors } from './colors'
import { fonts } from './typographies'
import { grid } from './grid'
import { layerOrder } from './layerOrder'
import { spacings } from './spacings'
import { windowSizes } from './windowSizes'

const T = {
  colors,
  fonts,
  spacings,
  breakpoints,
  windowSizes,
  borderRadius,
  grid,
  layerOrder,
  animations
} as const

export default T
