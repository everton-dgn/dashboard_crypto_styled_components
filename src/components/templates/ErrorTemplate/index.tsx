import { Outlet } from 'react-router-dom'
import * as S from './styles'

const ErrorTemplate = () => (
  <S.CustomDiv100vh>
    <S.Grid>
      <Outlet />
    </S.Grid>
  </S.CustomDiv100vh>
)

export default ErrorTemplate
