import { ReactComponent as IconBtc } from 'assets/icons/cryptocurrency/btc.svg'
import { ReactComponent as IconEth } from 'assets/icons/cryptocurrency/eth.svg'
import { ReactComponent as IconIota } from 'assets/icons/cryptocurrency/iota.svg'
import { ReactComponent as IconBnb } from 'assets/icons/cryptocurrency/bnb.svg'
import { ReactComponent as IconDash } from 'assets/icons/cryptocurrency/dash.svg'

export const DATA_CRYPTO = [
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
