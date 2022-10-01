import { useSetPageTitle } from 'hooks'
import { useNavigate } from 'react-router-dom'
import useTranslator from 'translations/useTranslator'
import * as S from './styles'
import * as C from 'components'

const Error = () => {
  const { t } = useTranslator()
  useSetPageTitle({ pageTitle: t('pages.error.titlePage') })
  const navigate = useNavigate()

  const handleRedirectHomePage = () => {
    navigate('/', { replace: true })
  }

  return (
    <S.Container role="main">
      <S.WrapperContent>
        <S.ImageError404 title={t('pages.error.titleImageError404')} />
        <S.WrapperButton>
          <C.Button
            text={t('pages.error.buttonReturn')}
            aria-label={t('pages.error.buttonReturn')}
            size="large"
            color="primary"
            onClick={handleRedirectHomePage}
            fullWidth={true}
          />
        </S.WrapperButton>
      </S.WrapperContent>
      <S.ImageNotFoundRobot title={t('pages.error.titleImageNotFoundRobot')} />
    </S.Container>
  )
}

export default Error
