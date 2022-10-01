import { i18n } from 'translations'
import { CurrencyFormatterProps } from './types'

export const currencyFormatter = ({
  value,
  setsDecimalPlaces
}: CurrencyFormatterProps): string => {
  const language = i18n.t('language')
  const currency = i18n.t('currency')
  const currentCurrency = new Intl.NumberFormat(language, {
    style: 'currency',
    currency,
    minimumFractionDigits: setsDecimalPlaces ?? 2,
    maximumFractionDigits: setsDecimalPlaces ?? 2
  })
  return currentCurrency.format(value)
}
