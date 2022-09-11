import { forwardRef, memo } from 'react'
import * as S from './styles'
import { ButtonProps } from './types'

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ text, ...props }, ref) => (
    <S.Container {...props} ref={ref}>
      {text}
    </S.Container>
  )
)

export default memo(Button)
