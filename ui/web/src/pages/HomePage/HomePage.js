import React from 'react'

import { BuilderSearchForm } from '../../components/BuilderSearchForm/BuilderSearchForm'
import { FadeInOnVisible } from '../../components/FadeInOnVisible/FadeInOnVisible'
import { Card } from '../../components/Card/Card'
import { Image } from '../../components/Image/Image'
import { Link } from '../../components/Link/Link'
import cozyHouse from '../../assets/cozy-house.jpg'
import house1 from '../../assets/house-1.jpg'
import builderSVG from '../../assets/builder.svg'
import blueprintSVG from '../../assets/blueprint.svg'
import moneySVG from '../../assets/money.svg'
import logo from '../../assets/build360-logo.svg'
import feedback from '../../assets/feedback.jpg'
import './HomePage.css'

class HomePage extends React.Component {
  render () {
    return (
      <section className="HomePage">
        <div className="top-content">
          <img className="HomePage-img" src={cozyHouse} />
          <Card className="hover-content">
            <p className="flex justify-center my-4">
              <img src={logo} alt="Build360 logo" className="w-64" />
            </p>
            <h2>Smarter Building. Simplified.</h2>
            <BuilderSearchForm advancedSearch={false} />
            <p className="tagline">
              Don't settle on life's largest investment.<br />
              Pair your perfect plan with your favorite builder.
            </p>
            <h2 className="mt-4">Finally, a solution to make your home building process easy.</h2>
          </Card>
        </div>
        <FadeInOnVisible className="content-grid">
          <Card className="flex flex-col items-center">
            <img className="icon-l" alt="Builder" src={ builderSVG } />
            <h2 className="mt-4 text-2xl">Browse Builders</h2>
            <p className="text-center my-4">View all area home builders' profiles and their feedback by zip code.</p>
            <Link to="#browse-builders" className="mt-auto">read more</Link>
          </Card>
          <Card className="flex flex-col items-center">
            <img className="icon-l" alt="House Plan" src={ blueprintSVG } />
            <h2 className="mt-4 text-2xl">View Plans</h2>
            <p className="text-center my-4">Choose your favorite layout and customize it in Virtual Reality.</p>
            <Link to="#view-plans" className="mt-auto">read more</Link>
          </Card>
          <Card className="flex flex-col items-center">
            <img className="icon-l" alt="Money Sign" src={ moneySVG } />
            <h2 className="mt-4 text-2xl">Receive Quotes</h2>
            <p className="text-center my-4">Receive bids from your favorite builders and plan your start date.</p>
            <Link to="#receive-quotes" className="mt-auto">read more</Link>
          </Card>
        </FadeInOnVisible>

        <FadeInOnVisible className="next-section">
          <div className="grid-column-2">
            <Image src={house1} alt="build360 image" />
            <section>
              <h2 id="about" className="mt-0">About Build360</h2>
              <p className="mt-4">
                Build360 is an online builder marketplace that allows you to browse all area home builders that complete projects in your local neighborhoods.
                The builder, or construction company, displays their profile, house plans they build along with the types of homes and features they specialize in. 
                To complete the offering, real photos of current and completed jobs are displayed in their portfolio.
              </p>
              <form className="mt-8" action="/register">
                <input hidden name="type" value="user"/>
                <button>Sign Up Now</button>
              </form>
            </section>
          </div>
        </FadeInOnVisible>
        <FadeInOnVisible className="next-section">
          <h2 id="browse-builders">Browse Builders</h2>
          <p className="mt-4">View all home builders that currently build homes in your neighborhoods. Search by name, business name, zip code and filter by BBB Rating, Build360 Score, Year Established and more! Every builder showcases their work on their profile, full of client feedback, photos of their jobs, a short biography of them and house plans they have built.</p>
          <Link className="mt-4" to="/builders">Search for builders</Link>
        </FadeInOnVisible>
        <FadeInOnVisible className="next-section">
          <h2 id="view-plans">View Plans</h2>
          <p className="mt-4">Search thousands of house plans for free. Found a favorite, but not "just right"? Customize that plan in virtual reality to get the exact features you want! Taller ceilings, larger master bath, bigger garage, the list goes on.</p>
          <div className="mt-4">
            Image grid with tabs
            <ul><li>contemporary</li><li>traditional</li><li>modern</li></ul>
          </div>
          <Link to="/blueprints">View more plans</Link>
        </FadeInOnVisible>
        <FadeInOnVisible className="next-section">
          <h2 id="recieve-quotes">Recieve quotes</h2>
          <p className="mt-4">Once you select the plan you like, receive quotes from all the builders you're impressed with. Along with the quote, an anticipated start date so you can see how your builder's schedule is looking. Quote come back high, easily go back to that plan to make changes to get that quote in your budget.</p>
        </FadeInOnVisible>
        <FadeInOnVisible className="next-section grid-column-2">
          <Image src={feedback} alt="feedback image" />
          <section>
            <h2>Client Feedback</h2>
            <p>feedback from home owners</p>
          </section>
        </FadeInOnVisible>
        <FadeInOnVisible className="next-section">
          <h2>Blog</h2>
          <p>Three posts with read more</p>
          <Link to="/blog">View more posts</Link>
        </FadeInOnVisible>
      </section>
    )
  }
}

export { HomePage }