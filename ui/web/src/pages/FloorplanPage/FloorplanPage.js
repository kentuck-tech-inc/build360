import React from 'react'
import { FloorplanCard } from '../../components/FloorplanCard/FloorplanCard'
import { getBlueprint } from '../../api/Blueprint'
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
          <h2>Loading floorplan...</h2>
        </section>
      )
    }

    if(error) {
      return (
        <section className="FloorplanPage mt-8">
          <p>
            There was a problem while loading this floorplan,
            please try again later.
          </p>
        </section>
      )
    }

    return (
      <section className="FloorplanPage mt-8">
        <FloorplanCard floorplan={floorplan} />
      </section>
    )
  }
}

export {FloorplanPage}
