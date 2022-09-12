import { useEffect, useRef, useState } from 'react'
import { UseDecrementAnimationType } from './types'

export const useDecrementAnimation = ({ total }: UseDecrementAnimationType) => {
  const [currentValue, setCurrentValue] = useState(0)
  const timer = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const stepTime = () => {
      const durationFactor = 1400
      const percent = (100 * currentValue) / total
      if (percent > 80) {
        return (durationFactor / total) * (currentValue / total + 2)
      }
      return (durationFactor / total) * (currentValue / total)
    }
    if (currentValue === total) {
      timer.current && clearTimeout(timer.current)
    } else {
      timer.current = setTimeout(() => {
        setCurrentValue(prevState => prevState + 1)
      }, stepTime())
    }
  }, [currentValue, total])

  return [currentValue]
}