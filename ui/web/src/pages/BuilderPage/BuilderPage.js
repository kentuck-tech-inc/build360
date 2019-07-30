import React from 'react';
import './BuilderPage.css'

class BuilderPage extends React.Component {
  render () {
    const {match} = this.props
    const {id} = match.params
    return (
      <div>
        Page for builder {id}
      </div>
    )
  }
}

export { BuilderPage }