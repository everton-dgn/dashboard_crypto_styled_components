import { forwardRef, memo } from 'react'
import * as S from './styles'
import { InputProps } from './types'

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'text', ...props }, ref) => (
    <S.Wrapper>
      <S.Input ref={ref} {...props} type={type} />
    </S.Wrapper>
  )
)

export default memo(Input)
