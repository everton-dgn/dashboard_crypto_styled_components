import { useTranslator } from 'translations'
import * as S from './styles'
import { OptionsProps } from './types'
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

  return (
    <S.Wrapper>
      <C.IconButton
        onClick={handleAlternateVisibility}
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
