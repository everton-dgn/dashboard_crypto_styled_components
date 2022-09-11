import * as C from 'components'
import * as S from './styles'
import T from 'theme'
import { useTheme } from 'hooks'
import artificialIntelligence from 'assets/images/artificialIntelligence.webp'
import { LIST_MENU_DATA } from 'fakeApi'

const VerticalMenu = () => {
  const { theme, setTheme, isDarkMode } = useTheme()

  return (
    <S.Container>
      <S.Content>
        <C.Logo />

        <C.MenuList dataListMenu={LIST_MENU_DATA} />
      </S.Content>

      <S.WrapperHelp>
        <S.WrapperTextHelp>
          <C.Typography
            text="Need Help?"
            type="text1"
            as="h2"
            align="center"
            weight={500}
          />
          <C.Typography
            text="Virtual Assistant Will Help You"
            type="text5"
            as="p"
            align="center"
            weight={400}
            color={T.colors.grey}
          />
        </S.WrapperTextHelp>
        <img
          width={232}
          height={220}
          src={artificialIntelligence}
          alt="Begin"
        />
      </S.WrapperHelp>

      <S.WrapperTextFooter>
        <S.WrapperSwitch>
          <C.Switch
            id="changeTheme"
            initialValue={!!isDarkMode}
            onClick={setTheme}
            ariaLabel={`Switch to ${theme}`}
          />
          <C.Typography
            text={`Switch to ${theme}`}
            type="text6"
            as="p"
            color={T.colors.grey}
          />
        </S.WrapperSwitch>

        <C.Typography
          text="© NFT System 2022"
          type="text6"
          as="p"
          color={T.colors.grey}
        />
      </S.WrapperTextFooter>
    </S.Container>
  )
}

export default VerticalMenu
