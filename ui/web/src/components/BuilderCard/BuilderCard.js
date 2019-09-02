
import React from 'react'
import './BuilderCard.css'
import builderDefault from '../../assets/builder-default.jpg'
import { Image } from '../Image/Image'
import { Link } from '../Link/Link'

function slug(name) {
  return encodeURIComponent(name.split(' ').join('-'));
}

class BuilderCard extends React.Component {
  generateContactInfo = (builder) => {
    const {contactInfo = {}} = builder
    const {
      primaryEmail,
      primaryPhone,
      addressStreet1,
      addressStreet2,
      addressCity,
      addressState,
      addressZip,
      socialMedia
    } = contactInfo
    return (
      <>
        {
          primaryEmail && <>
            <a
              className="BuilderCard-email-link"
              href={`mailto::${primaryEmail}`}
            >
              {primaryEmail}
            </a>
            <br/>
          </>
        }
        {
          primaryPhone && <>
            <a
              className="BuilderCard-phone-link"
              href={`tel::${primaryPhone}`}
            >
              {primaryPhone}
            </a>
            <br/>
          </>
        }
        {
          addressStreet1 && addressCity && addressState && addressZip && <>
            <span className="BuilderCard-addressStreet1">{addressStreet1}</span><br/>
            {addressStreet2 && <><span className="BuilderCard-addressStreet2">{addressStreet2}</span><br/></>}
            <span className="BuilderCard-addressCity">{addressCity}</span>, <span className="BuilderCard-addressState">{addressState}</span><br/>
            <span className="BuilderCard-addressZip">{addressZip}</span>
          </>
        }
      </>
    )
  }

  render() {
    const { builder, isLink } = this.props
    return builder ? (
      <section className="BuilderCard mt-8">
        <Image
          className="BuilderCard-profile-img"
          defaultSrc={builderDefault}
          src={builderDefault}
          alt=""
        />
        { 
          isLink
            ? (
              <Link to={`/builder/${slug(builder.companyName)}/${builder.id}`}>
                <h2 className="BuilderCard-companyName">
                  {builder.companyName}
                </h2>
              </Link>
            )
            : (
              <h2 className="BuilderCard-companyName">
                {builder.companyName}
              </h2>
            )
        }
        <address className="BuilderCard-contactInfo">
          {this.generateContactInfo(builder)}
        </address>
      </section>
    ) : null
  }
}

export {BuilderCard}