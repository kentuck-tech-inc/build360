import React from 'react'

import { BuilderSearchForm } from '../../components/BuilderSearchForm/BuilderSearchForm'
import { FadeInOnVisible } from '../../components/FadeInOnVisible/FadeInOnVisible'
import { Card } from '../../components/Card/Card'
import { Image } from '../../components/Image/Image'
import cozyHouse from '../../assets/cozy-house.jpg'
import house1 from '../../assets/house-1.jpg'
import builderSVG from '../../assets/builder.svg'
import blueprintSVG from '../../assets/blueprint.svg'
import moneySVG from '../../assets/money.svg'
import './HomePage.css'

class HomePage extends React.Component {
  render () {
    return (
      <section className="HomePage">
        <div className="top-content">
          <img className="HomePage-img" src={cozyHouse} />
          <Card className="hover-content">
            <h2>Smarter Building... Simplified.</h2>
            <p className="tagline">
              Don't settle on life's largest investment.<br />
              Pair your perfect plan with your favorite builder.
            </p>
            <BuilderSearchForm advancedSearch={false} />
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h2>Finally, a solution to make your home building process easy.</h2>
            <p>logo here</p>
          </Card>
        </div>
        <FadeInOnVisible className="content-grid">
          <Card className="flex flex-col align-center">
            <img className="icon-l" alt="Builder" src={ builderSVG } />
            <h2>Browse Builders</h2>
            <p className="text-center">View all area home builders' profiles and their feedback by zip code.</p>
            <a href="#browse-builders">read more</a>
          </Card>
          <Card className="flex flex-col align-center">
            <img className="icon-l" alt="House Plan" src={ blueprintSVG } />
            <h2>View Plans</h2>
            <p className="text-center">Choose your favorite layout and customize it in Virtual Reality.</p>
            <a href="#view-plans">read more</a>
          </Card>
          <Card className="flex flex-col align-center">
            <img className="icon-l" alt="Money Sign" src={ moneySVG } />
            <h2>Receive Quotes</h2>
            <p className="text-center">Receive bids from your favorite builders and plan your start date.</p>
            <a href="#receive-quotes">read more</a>
          </Card>
        </FadeInOnVisible>

        <FadeInOnVisible className="next-section">
          <div className="grid-column-2">
            <Image src={house1} alt="build360 image" />
            <section>
              <h2 id="about" className="mt-0">About Build360</h2>
              <p>
                Build360 is an online builder marketplace that allows you to browse all area home builders that complete projects in your local neighborhoods.
                The builder, or construction company, displays their profile, house plans they build along with the types of homes and features they specialize in. 
                To complete the offering, real photos of current and completed jobs are displayed in their portfolio.
              </p>
              <form action="/register">
                <input hidden name="type" value="user"/>
                <button>Sign Up Now</button>
              </form>
            </section>
          </div>
        </FadeInOnVisible>
        <FadeInOnVisible className="next-section">
          <h2 id="browse-builders">Browse Builders</h2>
          <p>Some copy about builders</p>
          <a href="/builders">Search for builders</a>
        </FadeInOnVisible>
        <FadeInOnVisible className="next-section">
          <h2 id="view-plans">View Plans</h2>
          <p>Some copy about plans</p>
          <div>
            Image grid with tabs
            <ul><li>contemporary</li><li>traditional</li><li>modern</li></ul>
          </div>
          <a href="/blueprints">View more plans</a>
        </FadeInOnVisible>
        <FadeInOnVisible className="next-section">
          <h2 id="recieve-quotes">Recieve quotes</h2>
          <p>Some copy about quotes</p>
          <a href="/blueprints">View more plans</a>
        </FadeInOnVisible>
        <FadeInOnVisible className="next-section">
          <h2>Happy homeowners</h2>
          <p>feedback from home owners</p>
        </FadeInOnVisible>
        <FadeInOnVisible className="next-section">
          <h2>Blog</h2>
          <p>Three posts with read more</p>
          <a href="/blog">View more posts</a>
        </FadeInOnVisible>
        <footer>footer with contact info</footer>
      </section>
    )
  }
}

export { HomePage }