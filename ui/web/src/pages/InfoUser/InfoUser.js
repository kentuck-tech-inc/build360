import React from 'react';
import { Card } from '../../components/Card/Card'
import { FadeInOnVisible } from '../../components/FadeInOnVisible/FadeInOnVisible'
import { Image } from '../../components/Image/Image'
import { RandomImage } from '../../components/RandomImage/RandomImage'
import { Tabs } from '../../components/Tabs/Tabs'

import house2 from '../../assets/houses/contemporary/house-2.jpg'
import builder1 from '../../assets/builders/builder-1.jpg'
import floorplan from '../../assets/default-floorplan.jpg'
import receiveQuotes from '../../assets/receive-quotes.jpg'

import './InfoUser.css' 

class InfoUserPage extends React.Component {
  render () {
    return (
      <section className="InfoUser"> 
        <div className="top-content">
          <img alt="house" className="HomePage-img" src={house2} />
          <Card className="hover-content">
            <h2>
              The home of your dreams is waiting for you.
            </h2>
            <h2>
              <span>Find your favorite builder and house plan. Customize your home and receive quotes from area builders.</span>
            </h2>
          </Card>
        </div>

        <FadeInOnVisible className="next-section grid-column-2">
          <section>
            <h2 className="offset-header" id="browse-builders">Browse Builders</h2>
            <p className="mt-4">View all home builders that currently build homes in your neighborhoods. Search by name, business name, zip code and filter by BBB Rating, Build360 Score, Year Established and more! Every builder showcases their work on their profile, full of client feedback, photos of their jobs, a short biography of them and house plans they have built.</p>
          </section>
          <Image src={builder1} alt="builder" />
        </FadeInOnVisible>
        <FadeInOnVisible className="next-section grid-column-2">
          <Image className="self-center" src={floorplan} alt="floorplan" />
          <section>
            <h2 className="offset-header" id="view-plans">View Plans</h2>
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
          </section>
        </FadeInOnVisible>
        <FadeInOnVisible className="next-section grid-column-2">
          <section>
            <h2 className="offset-header" id="receive-quotes">Recieve quotes</h2>
            <p className="mt-4">Once you select the plan you like, receive quotes from all the builders you're impressed with. Along with the quote, an anticipated start date so you can see how your builder's schedule is looking. If your quote comes back high, easily go back to that plan to make changes to get that quote in your budget.</p>
          </section>
          <Image src={receiveQuotes} alt="quote" />
        </FadeInOnVisible>
      </section>
    )
  }
}

export { InfoUserPage }