import './FPSView.css'
import { useAnimatedFPS } from '../../@hooks'
import { useMemo } from 'react'
import { Histogram } from '../Histogram'
import { FPSViewProps } from './FPSView.types.ts'
import { FPS_VIEW_CLASSES } from './FPSView.const.ts'
import { generateAmplitudeWithFPS } from './FPSView.utils.ts'

export const FPSView: React.FC<FPSViewProps> = ({
  position = 'top-right',
  className,
  fontSize = 28,
  color = 'rgba(0,0,0,0.5)',
  ...props
}) => {
  const { runtime, fps } = useAnimatedFPS()
  const rootClasses = useMemo(() => {
    return [
      FPS_VIEW_CLASSES.root,
      FPS_VIEW_CLASSES.position[position],
      className,
    ]
      .filter(globalThis.Boolean)
      .join(' ')
  }, [className, position])
  const amplitudeGenerator = (canvasHeight: number) =>
    generateAmplitudeWithFPS(canvasHeight, fps)

  return (
    <div {...props} className={rootClasses} style={{ color }}>
      <div className="fps--view--container">
        <Histogram color={color} amplitudeGenerator={amplitudeGenerator} />
        <div title="FPS" style={{ fontSize }}>
          {fps} FPS
        </div>
        <div title="Total runtime">{runtime} Runtime (seconds)</div>
      </div>
    </div>
  )
}
