import * as S from './styles'
import * as C from 'components'
import T from 'theme'
import { SizeText, VariableValueWithArrowSignProps } from './types'
import { ReactComponent as ArrowDropUp } from 'assets/icons/arrowDropUp.svg'
import { ReactComponent as ArrowDropDown } from 'assets/icons/arrowDropDown.svg'

const VariableValueWithArrowSign = ({
  isPositive,
  value,
  size,
  color
}: VariableValueWithArrowSignProps) => {
  const calcSizeText = (): SizeText => {
    const isSmallOrFalse = size === 'small' || !size
    return isSmallOrFalse ? 'text6' : 'text1'
  }

  return (
    <S.Container size={size}>
      {isPositive ? <ArrowDropUp /> : <ArrowDropDown />}
      <C.Typography
        text={value}
        type={calcSizeText()}
        as="span"
        color={color || T.colors.textQuaternary}
        weight={500}
      />
    </S.Container>
  )
}

export default VariableValueWithArrowSign
