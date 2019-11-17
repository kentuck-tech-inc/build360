import React from 'react'
import { FloorplanCard } from '../../components/FloorplanCard/FloorplanCard'
import { getBlueprint, fakeMap } from '../../api/Blueprint'
import { Link } from '../../components/Link/Link'
import { FloorplanCustomization } from '../../vr/FloorplanCustomization'
import { Estimate } from '../../components/Estimate/Estimate'
import { getSpecFromScene, getEstimateFromSpec }  from '../../vr/utils'
import './FloorplanPage.css'

class FloorplanPage extends React.Component {
  state = {
    loading: true,
    error: false,
    customize: false,
    sent: false,
    floorplan: {}
  }

  sceneRef = React.createRef()

  componentDidMount() {
    const { id } = this.props.match.params
    if(id) {
      getBlueprint(id).then(floorplan => {
        floorplan.map = fakeMap;
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

  onCustomizeClick = () => {
    if(!this.state.customize) {
      this.setState({ customize: true })
    }
  }

  sendQuote = () => {
    if(!this.sceneRef.current) return;
    const spec = getSpecFromScene(this.sceneRef.current)
    const estimate = getEstimateFromSpec(spec)

    console.log(spec, estimate)

    this.setState({ sent: true });
  }

  render() {
    const { loading, error, floorplan, customize, sent } = this.state

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
        <Link className="block my-8" anchor to={floorplan.imageUrl}>Floor Plan Layout</Link>
        <div>
          <button className="btn mb-8" onClick={this.onCustomizeClick}>Customize & Quote</button>
          { customize && <button className="btn mb-8 ml-8" onClick={this.sendQuote}>Send Build to Builders</button> }
          { customize && <Estimate className="mb-8" sceneRef={this.sceneRef} /> }
          { sent && <p className="mb-8">Build sent!</p>}
          { customize && <FloorplanCustomization floorplan={floorplan} sceneRef={this.sceneRef} /> }
        </div>
      </section>
    )
  }
}

export {FloorplanPage}
