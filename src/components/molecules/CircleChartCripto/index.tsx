import { CircleChartCriptoProps } from './types'
import * as S from './styles'
import * as C from 'components'

const CircleChartCripto = ({
  totalPercentage = 0,
  icon
}: CircleChartCriptoProps) => {
  const convertsPercentageToChartFill = () => {
    const maximumValue = 244
    return (maximumValue * totalPercentage) / 100
  }

  return (
    <S.Percent>
      <S.Svg>
        <S.CircleBase cx="36" cy="36" r="38.9" />
        <S.percentCircleWithColor
          id="circle1"
          cx="36"
          cy="36"
          r="38.9"
          colorFillPercentage={convertsPercentageToChartFill()}
        />
      </S.Svg>
      <S.WrapperCrypto>
        <C.BoxIconCrypto svgIcon={icon} />
      </S.WrapperCrypto>
    </S.Percent>
  )
}

export default CircleChartCripto
