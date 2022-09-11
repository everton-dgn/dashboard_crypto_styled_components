import { Outlet } from 'react-router-dom'
import * as S from './styles'
import * as C from 'components'

const DefaultTemplate = () => {
  return (
    <S.Grid>
      <C.VerticalMenu />
      <Outlet />
    </S.Grid>
  )
}

export default DefaultTemplate
