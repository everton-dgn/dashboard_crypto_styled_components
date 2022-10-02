import { FlagProps } from './types'
import * as S from './styles'

const Flag = ({ title, image, isSelected, onClick }: FlagProps) => (
  <S.ButtonFlag title={title} onClick={onClick} isSelected={isSelected}>
    {image}
  </S.ButtonFlag>
)

export default Flag
