
import React from 'react'
import classnames from 'classnames'
import { getBlueprints } from '../../api/Blueprint'
import { RandomImage } from '../RandomImage/RandomImage'
import './BuilderGallary.css'

class BuilderGallary extends React.Component {
  state = {
    blueprints: [],
    loading: true
  }

  componentDidMount() {
    getBlueprints().then(blueprints => {
      this.setState({ blueprints, loading: false })
    }).catch((error) => {
      console.log(`[BuilderGallary] Problem getting blueprints: `, error)
      this.setState({ loading: false, error: true })
    })
  }

  render() {
    const { className } = this.props
    const { blueprints, loading, error } = this.state
    const classname = classnames(
      'BuilderGallary',
      {
        'error': error,
        'loading': loading
      },
      className
    )

    if(error) {
      return <p className={classname}>
        There was a problem getting blueprints,
        please try again later.
      </p>
    }

    if(loading) {
      return <p className={classname}>
        getting blueprints...
      </p>
    }

    return (
      <section className={classname}>
        <h2 className="mb-2">Floor Plans</h2>
        <ul className="flex overflow-x-auto pb-4">
          {
            blueprints.map((blueprint, index) => (
              <li key={index} className="BlueprintCard">
                <RandomImage index={index} from="houses" />
                <h3>Bedrooms:</h3><strong>{blueprint.bedrooms}</strong>
                <h3>Bathrooms:</h3><strong>{blueprint.bathrooms}</strong>
                <h3>Floors:</h3><strong>{blueprint.floors}</strong>
              </li>
            ))
          }
        </ul>
      </section>
    )
  }
}

/**
 * Download different home pictures
 * build a random house component
 * use for gallary
 */

export {BuilderGallary}
