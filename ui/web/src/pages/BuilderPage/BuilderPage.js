import React from 'react'
import { BuilderCard } from '../../components/BuilderCard/BuilderCard'
import { BuilderDetails } from '../../components/BuilderDetails/BuilderDetails'
import { BuilderGallary } from '../../components/BuilderGallary/BuilderGallary'
import { BuilderRating } from '../../components/BuilderRating/BuilderRating'
import { getBuilder } from '../../api/Builder'
import './BuilderPage.css'

class BuilderPage extends React.Component {
  state = {
    builder: {},
    loading: true
  }

  componentDidMount() {
    const { id } = this.props.match.params
    if(id) {
      getBuilder(id).then(builder => {
        this.setState({
          builder,
          loading: false
        })
      })
    }

    fetch('https://d8zwbjo2i6.execute-api.us-east-1.amazonaws.com/latest/blueprints').then(data => {
      this.setState({
        blueprints: data
      })
    })
  }

  render () {
    const { loading, builder, blueprints } = this.state

    return loading
      ? <article className="BuilderPage"><h2>Loading builder...</h2></article>
      : (
        <article className="BuilderPage">
          <BuilderCard builder={builder} />
          <BuilderDetails builder={builder} />
          <BuilderGallary builder={builder} />
          <BuilderRating builder={builder} />
        </article>
      )
  }
}

export { BuilderPage }

/**
 * Builder page will contain a couple of sections
 * - builder card (this can be reused on search page)
 *  - should contain basic information like image, name, location
 * - builder details
 *  - should contain bio and additional contact information
 * - builder gallary
 *  - should contain images of things they have built
 *  - maybe blueprints will go here?
 * - builder rating
 *  - should contain rating stat aggregations
 *  - should contain reviews
 */