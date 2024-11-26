import { HTMLProps } from 'react'

export interface HistogramProps extends HTMLProps<HTMLCanvasElement> {
  numBars?: number
  updateInterval?: number
  color?: string

  amplitudeGenerator?(canvasHeight: number): number
}
