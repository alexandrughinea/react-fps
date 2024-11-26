export function generateAmplitudeWithFPS(height: number, fps: number): number {
  const maxFPS = globalThis.Math.max(fps, 1) // Prevent division by zero
  const smoothnessFactor = 10

  return height * (maxFPS / (maxFPS + smoothnessFactor)) // Dynamically scale amplitude based on FPS
}
