import { blogsById, blogs } from './mockBlogs'
import { wait } from '../utils/promiseUtils'

export function getBlog(id) {
  return wait(1000).then(() => blogsById[id]);
}

export function getMostRecent(count) {
  return wait(1000).then(() => {
    return blogs
      .sort((blog1, blog2) => {
        const time1 = new Date(blog1.dateAdded).getTime()
        const time2 = new Date(blog2.dateAdded).getTime()

        return time2 - time1
      })
      .slice(0, count)
  });
}

export function searchBlogs(query) {
  return wait(1000).then(() => {
    return blogs.filter((blog) => {
      const values = [
        blog.author,
        blog.title,
        blog.summary
      ]
      const upperQuery = query.toUpperCase()
      return values.some(value => value.toUpperCase().indexOf(upperQuery) > -1)
    })
  })
}