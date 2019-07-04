import React from 'react';

import {BuilderSearchForm} from '../../components/BuilderSearchForm/BuilderSearchForm'
import './BuilderSearchPage.css'



class BuilderSearchPage extends React.Component {
  render () {
    const params = new URLSearchParams(this.props.location.search)
    const query = params.get('query')
    return (
      <>
        {
          query &&
          <p>
            Looking for: {query}
          </p>
        }
        <BuilderSearchForm />
      </>
    )
  }
}

export { BuilderSearchPage }