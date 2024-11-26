import { safeDivide } from '../../utils'

export function defaultAmplitudeGenerator(canvasHeight: number): number {
  return canvasHeight
}

export function getColorByHeight(
  value: number,
  maxValue: number,
  color = 'red'
): string {
  const normalizedValue = safeDivide(value, maxValue) // Normalize value relative to maxValue

  if (normalizedValue <= 0.25) {
    return 'blue' // Lowest range
  } else if (normalizedValue <= 0.5) {
    return 'green' // Mid-low range
  } else if (normalizedValue <= 0.75) {
    return 'yellow' // Mid-high range
  } else {
    return color // Highest range
  }
}
