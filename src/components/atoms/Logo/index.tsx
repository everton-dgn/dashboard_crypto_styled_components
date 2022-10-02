import * as S from './styles'
import { LogoProps } from './types'

const Logo = ({ size = 'medium' }: LogoProps) => (
  <S.Logo size={size} title="Logo Crypto System" />
)

export default Logo
