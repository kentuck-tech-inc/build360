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