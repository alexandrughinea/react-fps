import { useEffect, useRef } from 'react'
import { safeDivide } from '../utils.ts'

const MILLISECONDS = 1000

export function useAnimationFrame(
  callback: (time: number, delta: number) => void,
  dependencies: any[]
) {
  const performanceNow = globalThis.performance.now()
  const frame = useRef<number>(0)
  const init = useRef<number>(performanceNow)
  const last = useRef<number>(performanceNow)

  const frameRequestCallback: FrameRequestCallback = () => {
    const currentTimestamp = globalThis.performance.now()
    const timeInSeconds = safeDivide(
      currentTimestamp - init.current,
      MILLISECONDS
    )
    const deltaInSeconds = safeDivide(
      currentTimestamp - last.current,
      MILLISECONDS
    )

    last.current = currentTimestamp
    frame.current = globalThis.requestAnimationFrame(frameRequestCallback)

    callback(timeInSeconds, deltaInSeconds)
  }

  useEffect(() => {
    frame.current = globalThis.requestAnimationFrame(frameRequestCallback)

    return () => {
      cancelAnimationFrame(frame.current)
    }
  }, dependencies)

  return {
    frame,
    init,
    last,
  }
}
