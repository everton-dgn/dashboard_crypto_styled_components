export const currencyFormatter = (
  value: number,
  setsDecimalPlaces?: number
): string => {
  const currency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: setsDecimalPlaces ?? 2,
    maximumFractionDigits: setsDecimalPlaces ?? 2
  })
  return currency.format(value)
}
