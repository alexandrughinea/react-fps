import { useState } from 'react'
import { useFPS } from './useFPS'
import { useAnimationFrame } from './useAnimationFrame.ts'

const DEFAULT_RUNTIME_VALUE = '-'
const DECIMAL_COUNT = 2

export function useAnimatedFPS(
  animationInterpolationTime?: number,
  decimalCount = DECIMAL_COUNT
) {
  const [runtime, setRuntime] = useState(DEFAULT_RUNTIME_VALUE)
  const [fps, setFPS] = useFPS(animationInterpolationTime)

  useAnimationFrame((time, delta) => {
    const formattedTime = time?.toFixed(decimalCount)

    setRuntime(formattedTime)
    setFPS(delta)
  }, [])

  return {
    runtime,
    fps,
  }
}
