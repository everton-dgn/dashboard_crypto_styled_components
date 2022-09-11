export const creditCardNumberFormatter = (value: number): string => {
  return value.toString().replace(/^(\d{4})(\d{4})+/g, '$1 **** **** $2')
}
