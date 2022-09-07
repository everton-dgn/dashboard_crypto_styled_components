import { IconButtonProps } from './types'
import * as S from './styles'

const IconButton = ({ icon, ariaLabel, ...props }: IconButtonProps) => {
  return (
    <S.Button aria-label={ariaLabel} {...props}>
      {icon}
    </S.Button>
  )
}

export default IconButton
