import * as S from './styles'
import * as C from 'components'
import T from 'theme'
import { PercentageChangeProps } from './types'
import { ReactComponent as ArrowDropUp } from 'assets/icons/arrowDropUp.svg'
import { ReactComponent as ArrowDropDown } from 'assets/icons/arrowDropDown.svg'

const PercentageChange = ({ isPositive, percent }: PercentageChangeProps) => {
  return (
    <S.Container>
      {isPositive ? <ArrowDropUp /> : <ArrowDropDown />}
      <C.Typography
        text={`${percent}%`}
        type="text6"
        as="span"
        color={T.colors.textQuaternary}
        weight={500}
      />
    </S.Container>
  )
}

export default PercentageChange
