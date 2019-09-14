import React from 'react'
import { FloorplanCard } from '../../components/FloorplanCard/FloorplanCard'
import { getBlueprint } from '../../api/Blueprint'
import { Link } from '../../components/Link/Link';  
import './FloorplanPage.css'

class FloorplanPage extends React.Component {
  state = {
    loading: true,
    error: false,
    floorplan: {}
  }

  componentDidMount() {
    const { id } = this.props.match.params
    if(id) {
      getBlueprint(id).then(floorplan => {
        this.setState({
          floorplan,
          loading: false
        })
      }).catch(() => {
        this.setState({
          error: true,
          loading: false
        })
      })
    }
  }

  render() {
    const { loading, error, floorplan } = this.state

    if(loading) {
      return (
        <section className="FloorplanPage mt-8">
          <Link to="/floorplans" className="text-l">Search for more floorplans</Link>
          <h2 className="mt-8">Loading floor plan...</h2>
        </section>
      )
    }

    if(error) {
      return (
        <section className="FloorplanPage mt-8">
          <Link to="/floorplans" className="text-l">Search for more floorplans</Link>
          <p className="mt-8">
            There was a problem while loading this floor plan,
            please try again later.
          </p>
        </section>
      )
    }

    return (
      <section className="FloorplanPage mt-8">
        <Link to="/floorplans" className="text-l">Search for more floor plans</Link>
        <FloorplanCard floorplan={floorplan} />
        <Link className="block mt-8" anchor to={floorplan.imageUrl}>Floor Plan Layout</Link>
      </section>
    )
  }
}

export {FloorplanPage}
