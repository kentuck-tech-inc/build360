import React from 'react';

import {BuilderSearchForm} from '../../components/BuilderSearchForm/BuilderSearchForm'
import {BuilderSearchResponse} from '../../components/BuilderSearchResponse/BuilderSearchResponse'
import './BuilderSearchPage.css'



class BuilderSearchPage extends React.Component {
  get query() {
    const params = new URLSearchParams(this.props.location.search)
    const query = params.get('query')
    return query
  }

  render () {
    return (
      <section className="BuilderSearchPage">
        <BuilderSearchForm />
        <BuilderSearchResponse query={this.query} />
      </section>
    )
  }
}

export { BuilderSearchPage }