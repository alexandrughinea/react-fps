import { useCallback, useRef } from 'react'
import Ola from 'ola'
import { DEFAULT_ANIMATION_INTERPOLATION_TIME } from './useFPS.const.ts'
import { calculateFPS } from './useFPS.utils.ts'

export function useFPS(
  animationInterpolationTime: number = DEFAULT_ANIMATION_INTERPOLATION_TIME
): [number, (time: number) => void] {
  const ref = useRef(0)
  const setValue = useCallback(
    (value: number) => {
      const computedFPSValue = calculateFPS(value)

      if (ref.current) {
        ref.current = computedFPSValue
      } else {
        ref.current = new Ola(computedFPSValue, animationInterpolationTime)
      }
    },
    [animationInterpolationTime]
  )

  return [globalThis.Math.floor(ref.current), setValue]
}
