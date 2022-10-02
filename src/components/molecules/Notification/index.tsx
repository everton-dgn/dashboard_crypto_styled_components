import { useTranslator } from 'translations'
import * as S from './styles'
import * as C from 'components'
import { ReactComponent as IconNotification } from 'assets/icons/notifications.svg'
import { NotificationProps } from './types'

const Notification = ({ hasNewsNotifications }: NotificationProps) => {
  const { t } = useTranslator()

  return (
    <S.Container hasNewsNotifications={hasNewsNotifications}>
      <C.IconButton
        icon={<IconNotification />}
        title={t('notifications')}
        ariaLabel={t('notifications')}
      />
    </S.Container>
  )
}

export default Notification
