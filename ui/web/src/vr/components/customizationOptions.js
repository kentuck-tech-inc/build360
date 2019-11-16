export const wallOptions = [
  {
    color: '#FFF8E7',
    src: '#dryWall',
    repeat: { x: 2, y: 2 },
    roughness: 0.8
  },
  {
    color: '#fff',
    src: '#brick',
    normalMap: '#brickNorm',
    repeat: { x: 6, y: 3 },
    normalTextureRepeat: { x: 6, y: 3 },
    roughness: 0.9
  }
]

export const floorOptions = [
  {
    color: '#fff',
    src: '#hexbump',
    repeat: { x: 20, y: 20 },
    roughness: 0.9
  },
  {
    color: '#fff',
    src: '#whiteTiles',
    repeat: { x: 2, y: 5 },
    roughness: 0.5
  },
  {
    color: '#fff',
    src: '#oakPlanks',
    normalMap: '#oakPlanksNorm',
    repeat: { x: 8, y: 8 },
    normalTextureRepeat: { x: 8, y: 8 },
    roughness: 0.8
  }
]

export const ceilingOptions = [
  {
    color: '#fff',
    src: '#stucco',
    normalMap: '#stuccoNorm',
    repeat: { x: 4, y: 4 },
    normalTextureRepeat: { x: 4, y: 4 },
    roughness: 0.8
  }
]