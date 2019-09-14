let last = 0

export function generateId() {
  let next = Date.now()
  if(next <= last) {
    next = last + 1
  }
  last = next
  return last.toString(32)
}

export function camelCase(str) {
  const words = str.replace(/-/g, ' ').replace(/_/g, ' ').split(' ')
  const [firstWord, ...restWords] = words
  const cappedWords = restWords.map(word => word.slice(0,1).toUpperCase() + word.slice(1))
  return [firstWord, ...cappedWords].join('')
}