import { ReactComponent as IconHome } from 'assets/icons/home.svg'
import { ReactComponent as IconAnalytics } from 'assets/icons/analytics.svg'
import { ReactComponent as IconSettings } from 'assets/icons/settings.svg'
import { ReactComponent as IconSafety } from 'assets/icons/safety.svg'
import { ReactComponent as IconCalendar } from 'assets/icons/calendar.svg'
import { ReactComponent as IconSupport } from 'assets/icons/support.svg'
import { ReactComponent as IconLogout } from 'assets/icons/logout.svg'
import { i18n } from 'translations'

export const LIST_MENU_DATA = () => [
  {
    text: i18n.t('verticalMenu.listMenu.0'),
    icon: <IconHome />,
    route: '/'
  },
  {
    text: i18n.t('verticalMenu.listMenu.1'),
    icon: <IconAnalytics />,
    route: '/'
  },
  {
    text: i18n.t('verticalMenu.listMenu.2'),
    icon: <IconSettings />,
    route: '/'
  },
  {
    text: i18n.t('verticalMenu.listMenu.3'),
    icon: <IconSafety />,
    route: '/'
  },
  {
    text: i18n.t('verticalMenu.listMenu.4'),
    icon: <IconCalendar />,
    route: '/'
  },
  {
    text: i18n.t('verticalMenu.listMenu.5'),
    icon: <IconSupport />,
    route: '/'
  },
  {
    text: i18n.t('verticalMenu.listMenu.6'),
    icon: <IconLogout />,
    route: '/'
  }
]
