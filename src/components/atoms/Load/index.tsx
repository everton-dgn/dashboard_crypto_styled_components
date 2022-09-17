import * as S from './styles'
import { LoadType } from './types'

const Load = ({ size }: LoadType) => (
  <S.Container size={size}>
    <S.Circle />
    <S.Circle />
    <S.Circle />
    <S.Circle />
  </S.Container>
)

export default Load
