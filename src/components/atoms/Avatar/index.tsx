import * as S from './styles'
import { AvatarProps } from './types'
import defaultAvatar from 'assets/images/defaultAvatar.webp'

const Avatar = ({ name, urlImage, size, onClick, isSelected }: AvatarProps) => {
  return (
    <S.Wrapper size={size} onClick={onClick}>
      <S.Image
        src={urlImage || defaultAvatar}
        alt={name}
        isSelected={isSelected}
      />
    </S.Wrapper>
  )
}

export default Avatar
