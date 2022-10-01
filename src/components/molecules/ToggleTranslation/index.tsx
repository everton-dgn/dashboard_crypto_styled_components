import useTranslator from 'translations/useTranslator'
import { LanguageType } from './types'
import * as C from 'components'
import * as S from './styles'
import BrazilFlag from 'assets/images/brazilFlag.svg'
import EuaFlag from 'assets/images/euaFlag.svg'

export const ToggleTranslation = () => {
  const { i18n } = useTranslator()

  const handleChangeLanguage = (language: LanguageType) => {
    i18n?.changeLanguage(language)
  }

  const selectedLanguage = i18n.language as LanguageType

  return (
    <S.Container>
      <C.Flag
        image={EuaFlag}
        altDescription="English"
        isSelected={selectedLanguage !== 'en-US'}
        onClick={() => handleChangeLanguage('en-US')}
      />
      <C.Flag
        image={BrazilFlag}
        altDescription="Português"
        isSelected={selectedLanguage !== 'pt-BR'}
        onClick={() => handleChangeLanguage('pt-BR')}
      />
    </S.Container>
  )
}

export default ToggleTranslation
