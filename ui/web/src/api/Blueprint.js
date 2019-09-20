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

// export const fakeMap = {
//   unit: 'inches',
//   floors: [{
//     name: 'Ground Floor',
//     level: 0,
//     rooms: [ 
//       {
//         name: 'Great Room',
//         id: '0',
//         walls: [
//           {
//             start: {
//               x: -104,
//               z: -96
//             },
//             end: {
//               x: 104,
//               z: -96
//             }
//           },
//           {
//             start: {
//               x: 104,
//               z: 96
//             },
//             end: {
//               x: -104,
//               z: 96
//             }
//           },
//           {
//             start: {
//               x: -104,
//               z: 96
//             },
//             end: {
//               x: -104,
//               z: -96
//             }
//           }
//         ]
//       },
//       {
//         name: 'Dining Room',
//         id: '1',
//         walls: [
//           {
//             start: {
//               x: 104,
//               z: -96
//             },
//             end: {
//               x: 224,
//               z: -96
//             }
//           },
//           {
//             start: {
//               x: 224,
//               z: -96
//             },
//             end: {
//               x: 224,
//               z: 96
//             }
//           },
//           {
//             start: {
//               x: 224,
//               z: 96
//             },
//             end: {
//               x: 104,
//               z: 96
//             }
//           }
//         ]
//       },
//       {
//         name: 'Foyer',
//         id: '0',
//         walls: [
//           // {
//           //   start: {
//           //     x: -104,
//           //     z: 96
//           //   },
//           //   end: {
//           //     x: -42,
//           //     z: 96
//           //   }
//           // },
//           {
//             start: {
//               x: -42,
//               z: 96
//             },
//             end: {
//               x: -42,
//               z: 228
//             }
//           },
//           {
//             start: {
//               x: -42,
//               z: 228
//             },
//             end: {
//               x: -104,
//               z: 228
//             },
//           },
//           {
//             start: {
//               x: -104,
//               z: 228
//             },
//             end: {
//               x: -104,
//               z: 96
//             }
//           }
//         ]
//       },
//       {
//         name: 'Kitchen',
//         id: '0',
//         walls: [
//           {
//             start: {
//               x: -42,
//               z: 96
//             },
//             end: {
//               x: 124,
//               z: 96
//             }
//           },
//           {
//             start: {
//               x: 124,
//               z: 96
//             },
//             end: {
//               x: 124,
//               z: 228
//             }
//           },
//           {
//             start: {
//               x: 124,
//               z: 228
//             },
//             end: {
//               x: -42,
//               z: 228
//             },
//           },
//           {
//             start: {
//               x: -42,
//               z: 228
//             },
//             end: {
//               x: -42,
//               z: 96
//             }
//           }
//         ]
//       }
//     ].map(room => {
//       room.walls = room.walls.map(wall => {
//         wall.start.x = ftToMeters(wall.start.x / 12)
//         wall.start.z = ftToMeters(wall.start.z  / 12)
//         wall.end.x = ftToMeters(wall.end.x  / 12)
//         wall.end.z = ftToMeters(wall.end.z  / 12)
//         return wall
//       })
//       return room;
//     })
//   }]
// }