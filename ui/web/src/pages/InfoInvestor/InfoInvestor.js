import React from 'react';
import { Card } from '../../components/Card/Card'
import { FadeInOnVisible } from '../../components/FadeInOnVisible/FadeInOnVisible'
import { Image } from '../../components/Image/Image'
import { Link } from '../../components/Link/Link'

import house2 from '../../assets/houses/contemporary/house-2.jpg'
import logo from '../../assets/build360-logo.svg'
import builderSVG from '../../assets/builder.svg'
import blueprintSVG from '../../assets/blueprint.svg'

import './InfoInvestor.css'

class InfoInvestorPage extends React.Component {
  render () {
    return (
      <section className="InfoUser">        
        <div className="top-content">
          <img className="HomePage-img" src={house2} />
          <Card className="hover-content">
            <p className="flex justify-center">
              <img src={logo} alt="Build360 logo" className="max-w-lg" />
            </p>
            <h2>Smarter Building. Simplified.</h2>
            <FadeInOnVisible className="next-section grid-column-2">
              <Card className="flex flex-col items-center">
                <img className="icon-l" alt="Builder" src={ builderSVG } />
                <h2 className="mt-4 text-2xl">I'm a builder</h2>
                <p className="text-center my-4">If you are a builder and want to know how Build360 can help you and your business.</p>
                <Link anchor to="#browse-builders" className="mt-auto">read more</Link>
              </Card>
              
              <Card className="flex flex-col items-center">
                <img className="icon-l" alt="Buyer" src={ blueprintSVG } />
                <h2 className="mt-4 text-2xl">I'm looking for a home</h2>
                <p className="text-center my-4">If you are looking to build a home, and want to use Build360 to build the home of your dreams</p>
                <Link anchor to="#browse-builders" className="mt-auto">read more</Link>
              </Card>
            </FadeInOnVisible>
          </Card>
        </div>
      </section>
    )
  }
}

export { InfoInvestorPage }