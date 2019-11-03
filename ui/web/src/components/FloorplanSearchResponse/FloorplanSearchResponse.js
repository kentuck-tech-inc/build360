
import React from 'react'
import classnames from 'classnames'
import { searchBlueprints } from '../../api/Blueprint'
import { FloorplanCard } from '../FloorplanCard/FloorplanCard'
import './FloorplanSearchResponse.css'

class FloorplanSearchResponse extends React.Component {
  state = {
    loading: true,
    error: false,
    floorplans: []
  }

  componentDidMount() {
    searchBlueprints(this.props.params).then(floorplans => {
      this.setState({ floorplans, loading: false, error: false })
    })
    .catch(() => {
      this.setState({ loading: false, error: true })
    })
  }

  render() {
    const { className } = this.props
    const { floorplans, loading, error } = this.state
    const classname = classnames(
      'FloorplanSearchResponse',
      {
        'error': error,
        'loading': loading
      },
      className
    )
    if(error) {
      return <p className={classname}>
        There was a problem while searching for floorplans,
        please try again later.
      </p>
    }

    if(loading) {
      return <p className={classname}>
        Searching for floorplans...
      </p>
    }

    return <ul className={classname}>
      {
        floorplans.map(floorplan => (
          <li key={floorplan.id}>
            <FloorplanCard isLink floorplan={floorplan} />
          </li>
        ))
      }
    </ul>
  }
}

export {FloorplanSearchResponse}
