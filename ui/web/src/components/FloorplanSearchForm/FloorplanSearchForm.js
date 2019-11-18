import React from 'react'
import { range } from '../../utils/numberUtils'
import './FloorplanSearchForm.css'

class FloorplanSearchForm extends React.Component {
  makeNumberOptions = (min, max, step) => range(min, max, step)
    .map((number) => (
      <option key={number} value={number}>{number}+</option>
    ))
  render() {
    return (
      <form className="FloorplanSearchForm" action="/floorplans">
        <h2 className="mb-4">Browse our directory of current house plans provided by our builders</h2>
        <div className="inputs">
          <label>
            Bedrooms
            <select className="Input" name="bedrooms" defaultValue="">
              <option value="">Any</option>
              { this.makeNumberOptions(1, 5) }
            </select>
          </label>
          <label>
            Bathrooms
            <select className="Input" name="bathrooms" defaultValue="">
              <option value="">Any</option>
              { this.makeNumberOptions(1, 5) }
            </select>
          </label>
          <label>
            Floors
            <select className="Input" name="floors" defaultValue="">
              <option value="">Any</option>
              { this.makeNumberOptions(1, 3) }
            </select>
          </label>
          <label>
            Total Square Feet
            <select className="Input" name="sqft" defaultValue="">
              <option value="">Any</option>
              { this.makeNumberOptions(500, 4000, 500) }
            </select>
          </label>
          <label>
            Style
            <select className="Input" name="style" defaultValue="">
              <option value="">Any</option>
            </select>
          </label>
        </div>
        <button className="btn mt-8">Search</button>
      </form>
    )
  }
}

export {FloorplanSearchForm}

/**
 * api:
 * id - equals id
 * bedrooms - gte number of bedrooms
 * bathrooms - gte number of bathrooms
 * floors - gte number of floors
 * sqft - gte total square feet
 * style - equals style
 */