import earcut from 'earcut';
import { radToDeg, distance, ftToMeters } from '../utils/numberUtils'

const toArray = (arr, item) => arr.concat(item)

export const WALL_HEIGHT = ftToMeters(9)
export const WALL_THICKNESS = 0.05
export const defaultMaterial = 'color: white'
export const defaultWallMaterial = "shader: standard; color: #fff; src: #brick; repeat: 1.5, 0.75; roughness: 0.9;"
export const defaultFloorMaterial = "shader: standard; color: #fff; src: #wood; repeat: 2, 2; roughness: 0.8;"
export const defaultCeilingMaterial = "shader: standard; color: #fff; src: #stucco; repeat: 4, 4; roughness: 0.8;"

export function getAllWalls(floorplan) {
  const floorplanCustomization = floorplan.customization || {}
  const floors = floorplan.floors

  return (
    floors.map(({ name: floorName, level, rooms, customization: floorCustomization = {} }) => 
      rooms.map(({ name: roomName, walls, customization: roomCustomization = {} }) =>
        walls.map(({ start, end, windows, doors, customization: wallCustomization = {} }) => {
          const totalDistance = distance(start.x, start.z, end.x, end.z)
          const direction = Math.atan2(end.z - start.z, end.x - start.x)
          const xPos = (start.x + end.x) / 2
          const zPos = (start.z + end.z) / 2
          const yPos = (WALL_HEIGHT / 2) + (WALL_HEIGHT * level)
          const customizations = [
            wallCustomization,
            roomCustomization.wallCustomization,
            floorCustomization.wallCustomization,
            floorplanCustomization.wallCustomization,
            { material: defaultWallMaterial }
          ]

          return {
            floorName,
            roomName,
            windows,
            doors,
            position: [xPos, yPos, zPos].join(' '),
            width: totalDistance,
            height: WALL_HEIGHT,
            depth: WALL_THICKNESS,
            rotation: [0, -radToDeg(direction), 0].join(' '),
            material: getMaterial(customizations),
            customizations,
          }
        })
      ).reduce(toArray, [])
    ).reduce(toArray, [])
  )
}

export function getAllFloorsOrCeilings(floorplan, ceiling = false) {
  const floorplanCustomization = floorplan.customization || {}
  const floors = floorplan.floors

  return (
    floors.map(({ name: floorName, level, rooms, customization: floorCustomization = {} }) => 
      rooms.map(({ id: roomId, name: roomName, walls, customization: roomCustomization = {} }) => {
        const shape = getRoomShape(walls)
        const flattenedShape = shape.reduce((arr, pos) => arr.concat([pos.x, pos.z]), [])
        const indexes = earcut(flattenedShape)
        const verticies = indexes.map((index) => {
          const pos = shape[index]
          const correctedLevel = ceiling
            ? level + 1
            : level
          return [pos.x, correctedLevel * WALL_HEIGHT,  pos.z]
        })
        const customizations = ceiling
        ? [
          roomCustomization.ceilingCustomization,
          floorCustomization.ceilingCustomization,
          floorplanCustomization.ceilingCustomization,
          { material: defaultCeilingMaterial }
        ]
        : [
          roomCustomization.floorCustomization,
          floorCustomization.floorCustomization,
          floorplanCustomization.floorCustomization,
          { material: defaultFloorMaterial }
        ]

        const correctedVerticies = ceiling
          ? verticies
          : verticies.reverse()

        return {
          floorName,
          roomName,
          roomId,
          verticies: correctedVerticies,
          material: getMaterial(customizations)
        }
      }).reduce(toArray, [])
    ).reduce(toArray, [])
  )
}

export function getMaterial(customizations) {
  const customMaterial = customizations.find((customization) => customization && customization.material)
  if(!customMaterial || !customMaterial.material) {
    return defaultMaterial
  }

  return customMaterial.material
}

// expecting walls to be in order, each adjacent or close to the next
export function getRoomShape(walls) {
  return walls.reduce((points, wall) => {
    if(points.length === 0 ) {
      points.push(wall.start)
      points.push(wall.end)
      return points
    }

    const lastPoint = points[points.length - 1]
    const matchesStart = lastPoint.x === wall.start.x
      && lastPoint.z === wall.start.z
    
    if(matchesStart) {
      points.push(wall.end)
      return points
    }

    points.push(wall.start)
    points.push(wall.end)

    return points
  }, [])
}