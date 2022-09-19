import { useAnimation, useOutsideClick, useRenderingByWindowSize } from 'hooks'
import { useCallback } from 'react'
import { Outlet } from 'react-router-dom'
import * as S from './styles'
import * as C from 'components'

const DefaultTemplate = () => {
  const { windowSize } = useRenderingByWindowSize()
  const { isMountedComponent, toggleComponentMount, isStartAnimation } =
    useAnimation({
      timeInMillisecondsToDisassembleComponent: 300,
      initialState: false,
      disableHook: windowSize.lg
    })
  const handleAlternateVisibility = useOutsideClick({
    isMountedComponent,
    toggleComponentMount
  })

  const onOpenMenu = useCallback(() => {
    toggleComponentMount()
  }, [toggleComponentMount])

  return (
    <>
      {!windowSize.lg && <C.TopBar onClick={handleAlternateVisibility} />}
      <S.Grid>
        {isMountedComponent && (
          <C.VerticalMenu
            isOpenMenu={isMountedComponent}
            onOpenMenu={onOpenMenu}
            startAnimation={isStartAnimation}
          />
        )}
        <Outlet />
      </S.Grid>
    </>
  )
}

export default DefaultTemplate
