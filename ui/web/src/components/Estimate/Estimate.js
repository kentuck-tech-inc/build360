
import React from 'react'
import classnames from 'classnames'
import { getSpecFromScene, getEstimateFromSpec }  from '../../vr/utils'
import './Estimate.css'

class Estimate extends React.Component {
  state = {
    estimate: undefined
  }

  calculateEstimate = () => {
    const scene = this.props.sceneRef.current
    if(!scene) return;
    const spec = getSpecFromScene(scene)
    const estimate = getEstimateFromSpec(spec)

    this.setState({ estimate })
  }

  displayMoney = (value, precision=2) => `$${
    value.toFixed(precision)
      .split('')
      .reverse()
      .reduce((groups, digit, index) => {
        const currentGroup = groups[groups.length - 1]
        if (currentGroup.length >= 3) {
          groups.push(digit)
        } else {
          groups[groups.length - 1] = currentGroup + digit
        }

        return groups
      }, [''])
      .join(',')
      .split('')
      .reverse()
      .join('')
  }`

  render() {
    const { className } = this.props
    const { estimate } = this.state

    if(!estimate) {
      return (
        <section className={classnames("Estimate", className)}>
          <button className="btn" onClick={this.calculateEstimate}>Calculate Estimate</button>
        </section>
      )
    }

    return (
      <section className={classnames("Estimate", className)}>
        <button className="btn mb-4" onClick={this.calculateEstimate}>Calculate Estimate</button>
        <article>
          <p className="mb-4">Minimum Cost: {this.displayMoney(estimate.min, 0)}</p>
          <p className="mb-4">Maximum Cost: {this.displayMoney(estimate.max, 0)}</p>
        </article>
      </section>
    )
  }
}

export {Estimate}
