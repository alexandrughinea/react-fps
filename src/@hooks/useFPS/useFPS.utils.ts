import { MAX_FPS_LIMIT } from './useFPS.const.ts'

export function calculateFPS(intervalInSeconds: number): number {
  if (intervalInSeconds === 0) {
    return 0
  }

  // Prevent negative values
  const safeInterval = globalThis.Math.abs(intervalInSeconds)

  // Prevent tiny values that could cause precision issues
  const minimumInterval = 1 / MAX_FPS_LIMIT // 1ms minimum

  if (safeInterval < minimumInterval) {
    return 1 / minimumInterval // Cap at 1000 FPS
  }

  // Calculate FPS
  return 1 / safeInterval
}
