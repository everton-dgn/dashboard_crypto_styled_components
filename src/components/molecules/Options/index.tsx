import * as S from './styles'
import * as C from 'components'
import { useAnimation } from 'hooks'
import { ReactComponent as IconOptionsMenu } from 'assets/icons/optionsMenu.svg'

const Options = () => {
  const { isMountedComponent, toggleComponentMount, isStartAnimation } =
    useAnimation({
      timeInMillisecondsToDisassembleComponent: 200
    })

  return (
    <S.Wrapper>
      <C.IconButton
        onClick={toggleComponentMount}
        icon={<IconOptionsMenu />}
        ariaLabel="Options menu"
      />
      <S.Container>
        {isMountedComponent && (
          <S.Menu
            role="menu"
            aria-orientation="vertical"
            startAnimation={isStartAnimation}
          >
            <S.Item
              onClick={toggleComponentMount}
              role="menuitem"
              tabIndex={0}
              aria-label="Options"
            >
              <C.Typography text="Options" type="text5" as="span" />
            </S.Item>
            <S.Item
              onClick={toggleComponentMount}
              role="menuitem"
              tabIndex={0}
              aria-label="Options"
            >
              <C.Typography text="Options" type="text5" as="span" />
            </S.Item>
            <S.Item
              onClick={toggleComponentMount}
              role="menuitem"
              tabIndex={0}
              aria-label="Options"
            >
              <C.Typography text="Options" type="text5" as="span" />
            </S.Item>
            <S.Item
              onClick={toggleComponentMount}
              role="menuitem"
              tabIndex={0}
              aria-label="Options"
            >
              <C.Typography text="Options" type="text5" as="span" />
            </S.Item>
            <S.Item
              onClick={toggleComponentMount}
              role="menuitem"
              tabIndex={0}
              aria-label="Options"
            >
              <C.Typography text="Options" type="text5" as="span" />
            </S.Item>
          </S.Menu>
        )}
      </S.Container>
    </S.Wrapper>
  )
}

export default Options
