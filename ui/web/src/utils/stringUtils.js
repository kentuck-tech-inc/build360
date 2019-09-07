let last = 0

export function generateId() {
  let next = Date.now()
  if(next <= last) {
    next = last + 1
  }
  last = next
  return last.toString(32)
}