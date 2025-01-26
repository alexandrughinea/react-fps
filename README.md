# React FPS

A lightweight and customizable React component library for monitoring and visualizing FPS (Frames Per Second) in real-time.

## Features

- Real-time FPS monitoring
- Animated histogram visualization
- Customizable positioning and styling
- Runtime tracking
- TypeScript support
- Zero dependencies (except React)

## Installation

```bash
npm install @react-fps
```

## Components

### FPSView

The main component for displaying FPS and runtime information with a visual histogram.

```tsx
import { FPSView } from '@react-fps';

function App() {
  return <FPSView 
    position="top-right"
    fontSize={28}
    color="rgba(0,0,0,0.5)"
  />;
}
```

#### Props

- `position`: Positioning of the FPS view ('top-right', 'top-left', etc.)
- `fontSize`: Size of the FPS display text (default: 28)
- `color`: Color of the FPS display and histogram (default: 'rgba(0,0,0,0.5)')
- `className`: Additional CSS classes

### Histogram

A visual component that displays FPS data as an animated histogram.

## Hooks

### useAnimatedFPS

A hook that provides real-time FPS and runtime information.

```tsx
const { fps, runtime } = useAnimatedFPS(
  animationInterpolationTime?, // optional
  decimalCount? // optional, default: 2
);
```

### useAnimationFrame

A utility hook for handling animation frames with delta time calculation.

### useFPS

Core hook for FPS calculation and management.

## Utils

The library includes various utility functions for:
- FPS calculations
- Amplitude generation for histogram visualization
- Animation frame management

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Format code
npm run format
```

## TypeScript Support

This library is built with TypeScript and includes type definitions out of the box.

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.