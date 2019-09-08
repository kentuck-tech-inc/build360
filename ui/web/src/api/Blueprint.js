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