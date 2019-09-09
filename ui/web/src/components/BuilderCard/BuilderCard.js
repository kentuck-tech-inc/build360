
import React from 'react'
import classnames from 'classnames'
import {
  calenderCheck,
  checklist,
  constructionType,
  family,
  idea,
  dollar,
  rating
} from '../../assets/icons'
import { Image } from '../Image/Image'
import { RandomImage } from '../RandomImage/RandomImage'
import { WithLink } from '../WithLink/WithLink'
import './BuilderCard.css'

function slug(name) {
  return encodeURIComponent(name.split(' ').join('-'));
}

class BuilderCard extends React.Component {
  render() {
    const { builder, isLink, className } = this.props
    const currentYear = new Date().getFullYear()
    return builder ? (
      <section className={classnames('BuilderCard', className)}>
        <WithLink isLink={isLink} to={`/builder/${slug(builder.companyName)}/${builder.id}`}>
          <h2 className="BuilderCard-companyName">
            {builder.companyName}
          </h2>
        </WithLink>
        <article className="BuilderCard-grid mt-4">
          <WithLink isLink={isLink} to={`/builder/${slug(builder.companyName)}/${builder.id}`}>
            <RandomImage
              className="BuilderCard-profile-img"
              index={parseInt(builder.id)}
              from="builders"
            />
          </WithLink>
          <div className="BuilderCard-info">
            <table className="inline-block -m-2 mr-8" cellSpacing={0} cellPadding="8px">
              <tbody>
                <tr>
                  <td><Image src={rating} className="icon-m"/></td>
                  <td>Build360 Score:</td>
                  <td>{builder.rating}</td>
                </tr>
                <tr>
                  <td><Image src={constructionType} className="icon-m"/></td>
                  <td>Construction Type:</td>
                  <td>{builder.type}</td>
                </tr>
                <tr>
                  <td><Image src={calenderCheck} className="icon-m"/></td>
                  <td>Avg. Completion Time:</td>
                  <td><b>need data</b></td>
                </tr>
                {/* <tr>
                  <td><Image src={family} className="icon-m"/></td>
                  <td>Ownership:</td>
                  <td><b>need data</b></td>
                </tr> */}
              </tbody>
            </table>
            <table className="inline-block -m-2" cellSpacing={0} cellPadding="8px">
              <tbody>
                <tr>
                  <td><Image src={idea} className="icon-m"/></td>
                  <td>Years in operation:</td>
                  <td>{currentYear - parseInt(builder.founded)}</td>
                </tr>
                <tr>
                  <td><Image src={dollar} className="icon-m"/></td>
                  <td>Price Per Square Foot:</td>
                  <td><b>need data</b></td>
                </tr>
                <tr>
                  <td><Image src={checklist} className="icon-m"/></td>
                  <td>Units Built:</td>
                  <td><b>need data</b></td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>
      </section>
    ) : null
  }
}

export {BuilderCard}
