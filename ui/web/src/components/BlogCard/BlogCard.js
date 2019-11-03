
import React from 'react'
import './BlogCard.css'

class BlogCard extends React.Component {
  render() {
    const { blog = {} } = this.props
    const { id, title, author, dateAdded, summary } = blog
    return (
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
    )
  }
}

export {BlogCard}
