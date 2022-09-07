import { forwardRef, memo } from 'react'
import * as S from './styles'
import { InputProps } from './types'

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'text', paddingLeft, ...props }, ref) => (
    <S.Wrapper>
      <S.Input ref={ref} paddingLeft={paddingLeft} type={type} {...props} />
    </S.Wrapper>
  )
)

export default memo(Input)
