
import React from 'react'
import { WithLink } from '../WithLink/WithLink'
import './FloorplanCard.css'
import { RandomImage } from '../RandomImage/RandomImage';

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
                <td>ICON</td>
                <td>Bedrooms:</td>
                <td>{floorplan.bedrooms}</td>
              </tr>
              <tr>
                <td>ICON</td>
                <td>Bathrooms:</td>
                <td>{floorplan.bathrooms}</td>
              </tr>
            </tbody>
          </table>
          <table className="inline-block -m-2" cellSpacing={0} cellPadding="8px">
            <tbody>
              <tr>
                <td>ICON</td>
                <td>Square footage:</td>
                <td>{floorplan.totalSqFeet}</td>
              </tr>
              <tr>
                <td>ICON</td>
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
