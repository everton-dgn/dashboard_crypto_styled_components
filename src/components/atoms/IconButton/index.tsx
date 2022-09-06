import { IconButtonProps } from './types'
import * as S from './styles'

const IconButton = ({ icon, arialLabel }: IconButtonProps) => {
  return <S.Button aria-label={arialLabel}>{icon}</S.Button>
}

export default IconButton
