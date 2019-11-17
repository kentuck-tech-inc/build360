export function wrappingModulus( value, total ) {
  return ((value % total) + total) % total
}

export function transform( value, fromMin, fromMax, toMin, toMax ) {
  return ((value - fromMin) * ((toMax - toMin) / (fromMax - fromMin))) + toMin
}

export function range( min, max, step=1 ) {
  if(max < min) {
    return range(max, min, step)
  }
  const size = Math.floor((max - min) / step)
  return [min].concat(new Array(size).fill().map((_, index) => min + ((index + 1) * step)))
}

export const TAU = 2 * Math.PI;
export const PI = Math.PI;

export function degToRad(deg) {
  return (PI / 180) * deg;
}

export function radToDeg(rad) {
  return (180 / PI) * rad;
}

export function ftToMeters(ft) {
  return ft * 0.3048
}

export function sqMetersToSqFt(meters) {
  return `${(meters * 10.76391).toFixed(2)}ft²`
}

export function distance(startX, startY, endX, endY) {
  return Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2))
}