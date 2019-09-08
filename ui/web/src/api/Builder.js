import { builders, buildersById } from './mockBuilders'

export function searchBuilders(query) {
  return new Promise((resolve, reject) => {
    console.log(`searching with query: ${query}`)
    const matchingBuilders = builders.filter(({companyName, owner, locations}) => {
      return companyName.indexOf(query) > -1
        || owner.indexOf(query) > -1
        || locations.indexOf(query) > -1
    })
    setTimeout(() => {
      resolve(matchingBuilders)
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