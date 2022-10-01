import * as S from './styles'
import { AvatarProps } from './types'
import defaultAvatar from 'assets/images/defaultAvatar.webp'

const Avatar = ({ name, urlImage, size }: AvatarProps) => {
  return (
    <S.Wrapper size={size}>
      <S.Image src={urlImage || defaultAvatar} alt={name} />
    </S.Wrapper>
  )
}

export default Avatar
