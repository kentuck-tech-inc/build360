
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
        <article className="Estimate-grid">
          <article className="Estimate-grid">
            <h3>Estimated Minimum</h3>
            <output></output>

            <label>Material Cost:</label>
            <output>{this.displayMoney(estimate.materialEstimateTotal.min, 0)}</output>

            <label>Labor Cost:</label>
            <output>{this.displayMoney(estimate.laborEstimate.minSum, 0)}</output>

            <label>Total Cost:</label>
            <output>
              {this.displayMoney(estimate.materialEstimateTotal.min + estimate.laborEstimate.minSum, 0)}
            </output>
          </article>
          <article className="ml-8 Estimate-grid">
            <h3>Estimated Maximum</h3>
            <output></output>

            <label>Material Cost:</label>
            <output>{this.displayMoney(estimate.materialEstimateTotal.max, 0)}</output>

            <label>Labor Cost:</label>
            <output>{this.displayMoney(estimate.laborEstimate.maxSum, 0)}</output>

            <label>Total Cost:</label>
            <output>
              {this.displayMoney(estimate.materialEstimateTotal.max + estimate.laborEstimate.maxSum, 0)}
            </output>
          </article>
        </article>
      </section>
    )
  }
}

export {Estimate}
