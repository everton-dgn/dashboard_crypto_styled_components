export type useAnimationType = {
  timeInMillisecondsToDisassembleComponent: number
  initialState?: boolean
  disableHook?: boolean
  defaultValueForHookDisabled?: boolean
}

export type UseAnimationReturnType = {
  isMountedComponent: boolean
  toggleComponentMount: () => void
  isStartAnimation: boolean
}
