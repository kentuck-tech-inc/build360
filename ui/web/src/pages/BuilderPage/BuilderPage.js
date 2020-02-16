import React from 'react'
import { BuilderCard } from '../../components/BuilderCard/BuilderCard'
import { BuilderDetails } from '../../components/BuilderDetails/BuilderDetails'
import { BuilderGallary } from '../../components/BuilderGallary/BuilderGallary'
import { BuilderRating } from '../../components/BuilderRating/BuilderRating'
import { getBuilder } from '../../api/Builder'
import { Link } from '../../components/Link/Link'
import './BuilderPage.css'
import  {BuilderMaterialCalculator}  from '../../components/BuilderMaterialCalculator/BuilderMaterialCalculator'


class BuilderPage extends React.Component {
  state = {
    loading: true,
    error: false,
    builder: {}
  }

  componentDidMount() {
    const { id } = this.props.match.params
    if(id) {
      getBuilder(id).then(builder => {
        this.setState({
          builder,
          loading: false
        })
      }).catch(() => {
        this.setState({
          loading: false,
          error: true
        })
      })
    }
  }

  render () {
    const { loading, error, builder } = this.state

    if(loading) {
      return (
        <article className="BuilderPage mt-8">
          <Link to="/builders" className="text-l">Search for more builders</Link>
          <h2 className="mt-8">Loading builder...</h2>
        </article>
      )
    }

    if(error) {
      return (
        <article className="BuilderPage mt-8">
          <Link to="/builders" className="text-l">Search for more builders</Link>
          <p className="mt-8">
            There was a problem while loading this builder,
            please try again later.
          </p>
        </article>
      )
    }


    return (
      <article className="BuilderPage mt-8">
        <Link to="/builders" className="text-l">Search for more builders</Link>
        <BuilderCard className="mt-8" builder={builder} />        
        <BuilderMaterialCalculator />   
        <BuilderDetails className="mt-8" builder={builder} />
        <BuilderGallary className="mt-8" builder={builder} />
        <BuilderRating className="mt-8" builder={builder} />
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