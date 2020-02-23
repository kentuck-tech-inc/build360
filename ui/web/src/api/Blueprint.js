import { ftToMeters } from '../utils/numberUtils'

const baseUrl = 'https://d8zwbjo2i6.execute-api.us-east-1.amazonaws.com/latest/blueprints'

export function getBlueprints() {
  return fetch(baseUrl).then(response => {
    return response.json()
  })
}

export function searchBlueprints(params) {
  const path = 'search'
  const queryString = params.toString()
  return fetch(`${baseUrl}/${path}?${queryString}`).then(response => {
    return response.json()
  })
}

export function getBlueprint(id) {
  const path = 'search'
  return fetch(`${baseUrl}/${path}?id=${id}`).then(response => {
    return response.json()
  }).then(responseJSON => {
    return responseJSON.length > 0
      ? responseJSON[0]
      : {}
  })
}

export const fakeMap = {
  floors: [{
    name: 'Ground Floor',
    level: 0,
    rooms: [{
      name: 'Living Room',
      id: '0',
      walls: [
        {
          start: {
            x: -10,
            z: -10
          },
          end: {
            x: 10,
            z: -10
          }
        },
        {
          start: {
            x: 10,
            z: -10
          },
          end: {
            x: 10,
            z: 10
          }
        },
        {
          start: {
            x: 10,
            z: 10
          },
          end: {
            x: -10,
            z: 10
          }
        },
        {
          start: {
            x: -10,
            z: 10
          },
          end: {
            x: -10,
            z: -10
          }
        }
      ].map((wall) => {
        wall.start.x = ftToMeters(wall.start.x)
        wall.start.z = ftToMeters(wall.start.z)
        wall.end.x = ftToMeters(wall.end.x)
        wall.end.z = ftToMeters(wall.end.z)
        return wall
      })
    }]
  }]
}

