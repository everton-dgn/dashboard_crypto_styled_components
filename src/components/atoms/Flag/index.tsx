import { FlagProps } from './types'
import * as S from './styles'

const Flag = ({ image, isSelected, onClick }: FlagProps) => (
  <S.ButtonFlag onClick={onClick} isSelected={isSelected}>
    {image}
  </S.ButtonFlag>
)

export default Flag
