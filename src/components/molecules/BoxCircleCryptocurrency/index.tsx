import * as C from 'components'
import { currencyFormatter } from 'data/currencyFormatter'
import { useDecrementAnimation } from 'hooks'
import T from 'theme'
import * as S from './styles'
import { BoxCircleCryptocurrencyProps } from './types'

const BoxCircleCryptocurrency = ({
  totalPercentage,
  name,
  price,
  icon
}: BoxCircleCryptocurrencyProps) => {
  const [currentPercent] = useDecrementAnimation({ total: totalPercentage })

  return (
    <S.WrapperBoxCrypto key={name}>
      <S.WrapperText>
        <C.Typography
          text={`${currentPercent}%`}
          type="text2"
          as="h2"
          weight={500}
          align="center"
        />
        <C.Typography
          text={name}
          type="text6"
          as="h3"
          weight={500}
          align="center"
          color={T.colors.textTertiary}
        />
        <C.Typography
          text={currencyFormatter(price)}
          type="text6"
          as="p"
          align="center"
        />
      </S.WrapperText>
      <C.CircleChartCripto totalPercentage={currentPercent} icon={icon} />
    </S.WrapperBoxCrypto>
  )
}

export default BoxCircleCryptocurrency
