import { generateId } from "./stringUtils";

const elements = {}
const viewportObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    const cb = elements[entry.target.id]
    if(cb && entry.isIntersecting) {
      cb(entry, observer)
    }
  })
});

export function observe(target, fn) {
  if(!target.id) {
    target.id = generateId()
  }
  elements[target.id] = fn
  viewportObserver.observe(target)
}

export function unobserve(target) {
  delete elements[target.id]
  viewportObserver.unobserve(target)
}