import useTranslator from 'translations/useTranslator'
import { LanguageType } from './types'
import * as C from 'components'
import * as S from './styles'
import { ReactComponent as BrazilFlag } from 'assets/images/brazilFlag.svg'
import { ReactComponent as EuaFlag } from 'assets/images/euaFlag.svg'

export const ToggleTranslation = () => {
  const { i18n } = useTranslator()

  const handleChangeLanguage = (language: LanguageType) => {
    i18n?.changeLanguage(language)
  }

  const selectedLanguage = i18n.language as LanguageType

  return (
    <S.Container>
      <C.Flag
        image={<EuaFlag title="English" />}
        isSelected={selectedLanguage !== 'en-US'}
        onClick={() => handleChangeLanguage('en-US')}
      />
      <C.Flag
        image={<BrazilFlag title="Português" />}
        isSelected={selectedLanguage !== 'pt-BR'}
        onClick={() => handleChangeLanguage('pt-BR')}
      />
    </S.Container>
  )
}

export default ToggleTranslation
