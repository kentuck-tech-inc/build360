import React from 'react'
import { Card } from '../Card/Card'
import { FetchData } from '../FetchData/FetchData'
import { getMostRecent } from '../../api/Blog'
import { Link } from '../Link/Link'
import './RecentBlogs.css'

const BlogCards = ({ blogs }) => blogs
  .map(({ id, title, author, dateAdded, summary }) => (
    <Card key={id} className="flex flex-col">
      <h3>{title}</h3>
      { author && <small>by: {author}</small> }
      <small>{new Date(dateAdded).toLocaleDateString()}</small>
      <p className="my-4">
        {
          summary.length > 128
            ? summary.slice(0, 125) + '...'
            : summary
        }
      </p>
      <Link className="mt-auto" to={`/blog/${id}`}>Read Blog</Link>
    </Card>
  ))

const RecentBlogs = () => (
  <section className="RecentBlogs mt-4 content-grid grid-gap-4">
    <FetchData fetcher={getMostRecent} dataName="blogs">
      <BlogCards />
    </FetchData>
  </section>
)


export {RecentBlogs}
