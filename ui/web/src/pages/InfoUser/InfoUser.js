import React from 'react';
import { Card } from '../../components/Card/Card'
import { FadeInOnVisible } from '../../components/FadeInOnVisible/FadeInOnVisible'
import { Image } from '../../components/Image/Image'
import { Link } from '../../components/Link/Link'

import house2 from '../../assets/houses/contemporary/house-2.jpg'
import logo from '../../assets/build360-logo.svg'
import builderSVG from '../../assets/builder.svg'
import blueprintSVG from '../../assets/blueprint.svg'
import Carousel from 'react-bootstrap/Carousel';

import './InfoUser.css' 

class InfoUserPage extends React.Component {
  render () {
    return (
      <section className="InfoUser">        
        <div className="top-content">
        <Carousel>
          <Carousel.Item>
            <Image class="d-block w-100" alt="Carousel Bootstrap First" src="https://www.layoutit.com/img/sports-q-c-1600-500-1.jpg" />
            <Carousel.Caption>
              <h4>
								First Thumbnail label
							</h4>
							<p>
								Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
							</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            
						<img class="d-block w-100" alt="Carousel Bootstrap Second" src="https://www.layoutit.com/img/sports-q-c-1600-500-2.jpg" />

            <Carousel.Caption>
							<h4>
								Second Thumbnail label
							</h4>
							<p>
								Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
							</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
						<img class="d-block w-100" alt="Carousel Bootstrap Third" src="https://www.layoutit.com/img/sports-q-c-1600-500-3.jpg" />

            <Carousel.Caption>
							<h4>
								Third Thumbnail label
							</h4>
							<p>
								Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
							</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        
        <Card className="flex flex-col items-center">
            <p class="text-center lead">
              Build360 allows prospective clients the opportunity to submit their new home plan with all the finishes already selected, saving you time and money. Your next client is already here.
            </p>
            
            <p>
              No more leads. No more advertising. No more wasted time.
            </p>

            <p>
              Estimating, interviewing and sourcing...all in one place.<br />              
            </p>
            </Card>
        </div>

        <FadeInOnVisible className="next-section grid-column-3">
          <Card className="flex flex-col items-center">
							<h2 class="card-title">
								Save Time.
							</h2>
							<p class="card-text">
								No more unnecessary communication between you and your next client - just to have them sign with a competitor. Set clear expectations instantly. Now you can focus on what matters most. Maximum efficiency is here.
							</p>
          </Card>
          <Card className="flex flex-col items-center">
							<h2 class="card-title">
								Deliver Accurate Estimates.
							</h2>
							<p class="card-text">
								Your next client already knows what home they want to build. From floor to ceiling, finishes are already known in advance. Finally, a solution that eliminates the dreaded "allowances". Stand out from the rest now.
							</p>
          </Card>
          <Card className="flex flex-col items-center">
							<h2 class="card-title">
								Generate More Revenue.
							</h2>
							<div>
								Showcase your work with your detailed builder profile, receiving new clients with their home and its finishes already selected. Eliminate wasted time and gain your client's trust with their best possible first impression.
							</div>
          </Card>
        </FadeInOnVisible>

        <FadeInOnVisible className="next-section grid-column-2">
          
          <Card className="flex flex-col items-center">
            
          </Card>
          <Card className="flex flex-col items-center">
            <h2>Build360 combines the best of estimating and leads all in one easy to use solution.</h2>
            <p className="mt-4">
            Ryan Berry with Andy's Custom Homes of Kentucky
            </p>
          </Card>
        </FadeInOnVisible>
      </section>
    )
  }
}

export { InfoUserPage }