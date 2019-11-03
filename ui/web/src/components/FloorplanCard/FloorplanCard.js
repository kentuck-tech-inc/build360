
import React from 'react'
import { WithLink } from '../WithLink/WithLink'
import './FloorplanCard.css'
import { Image } from '../Image/Image'
import { RandomImage } from '../RandomImage/RandomImage'
import {
  bedroom,
  bathroom,
  sqFeet,
  floors
} from '../../assets/icons'

class FloorplanCard extends React.Component {
  static defaultProps = {
    isLink: false,
    floorplan: {}
  }
  render() {
    const { isLink, floorplan } = this.props
    return (
      <section className="FloorplanCard mt-8">
        <div className="FloorplanCard-title">
          <WithLink isLink={isLink} to={`/floorplan/${floorplan.id}`}>
            <RandomImage index={floorplan.id} from="houses"/>
          </WithLink>
        </div>
        <div className="FloorplanCard-info">
          <table className="inline-block -m-2 mr-8" cellSpacing={0} cellPadding="8px">
            <tbody>
              <tr>
                <td><Image src={bedroom} className="icon-m"/></td>
                <td>Bedrooms:</td>
                <td>{floorplan.bedrooms}</td>
              </tr>
              <tr>
                <td><Image src={bathroom} className="icon-m"/></td>
                <td>Bathrooms:</td>
                <td>{floorplan.bathrooms}</td>
              </tr>
            </tbody>
          </table>
          <table className="inline-block -m-2" cellSpacing={0} cellPadding="8px">
            <tbody>
              <tr>
                <td><Image src={sqFeet} className="icon-m"/></td>
                <td>Square footage:</td>
                <td>{floorplan.totalSqFeet}</td>
              </tr>
              <tr>
                <td><Image src={floors} className="icon-m"/></td>
                <td>Floors:</td>
                <td>{floorplan.floors}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    )
  }
}

export {FloorplanCard}
