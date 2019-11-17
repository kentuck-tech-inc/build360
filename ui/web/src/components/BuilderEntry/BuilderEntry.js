import React from 'react'
import PropTypes from 'prop-types'

import './BuilderEntry.css'

class BuilderEntry extends React.Component {
  static propTypes = {

  }

  render() {
    return (
      <form className="BuilderEntry" action="/builders/addEdit">

      </form>
    )
  }
}

export {BuilderEntry}