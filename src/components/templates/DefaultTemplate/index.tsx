import { Outlet } from 'react-router-dom'
import * as S from './styles'

const DefaultTemplate = () => {
  return (
    <S.Grid>
      <S.WrapperPage>
        <Outlet />
      </S.WrapperPage>
    </S.Grid>
  )
}

export default DefaultTemplate
