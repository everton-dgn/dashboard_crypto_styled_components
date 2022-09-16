import { useCallback, useState } from 'react'
import { useAnimationType, UseAnimationReturnType } from './types'

export const useAnimation = ({
  timeInMillisecondsToDisassembleComponent,
  initialState = false,
  disableHook = false,
  defaultValueForHookDisabled = true
}: useAnimationType): UseAnimationReturnType => {
  const [isMountedComponent, setIsMountedComponent] = useState(initialState)
  const [isStartAnimation, setIsStartAnimation] = useState(initialState)

  const toggleComponentMount = useCallback(() => {
    if (isMountedComponent) {
      setIsStartAnimation(false)
      return setTimeout(
        () => setIsMountedComponent(false),
        timeInMillisecondsToDisassembleComponent
      )
    }
    setIsStartAnimation(true)
    setIsMountedComponent(true)
  }, [isMountedComponent, timeInMillisecondsToDisassembleComponent])

  if (disableHook) {
    return {
      isMountedComponent: defaultValueForHookDisabled,
      toggleComponentMount: () => null,
      isStartAnimation: defaultValueForHookDisabled
    }
  }

  return { isMountedComponent, toggleComponentMount, isStartAnimation }
}
