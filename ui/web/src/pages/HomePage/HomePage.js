import React from 'react'

import { BuilderSearchForm } from '../../components/BuilderSearchForm/BuilderSearchForm'
import { FadeInOnVisible } from '../../components/FadeInOnVisible/FadeInOnVisible'
import { Card } from '../../components/Card/Card'
import cozyHouse from '../../assets/cozy-house.jpg'
import './HomePage.css'

class HomePage extends React.Component {
  render () {
    return (
      <section className="HomePage">
        <div className="top-content">
          <img className="HomePage-img" src={cozyHouse} />
          <Card className="hover-content">
            <p className="tagline">
              Don't settle on life's largest investment.<br />
              Interview and price all area home builders simultaneously.
            </p>
            <BuilderSearchForm advancedSearch={false} />
            <p className="signup">Sign up now and enjoy your first 7 days for $4</p>
          </Card>
        </div>
        <FadeInOnVisible className="content-grid">
          <Card className="flex flex-col">
            <h2>Buyers, meet builders!</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel ipsum et lorem dapibus sagittis. Aliquam gravida neque vitae massa tristique, non rhoncus lacus interdum. Mauris lobortis tortor ac commodo lacinia. Aenean fermentum mauris non dui facilisis, in pulvinar lacus cursus. Cras ultrices mi feugiat turpis porta, vitae auctor sem hendrerit. Praesent luctus nec diam nec placerat.
            </p>
            <form action="/register">
              <input hidden name="type" value="user"/>
              <button className="w-full">Register Now</button>
            </form>
          </Card>
          <Card className="flex flex-col">
            <h2>Builders, meet buyers!</h2>
            <p>
              Proin facilisis ut felis non porta. Donec ultricies enim nunc, et sodales leo ultricies eget. Etiam non sapien eget orci cursus efficitur vitae non tellus. Pellentesque dapibus turpis non interdum eleifend. Nam mollis at lorem eu tempus. Sed congue elementum libero sed vestibulum. Sed dictum, nunc vel volutpat facilisis, elit orci placerat ex, in tincidunt neque sapien vel velit. Ut lacinia et nibh in ullamcorper. Nunc et tincidunt magna.
            </p>
            <form action="/register">
              <input hidden name="type" value="builder"/>
              <button className="w-full">Register Now</button>
            </form>
          </Card>
        </FadeInOnVisible>
      </section>
    )
  }
}

export { HomePage }