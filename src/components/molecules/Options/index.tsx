import { useCallback, useEffect } from 'react'
import * as S from './styles'
import * as C from 'components'
import { OptionsProps } from './types'
import { useAnimation } from 'hooks'
import { ReactComponent as IconOptionsMenu } from 'assets/icons/optionsMenu.svg'

const Options = ({ optionsData }: OptionsProps) => {
  const { isMountedComponent, toggleComponentMount, isStartAnimation } =
    useAnimation({
      timeInMillisecondsToDisassembleComponent: 200
    })

  const handleOutsideClick = useCallback(
    (e: Event) => {
      if (e.target !== e.currentTarget) toggleComponentMount()
    },
    [toggleComponentMount]
  )

  useEffect(() => {
    if (isMountedComponent) {
      document.addEventListener('click', handleOutsideClick)
    }
    return () => document.removeEventListener('click', handleOutsideClick)
  }, [handleOutsideClick, isMountedComponent])

  return (
    <S.Wrapper onClick={e => e.stopPropagation()}>
      <C.IconButton
        onClick={toggleComponentMount}
        icon={<IconOptionsMenu />}
        ariaLabel="Options menu"
      />
      {isMountedComponent && (
        <S.Container>
          <S.Menu
            role="menu"
            aria-orientation="vertical"
            startAnimation={isStartAnimation}
          >
            {optionsData.map(({ id, text }) => (
              <S.Item
                key={id}
                onClick={toggleComponentMount}
                role="menuitem"
                tabIndex={0}
                aria-label={text}
              >
                <C.Typography text={text} type="text5" as="span" />
              </S.Item>
            ))}
          </S.Menu>
        </S.Container>
      )}
    </S.Wrapper>
  )
}

export default Options
