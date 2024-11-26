type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

export interface FPSViewProps {
  position?: Position
  className?: string
  fontSize?: number
  color?: string
}
