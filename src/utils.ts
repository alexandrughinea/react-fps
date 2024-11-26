export function safeDivide(
  numerator?: number,
  denominator?: number,
  fallback = 0
): number {
  if (
    !numerator ||
    !denominator ||
    !globalThis.Number.isFinite(numerator) ||
    !globalThis.Number.isFinite(denominator)
  ) {
    return fallback
  }

  return numerator / denominator
}
