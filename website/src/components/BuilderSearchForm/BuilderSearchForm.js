import React from 'react'
import PropTypes from 'prop-types'

import './BuilderSearchForm.css'

class BuilderSearchForm extends React.Component {
  static propTypes = {
    advancedSearch: PropTypes.bool
  }

  static defaultProps = {
    advancedSearch: true
  }

  render () {
    return (
      <form action="/builders">
        <label htmlFor="BuilderSearch">Research your next builder now.</label>
        <input id="BuilderSearch" type="search" name="query" placeholder="🔍 Builder Name or Zip Code" />
        <button>Search</button>
      </form>
    )
  }
}

export { BuilderSearchForm }