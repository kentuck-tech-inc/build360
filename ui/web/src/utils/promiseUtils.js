export function wait(waitTime) {
  return new Promise((resolve) => {
    setTimeout(resolve, waitTime)
  })
}