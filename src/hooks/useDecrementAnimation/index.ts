import { useEffect, useRef, useState } from 'react'
import { UseDecrementAnimationType } from './types'

export const useDecrementAnimation = ({
  total,
  durationInMilliseconds = 1200
}: UseDecrementAnimationType) => {
  const [currentValue, setCurrentValue] = useState(0)
  const timer = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const stepTime = durationInMilliseconds / total
    if (currentValue === total) {
      timer.current && clearTimeout(timer.current)
    } else {
      timer.current = setTimeout(() => {
        setCurrentValue(prevState => prevState + 1)
      }, stepTime)
    }
  }, [currentValue, durationInMilliseconds, total])

  return [currentValue]
}
