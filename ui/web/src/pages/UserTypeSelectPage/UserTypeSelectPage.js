import React from 'react';
import { Card } from '../../components/Card/Card'
import { FadeInOnVisible } from '../../components/FadeInOnVisible/FadeInOnVisible'
import { Image } from '../../components/Image/Image'
import { Link } from '../../components/Link/Link'

import house2 from '../../assets/houses/contemporary/house-2.jpg'
import logo from '../../assets/build360-logo.svg'
import builderSVG from '../../assets/builder.svg'
import blueprintSVG from '../../assets/blueprint.svg'
import receiveQuotes from '../../assets/receive-quotes.jpg'

import './UserTypeSelectPage.css'
import WithRole from '../../components/WithRole/WithRole';

class UserTypeSelectPage extends React.Component {
  render () {
    return (
      <section className="UserTypeSelect">        
        <div className="top-content">
          <img alt="house" className="HomePage-img" src={house2} />
          <Card className="hover-content">
            <p className="flex justify-center">
              <img src={logo} alt="Build360 logo" className="max-w-lg" />
            </p>
            <h2>Smarter Building. Simplified.</h2>
            <FadeInOnVisible className="next-section grid-column-2">          
              <Card className="flex flex-col items-center">
                <img alt="blueprint" className="icon-l" alt="Buyer" src={ blueprintSVG } />
                <h2 className="mt-4 text-2xl">I'm looking for a home</h2>
                <p className="text-center my-4">If you are looking to build a home, and want to use Build360 to build the home of your dreams.</p>
                <Link to="/InfoUser" className="mt-auto">read more</Link>
              </Card>

              <Card className="flex flex-col items-center">
                <img alt="builder" className="icon-l" alt="Builder" src={ builderSVG } />
                <h2 className="mt-4 text-2xl">I'm a builder</h2>
                <p className="text-center my-4">If you are a builder and want to know how Build360 can help you and your business.</p>
                <Link to="/InfoBuilder" className="mt-auto">read more</Link>
              </Card>

              <WithRole Role="Investor">
                <Card className="flex flex-col items-center">
                  <img alt="investor" className="icon-l" alt="Builder" src={ receiveQuotes } />
                  <h2 className="mt-4 text-2xl">I'm an Investor</h2>
                  <p className="text-center my-4">If you are an investor looking for more information.</p>
                  <Link to="/InfoInvestor" className="mt-auto">read more</Link>
                </Card>
              </WithRole>
            </FadeInOnVisible>
          </Card>
        </div>
      </section>
    )
  }
}

export { UserTypeSelectPage }