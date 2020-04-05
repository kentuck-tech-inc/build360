import React from 'react'
import { FloorplanCard } from '../../components/FloorplanCard/FloorplanCard'
import { getBlueprint, fakeMap } from '../../api/Blueprint'
import { Link } from '../../components/Link/Link'
import { SendQuote } from '../../components/SendQuote/SendQuote'
import './FloorplanPage.css'
import { BuilderMaterialCalculator } from '../../components/BuilderMaterialCalculator/BuilderMaterialCalculator'

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

    this.setState({ sent: true })
  }

  saveSpec = (spec) => {
    this.setState({spec})
  }

  render() {
    const { loading, error, floorplan, customize, sent, spec } = this.state

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
        <FloorplanCard floorplan={floorplan} className="mt-8"/>
        <Link className="block my-8" anchor to={floorplan.imageUrl}>Floor Plan Layout</Link>
        <BuilderMaterialCalculator floorplan={floorplan} />
      </section>
    )
  }
}

export {FloorplanPage}
