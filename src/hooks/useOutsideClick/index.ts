import { useCallback, useEffect } from 'react'
import { UseOutsideClickReturnType, UseOutsideClickType } from './types'

export const useOutsideClick = ({
  isMountedComponent,
  toggleComponentMount
}: UseOutsideClickType): UseOutsideClickReturnType => {
  const handleOutsideClick = useCallback(
    (e: Event) => {
      if (e.target !== e.currentTarget) toggleComponentMount()
    },
    [toggleComponentMount]
  )

  const handleAlternateVisibility = useCallback(() => {
    if (!isMountedComponent) {
      document.addEventListener('click', handleOutsideClick)
      return () => document.removeEventListener('click', handleOutsideClick)
    }
  }, [handleOutsideClick, isMountedComponent])

  useEffect(() => {
    if (isMountedComponent) {
      document.addEventListener('click', handleOutsideClick)
    }
    return () => document.removeEventListener('click', handleOutsideClick)
  }, [handleOutsideClick, isMountedComponent])

  return handleAlternateVisibility
}
