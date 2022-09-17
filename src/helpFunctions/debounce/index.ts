import { DebounceReturnType } from './types'

export const debounce = (
  fun: any,
  timeInMilliseconds = 100
): DebounceReturnType => {
  let timer: NodeJS.Timeout
  return (event: UIEvent) => {
    timer && clearTimeout(timer)
    timer = setTimeout(fun, timeInMilliseconds, event)
  }
}
