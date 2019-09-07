export function wrappingModulus( value, total ) {
  return ((value % total) + total) % total
}

export function transform( value, fromMin, fromMax, toMin, toMax ) {
  return ((value - fromMin) * ((toMax - toMin) / (fromMax - fromMin))) + toMin
}