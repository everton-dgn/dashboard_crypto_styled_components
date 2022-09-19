import { useCallback, useEffect } from 'react'
import * as S from './styles'
import { OptionsProps } from './types'
import * as C from 'components'
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

  const handleAlternateMenu = useCallback(() => {
    if (!isMountedComponent) {
      document.addEventListener('click', handleOutsideClick)
      return () => document.removeEventListener('click', handleOutsideClick)
    }
  }, [handleOutsideClick, isMountedComponent])

  useEffect(() => {
    if (isMountedComponent) {
      document.addEventListener('click', handleOutsideClick)
    }
    return () => document.removeEventListener('click', handleOutsideClick)
  }, [handleOutsideClick, isMountedComponent])

  return (
    <S.Wrapper>
      <C.IconButton
        onClick={handleAlternateMenu}
        icon={<IconOptionsMenu />}
        ariaLabel="Options menu"
      />
      {isMountedComponent && (
        <S.Container>
          <S.Menu
            role="menu"
            aria-orientation="vertical"
            startAnimation={isStartAnimation}
            onClick={e => e.stopPropagation()}
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
