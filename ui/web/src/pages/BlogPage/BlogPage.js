
import React from 'react'
import { FetchData } from '../../components/FetchData/FetchData'
import './BlogPage.css'
import { getBlog } from '../../api/Blog'

const PageContent = ({ blog = {} }) => {
  const { title, author, dateAdded, summary, content } = blog
  return (
    <article className="BlogPage">
      <h1>{title}</h1>
      { author && <small>by: {author}</small> }
      <small>{new Date(dateAdded).toLocaleDateString()}</small>
      <p>{summary}</p>
      { content() }
    </article>
  )
}

const BlogPage = ({match: { params: { id } = {}} = {}}) => (
  <FetchData dataName="blog" fetcher={() => getBlog(id)}>
    <PageContent />
  </FetchData>
)

export {BlogPage}
