export function getBlueprints() {
  return fetch('https://d8zwbjo2i6.execute-api.us-east-1.amazonaws.com/latest/blueprints').then(response => {
    return response.json()
  })
}