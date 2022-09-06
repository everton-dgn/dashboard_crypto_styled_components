import { useState } from 'react'
import * as S from './styles'
import { SwitchProps } from './types'

const Switch = ({ id, initialValue, onClick, ariaLabel }: SwitchProps) => {
  const [checked, setChecked] = useState(!!initialValue)

  const handle = () => {
    setChecked(prevState => !prevState)
    onClick()
  }

  return (
    <S.Container>
      <S.Input
        id={id}
        type="checkbox"
        checked={checked}
        readOnly={true}
        aria-hidden="true"
        tabIndex={-1}
      />
      <S.Label htmlFor={id} aria-hidden="true" />
      <S.Button
        onClick={handle}
        aria-label={ariaLabel}
        role="switch"
        aria-checked={checked}
      />
    </S.Container>
  )
}

export default Switch
