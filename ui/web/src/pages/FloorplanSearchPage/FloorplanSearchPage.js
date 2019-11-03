import React from 'react'
import { FloorplanSearchForm } from '../../components/FloorplanSearchForm/FloorplanSearchForm'
import { FloorplanSearchResponse } from '../../components/FloorplanSearchResponse/FloorplanSearchResponse'
import './FloorplanSearchPage.css'

class FloorplanSearchPage extends React.Component {
  get params() {
    const params = new URLSearchParams(this.props.location.search)
    return params
  }
  
  render () {
    const hasParams = Boolean(this.params.toString())
    return (
      <section className="FloorplanSearchPage">
        <FloorplanSearchForm />
        <hr className="my-8"/>
        {
          hasParams && <FloorplanSearchResponse params={this.params} />
        }
      </section>
    )
  }
}

export {FloorplanSearchPage}
