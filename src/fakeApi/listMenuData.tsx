import { ReactComponent as IconHome } from 'assets/icons/home.svg'
import { ReactComponent as IconAnalytics } from 'assets/icons/analytics.svg'
import { ReactComponent as IconSettings } from 'assets/icons/settings.svg'
import { ReactComponent as IconSafety } from 'assets/icons/safety.svg'
import { ReactComponent as IconCalendar } from 'assets/icons/calendar.svg'
import { ReactComponent as IconSupport } from 'assets/icons/support.svg'
import { ReactComponent as IconLogout } from 'assets/icons/logout.svg'

export const LIST_MENU_DATA = [
  {
    text: 'Home',
    icon: <IconHome />,
    route: '/'
  },
  {
    text: 'Analytics',
    icon: <IconAnalytics />,
    route: '/'
  },
  {
    text: 'Settings',
    icon: <IconSettings />,
    route: '/'
  },
  {
    text: 'Safety',
    icon: <IconSafety />,
    route: '/'
  },
  {
    text: 'Calendar',
    icon: <IconCalendar />,
    route: '/'
  },
  {
    text: 'Support',
    icon: <IconSupport />,
    route: '/'
  },
  {
    text: 'Log out',
    icon: <IconLogout />,
    route: '/'
  }
]
