import { FlagProps } from './types'
import * as S from './styles'

const Flag = ({ image, altDescription, isSelected, onClick }: FlagProps) => (
  <S.ButtonFlag onClick={onClick}>
    <S.ImageFlag src={image} alt={altDescription} isSelected={isSelected} />
  </S.ButtonFlag>
)

export default Flag
