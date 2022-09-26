import { Outlet } from 'react-router-dom'
import * as S from './styles'

const ErrorTemplate = () => (
  <S.Grid>
    <Outlet />
  </S.Grid>
)

export default ErrorTemplate
