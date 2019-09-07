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
      <form className="BuilderSearchForm" action="/builders">
        <label htmlFor="BuilderSearch">Find your next builder now.</label>
        <div className="input-wrapper">
          <input id="BuilderSearch" type="search" name="query" placeholder="🔍 Builder Name or Zip Code" />
          <button className="btn">Search</button>
        </div>
      </form>
    )
  }
}

export { BuilderSearchForm }