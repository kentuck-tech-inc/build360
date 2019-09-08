import React from 'react'

import { BuilderSearchForm } from '../../components/BuilderSearchForm/BuilderSearchForm'
import { Card } from '../../components/Card/Card'
import { FadeInOnVisible } from '../../components/FadeInOnVisible/FadeInOnVisible'
import { Image } from '../../components/Image/Image'
import { Link } from '../../components/Link/Link'
import { RandomImage } from '../../components/RandomImage/RandomImage'
import { Tabs } from '../../components/Tabs/Tabs'
import house1 from '../../assets/houses/modern/house-1.jpg'
import house2 from '../../assets/houses/contemporary/house-2.jpg'
import builder1 from '../../assets/builders/builder-1.jpg'
import floorplan from '../../assets/default-floorplan.jpg'
import receiveQuotes from '../../assets/receive-quotes.jpg'
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
          <img className="HomePage-img" src={house2} />
          <Card className="hover-content">
            <p className="flex justify-center -mt-8">
              <img src={logo} alt="Build360 logo" className="w-128" />
            </p>
            <h2>Smarter Building. Simplified.</h2>
            <BuilderSearchForm advancedSearch={false} />
            <p className="tagline">
              Don't settle on life's largest investment.
              Pair your perfect plan with your favorite builder.
              Finally, a solution to make your home building process easy.
            </p>
            {/* <h2 className="mt-4">Finally, a solution to make your home building process easy.</h2> */}
          </Card>
        </div>
        <FadeInOnVisible className="content-grid">
          <Card className="flex flex-col items-center">
            <img className="icon-l" alt="Builder" src={ builderSVG } />
            <h2 className="mt-4 text-2xl">Browse Builders</h2>
            <p className="text-center my-4">View all area home builders' profiles and their feedback by zip code.</p>
            <Link anchor to="#browse-builders" className="mt-auto">read more</Link>
          </Card>
          <Card className="flex flex-col items-center">
            <img className="icon-l" alt="House Plan" src={ blueprintSVG } />
            <h2 className="mt-4 text-2xl">View Plans</h2>
            <p className="text-center my-4">Choose your favorite layout and customize it in Virtual Reality.</p>
            <Link anchor to="#view-plans" className="mt-auto">read more</Link>
          </Card>
          <Card className="flex flex-col items-center">
            <img className="icon-l" alt="Money Sign" src={ moneySVG } />
            <h2 className="mt-4 text-2xl">Receive Quotes</h2>
            <p className="text-center my-4">Receive bids from your favorite builders and plan your start date.</p>
            <Link anchor to="#receive-quotes" className="mt-auto">read more</Link>
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
                <button className="btn">Sign Up Now</button>
              </form>
            </section>
          </div>
        </FadeInOnVisible>
        <FadeInOnVisible className="next-section grid-column-2">
          <section>
            <h2 id="browse-builders">Browse Builders</h2>
            <p className="mt-4">View all home builders that currently build homes in your neighborhoods. Search by name, business name, zip code and filter by BBB Rating, Build360 Score, Year Established and more! Every builder showcases their work on their profile, full of client feedback, photos of their jobs, a short biography of them and house plans they have built.</p>
            <Link className="block mt-4" to="/builders">Search for builders</Link>
          </section>
          <Image src={builder1} alt="builder image" />
        </FadeInOnVisible>
        <FadeInOnVisible className="next-section grid-column-2">
          <Image className="self-center" src={floorplan} alt="floorplan image" />
          <section>
            <h2 id="view-plans">View Plans</h2>
            <p className="mt-4">Search thousands of house plans for free. Found a favorite, but not "just right"? Customize that plan in virtual reality to get the exact features you want! Taller ceilings, larger master bath, bigger garage, the list goes on.</p>
            <div className="mt-4">
              <Tabs
                tabs={[
                  'Contemporary',
                  'Traditional',
                  'Modern'
                ]}
                content={
                  ['contemporary', 'traditional', 'modern'].map((type, groupIndex) => (
                    <div key={groupIndex} className="grid-column-2 grid-gap-4">
                      {
                        new Array(4).fill().map((_, index) => <RandomImage index={index} key={`${groupIndex}-${index}`} from={type}/>)
                      }
                    </div>
                  ))
                }
              />
            </div>
            <Link className="block mt-4" to="/blueprints">View more plans</Link>
          </section>
        </FadeInOnVisible>
        <FadeInOnVisible className="next-section grid-column-2">
          <section>
            <h2 id="receive-quotes">Recieve quotes</h2>
            <p className="mt-4">Once you select the plan you like, receive quotes from all the builders you're impressed with. Along with the quote, an anticipated start date so you can see how your builder's schedule is looking. If your quote comes back high, easily go back to that plan to make changes to get that quote in your budget.</p>
          </section>
          <Image src={receiveQuotes} alt="Quote image" />
        </FadeInOnVisible>
        <FadeInOnVisible className="next-section grid-column-2">
          <Image src={feedback} alt="feedback image" />
          <section>
            <h2>Client Feedback</h2>
            <p className="mt-4">
              Read reviews from clients of the builders and view their Build360 Score™ to see how they rank against their peers.
              Builders are graded on communication, professionalism, budget conscious, billing, finances, and <Link>more</Link>.
            </p>
          </section>
        </FadeInOnVisible>
        <FadeInOnVisible className="next-section">
          <h2>Blog</h2>
          <p><i>Three posts with read more</i></p>
          <Link to="/blog">View more posts</Link>
        </FadeInOnVisible>
      </section>
    )
  }
}

export { HomePage }