import { ReactComponent as IconBtc } from 'assets/icons/cryptocurrency/btc.svg'
import { ReactComponent as IconEth } from 'assets/icons/cryptocurrency/eth.svg'
import { ReactComponent as IconIota } from 'assets/icons/cryptocurrency/iota.svg'
import { ReactComponent as IconBnb } from 'assets/icons/cryptocurrency/bnb.svg'
import { ReactComponent as IconDash } from 'assets/icons/cryptocurrency/dash.svg'
import { ReactComponent as Visa } from 'assets/images/visa.svg'
import userAvatar from 'assets/images/userAvatar.webp'
import avatar1 from 'assets/images/avatar1.webp'
import avatar2 from 'assets/images/avatar2.webp'

export const CRYPTO_DATA = [
  {
    currency: 'BTC',
    name: 'Bitcoin',
    isPositive: false,
    currentPercentageVariation: 1.21,
    lastDayPercentageChange: 1.21,
    changePercentOfTheWeek: 1.93,
    totalPercentage: 80,
    price: 4_333.45,
    icon: <IconBtc title="BTC" />
  },
  {
    currency: 'ETH',
    name: 'Ethereum',
    isPositive: true,
    currentPercentageVariation: 3.45,
    lastDayPercentageChange: 3.45,
    changePercentOfTheWeek: 3.89,
    totalPercentage: 49,
    price: 287_301.09,
    icon: <IconEth title="ETH" />
  },
  {
    currency: 'IOTA',
    name: 'Iota',
    isPositive: true,
    currentPercentageVariation: 0.12,
    lastDayPercentageChange: 0.12,
    changePercentOfTheWeek: 0.55,
    totalPercentage: 32,
    price: 3_272.44,
    icon: <IconIota title="IOTA" />
  },
  {
    currency: 'BNB',
    name: 'Binance Coin',
    isPositive: true,
    currentPercentageVariation: 2.14,
    lastDayPercentageChange: 2.14,
    changePercentOfTheWeek: 3.92,
    totalPercentage: 55,
    price: 87_677.12,
    icon: <IconBnb title="BNB" />
  },
  {
    currency: 'DASH',
    name: 'Dash',
    isPositive: true,
    currentPercentageVariation: 5.09,
    lastDayPercentageChange: 5.09,
    changePercentOfTheWeek: 6.77,
    totalPercentage: 89,
    price: 174.05,
    icon: <IconDash title="DASH" />
  }
]

export const USER_DATA = {
  name: 'Éverton Toffanetto',
  email: 'evertondgn@hotmail.com',
  isPremium: true,
  hasNewsNotifications: true,
  urlImage: userAvatar,
  wallet: 8_900.0,
  flagLogo: <Visa title="visa" />
}

export const QUICK_TRANSFER_DATA = [
  {
    name: 'Anddrey Wisher',
    urlImage: avatar1,
    flagLogo: <Visa title="visa" />,
    cardNumber: 2039237843455690
  },
  {
    name: 'Allan Sylvester',
    urlImage: avatar2,
    flagLogo: <Visa title="visa" />,
    cardNumber: 4589576529834888
  },
  {
    name: 'John Doe 1',
    urlImage: avatar1,
    flagLogo: <Visa title="visa" />,
    cardNumber: 3401459045687755
  },
  {
    name: 'John Doe 2',
    urlImage: avatar2,
    flagLogo: <Visa title="visa" />,
    cardNumber: 434582765381092
  },
  {
    name: 'John Doe 3',
    urlImage: avatar1,
    flagLogo: <Visa title="visa" />,
    cardNumber: 5789102938475645
  },
  {
    name: 'John Doe 4',
    urlImage: avatar2,
    flagLogo: <Visa title="visa" />,
    cardNumber: 3478474729293838
  },
  {
    name: 'John Doe 5',
    urlImage: avatar1,
    flagLogo: <Visa title="visa" />,
    cardNumber: 1010291029835628
  },
  {
    name: 'John Doe 6',
    urlImage: avatar2,
    flagLogo: <Visa title="visa" />,
    cardNumber: 4739487556001128
  },
  {
    name: 'John Doe 7',
    urlImage: avatar1,
    flagLogo: <Visa title="visa" />,
    cardNumber: 3478565629293838
  },
  {
    name: 'John Doe 8',
    urlImage: avatar2,
    flagLogo: <Visa title="visa" />,
    cardNumber: 101029102989834
  },
  {
    name: 'John Doe 9',
    urlImage: avatar1,
    flagLogo: <Visa title="visa" />,
    cardNumber: 4817487556001128
  }
]

export const CHART_DATA = [
  {
    month: 'Sep',
    wallet: 28.02
  },
  {
    month: 'Oct',
    wallet: 19.45
  },
  {
    month: 'Nov',
    wallet: 24.09
  },
  {
    month: 'Dec',
    wallet: 35.06
  },
  {
    month: 'Jan',
    wallet: 38.91
  },
  {
    month: 'Feb',
    wallet: 49.01
  }
]
