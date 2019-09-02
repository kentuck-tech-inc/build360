import { builders, buildersById } from './mockBuilders'

export function searchBuilders(query) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(builders)
    }, 1000)
  })
}