import { useSetPageTitle } from 'hooks'
import { useNavigate } from 'react-router-dom'
import * as S from './styles'
import * as C from 'components'

const Error = () => {
  useSetPageTitle({ pageTitle: 'Error Page' })
  const navigate = useNavigate()

  const handleRedirectHomePage = () => {
    navigate('/', { replace: true })
  }

  return (
    <S.Container role="main">
      <S.WrapperContent>
        <S.ImageError404 title="404 Error" />
        <S.WrapperButton>
          <C.Button
            text="Go to Home Page"
            aria-label="Go to Home Page"
            size="large"
            color="primary"
            onClick={handleRedirectHomePage}
            fullWidth={true}
          />
        </S.WrapperButton>
      </S.WrapperContent>
      <S.ImageNotFoundRobot title="Broken robot" />
    </S.Container>
  )
}

export default Error
