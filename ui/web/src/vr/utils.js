import earcut from earcut;
import { radToDeg, distance, ftToMeters } from '../utils/numberUtils'

const toArray = (arr, item) => arr.concat(item)

export const WALL_HEIGHT = ftToMeters(9)
export const WALL_THICKNESS = 0.05
export const defaultMaterial = 'color: white'

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
            floorplanCustomization.wallCustomization
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
            rotation: [0, radToDeg(direction), 0].join(' '),
            material: getMaterial(customizations),
            customizations,
          }
        })
      ).reduce(toArray, [])
    ).reduce(toArray, [])
  )
}

export function getAllFloors(floorplan) {
  const floorplanCustomization = floorplan.customization || {}
  const floors = floorplan.floors

  return (
    floors.map(({ name: floorName, level, rooms, customization: floorCustomization = {} }) => 
      rooms.map(({ id: roomId, name: roomName, walls, customization: roomCustomization = {} }) => {
        const shape = getRoomShape(walls)

        return {
          floorName,
          roomName,
          roomId,
          floor: {

          }
        }
      }).reduce(toArray, [])
    ).reduce(toArray, [])
  )
}

export function getMaterial(customizations) {
  const material = customizations.find((customization) => customization && customization.material)
  if(!material) {
    return defaultMaterial
  }

  return material
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