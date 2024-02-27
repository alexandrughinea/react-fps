import { useAnimatedFPS } from '../../@hooks'
import { useMemo } from 'react'

type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

interface FPSViewProps {
  position?: Position
  className?: string
  fontSize?: number
  color?: string
}

const classes = {
  root: 'fps-view',
  position: {
    'top-left': 'fps-view--top-left',
    'top-right': 'fps-view--top-right',
    'bottom-left': 'fps-view--bottom-left',
    'bottom-right': 'fps-view--bottom-right',
  },
} as const

export const FPSView: React.FC<FPSViewProps> = ({
  position = 'top-right',
  className,
  fontSize = 28,
  color = '#123edd',
  ...props
}) => {
  const { runtime, fps } = useAnimatedFPS()

  const rootClasses = useMemo(() => {
    return [classes.root, classes.position[position], className]
      .filter(globalThis.Boolean)
      .join(' ')
  }, [className, position])
  return (
    <div {...props} className={rootClasses} style={{ color }}>
      <div title="FPS" style={{ fontSize }}>
        {fps} FPS
      </div>
      <div title="Total runtime">{runtime} Runtime (seconds)</div>
    </div>
  )
}
