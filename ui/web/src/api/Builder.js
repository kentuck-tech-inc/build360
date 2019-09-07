import { builders, buildersById } from './mockBuilders'

export function searchBuilders(query) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(builders)
    }, 1000)
  })
}

export function getBuilder(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(buildersById[id])
    }, 1000)
  })
}