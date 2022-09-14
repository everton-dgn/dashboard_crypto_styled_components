import { useRenderingByWindowSize } from 'hooks'
import { useCallback, useState } from 'react'
import { Outlet } from 'react-router-dom'
import * as S from './styles'
import * as C from 'components'

const DefaultTemplate = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const { windowSize } = useRenderingByWindowSize()

  const onOpenMenu = useCallback(() => {
    setIsOpenMenu(prevState => !prevState)
  }, [])

  return (
    <>
      {!windowSize.lg && <C.TopBar onClick={onOpenMenu} />}
      <S.Grid>
        <C.VerticalMenu isOpenMenu={isOpenMenu} onOpenMenu={onOpenMenu} />
        <Outlet />
      </S.Grid>
    </>
  )
}

export default DefaultTemplate
