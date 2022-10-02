import { useTranslator } from 'translations'
import * as S from './styles'
import { EventKey, EventKeyFull, OptionsProps } from './types'
import * as C from 'components'
import { useAnimation, useOutsideClick } from 'hooks'
import { ReactComponent as IconOptionsMenu } from 'assets/icons/optionsMenu.svg'

const Options = ({ optionsData }: OptionsProps) => {
  const { t } = useTranslator()
  const { isMountedComponent, toggleComponentMount, isStartAnimation } =
    useAnimation({
      timeInMillisecondsToDisassembleComponent: 200
    })
  const handleAlternateVisibility = useOutsideClick({
    isMountedComponent,
    toggleComponentMount
  })

  const handleCloseOptionsPressEsc = (e: EventKey) => {
    const isPressEsc = e.key === 'Escape'
    if (isPressEsc && isMountedComponent) return toggleComponentMount()
  }

  const handleCloseOptionsPressShiftTab = (
    e: EventKeyFull,
    index?: number,
    lastIndex = 0
  ) => {
    const isPressShiftAndTab = e.shiftKey && e.key === 'Tab'
    if (isPressShiftAndTab && index === 0) return toggleComponentMount()

    const isPressTab = e.key === 'Tab' && !e.shiftKey
    if (isPressTab && index === lastIndex) return toggleComponentMount()

    handleCloseOptionsPressEsc(e)
  }

  return (
    <S.Wrapper>
      <C.IconButton
        onClick={handleAlternateVisibility}
        onKeyDown={handleCloseOptionsPressEsc}
        icon={<IconOptionsMenu />}
        ariaLabel={t('optionsMenu.description')}
        title={t('optionsMenu.description')}
      />
      {isMountedComponent && (
        <S.Container>
          <S.Menu
            role="menu"
            aria-orientation="vertical"
            startAnimation={isStartAnimation}
            onClick={e => e.stopPropagation()}
          >
            {optionsData?.map(({ id, text }, i, array) => {
              const lastIndex = array.length - 1
              return (
                <S.Item
                  key={id}
                  onClick={toggleComponentMount}
                  onKeyDown={e =>
                    handleCloseOptionsPressShiftTab(e, i, lastIndex)
                  }
                  role="menuitem"
                  tabIndex={0}
                  aria-label={text}
                >
                  <C.Typography text={text} type="text5" as="span" />
                </S.Item>
              )
            })}
          </S.Menu>
        </S.Container>
      )}
    </S.Wrapper>
  )
}

export default Options
