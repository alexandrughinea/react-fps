import React, { useEffect, useRef } from 'react'
import { safeDivide } from '../../utils.ts'
import {
  defaultAmplitudeGenerator,
  getColorByHeight,
} from './Histogram.utils.ts'
import { HistogramProps } from './Histogram.types.ts'

export const Histogram: React.FC<HistogramProps> = ({
  width = 220,
  height = 100,
  numBars = 20,
  updateInterval = 10,
  color = 'blue',
  amplitudeGenerator = defaultAmplitudeGenerator,
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const amplitudes = useRef<number[]>(globalThis.Array(numBars).fill(0))
  const frameCount = useRef(0)

  useEffect(() => {
    const maxWidth = globalThis.Number(width)
    const maxHeight = globalThis.Number(height)
    const barWidth = safeDivide(maxWidth, numBars)

    let rafId: number

    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')

    const updateHistogram = (newAmplitude: number) => {
      amplitudes.current.push(newAmplitude) // Add new amplitude
      amplitudes.current.shift() // Remove the oldest value
    }

    const animate = () => {
      frameCount.current++

      if (frameCount.current >= updateInterval) {
        // Reset frame counter
        frameCount.current = 0
        // Generate a new amplitude
        const newAmplitude = amplitudeGenerator?.(maxHeight)

        updateHistogram(newAmplitude)
      }

      // Clear and redraw the histogram
      ctx?.clearRect(0, 0, maxWidth, maxHeight)

      amplitudes.current.forEach((amplitude: number, i) => {
        if (!ctx) {
          return
        }

        ctx.fillStyle = getColorByHeight(amplitude, maxHeight, color)

        ctx?.fillRect(
          i * barWidth, // x
          maxHeight - amplitude, // y
          barWidth - 2, // maxWidth (-2 for spacing)
          amplitude // maxHeight
        )
      })

      rafId = globalThis.requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(rafId)
    }
  }, [amplitudeGenerator, updateInterval, numBars, height, width])

  return <canvas ref={canvasRef} width={width} height={height} {...props} />
}
