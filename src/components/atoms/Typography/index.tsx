import * as S from './styles'
import { TextElements, TypographyProps } from './types'

const Typography = ({ text, align, type, as, ...props }: TypographyProps) => (
  <S.Text align={align} type={type} as={as as TextElements} {...props}>
    {text}
  </S.Text>
)

export default Typography
