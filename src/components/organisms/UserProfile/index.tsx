import T from 'theme'
import * as S from './styles'
import * as C from 'components'
import { UserProfileProps } from './types'
import { ReactComponent as IconOptionsMenu } from 'assets/icons/optionsMenu.svg'
import premium from 'assets/images/premium.webp'

const UserProfile = ({ userData }: UserProfileProps) => {
  return (
    <C.CardLayout>
      <S.Wrapper>
        <C.Avatar
          urlImage={userData.urlImage}
          name={userData.name}
          size="large"
        />

        <S.WrapperText>
          <C.Typography
            text={userData.name}
            type="text5"
            as="span"
            weight={500}
          />
          <C.Typography
            text={`${userData.email}`}
            type="text6"
            as="span"
            weight={500}
            color={T.colors.textSecondary}
          />
          <S.WrapperPremium>
            {userData.isPremium && (
              <>
                <S.Image src={premium} alt="Premium" />
                <C.Typography
                  text="Premium"
                  type="text6"
                  as="span"
                  weight={500}
                  color={T.colors.gold}
                />
              </>
            )}
          </S.WrapperPremium>
        </S.WrapperText>

        <S.WrapperIcons>
          <C.Notification
            hasNewsNotifications={userData.hasNewsNotifications}
          />
          <C.IconButton icon={<IconOptionsMenu />} ariaLabel="Options menu" />
        </S.WrapperIcons>
      </S.Wrapper>
    </C.CardLayout>
  )
}

export default UserProfile
