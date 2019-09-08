import { builders, buildersById } from './mockBuilders'

export function searchBuilders(query) {
  return new Promise((resolve, reject) => {
    console.log(`searching with query: ${query}`)
    const matchingBuilders = builders.filter(({companyName, owner, locations}) => {
      const upperQuery = query.toUpperCase()
      return companyName.toUpperCase().indexOf(upperQuery) > -1
        || owner.toUpperCase().indexOf(upperQuery) > -1
        || locations.toUpperCase().indexOf(upperQuery) > -1
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