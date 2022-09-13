import * as S from './styles'
import { BoxIconCryptoProps } from './types'

const BoxIconCrypto = ({ svgIcon, ...props }: BoxIconCryptoProps) => (
  <S.Container {...props}>{svgIcon}</S.Container>
)

export default BoxIconCrypto
