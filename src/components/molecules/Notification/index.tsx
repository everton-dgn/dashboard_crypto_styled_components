import * as S from './styles'
import * as C from 'components'
import { ReactComponent as IconNotification } from 'assets/icons/notifications.svg'
import { NotificationProps } from './types'

const Notification = ({ hasNewsNotifications }: NotificationProps) => {
  return (
    <S.Container hasNewsNotifications={hasNewsNotifications}>
      <C.IconButton icon={<IconNotification />} ariaLabel="Notifications" />
    </S.Container>
  )
}

export default Notification
