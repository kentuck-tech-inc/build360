import React from 'react';
import { Card } from '../../components/Card/Card'
import { FadeInOnVisible } from '../../components/FadeInOnVisible/FadeInOnVisible'
import { Image } from '../../components/Image/Image'
import { Link } from '../../components/Link/Link'

import newHome from '../../assets/new-home.jpg'
import tech from '../../assets/technology.jpg'
import calc from '../../assets/calculator.jpg' 

import './InfoBuilder.css'

class InfoBuilderPage extends React.Component {
  render () {
    return (
      <section className="InfoBuilder">        
        <div className="top-content">
        <Carousel>
          <Carousel.Item>
            <Image className="d-block w-100" alt="newly built home" src={newHome} /> 
          </Carousel.Item>
          <Carousel.Item>
            
						<img className="d-block w-100" alt="blueprint stock image" src={tech}/> 
          </Carousel.Item>
          <Carousel.Item>
						<img className="d-block w-100" alt="calculator stock image" src={calc} /> 
          </Carousel.Item>
        </Carousel>
        
        <Card className="flex flex-col items-center">
            <p className="text-center lead">
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
							<h2 className="card-title">
								Save Time.
							</h2>
							<p className="card-text">
								No more unnecessary communication between you and your next client - just to have them sign with a competitor. Set clear expectations instantly. Now you can focus on what matters most. Maximum efficiency is here.
							</p>
          </Card>
          <Card className="flex flex-col items-center">
							<h2 className="card-title">
								Deliver Accurate Estimates.
							</h2>
							<p className="card-text">
								Your next client already knows what home they want to build. From floor to ceiling, finishes are already known in advance. Finally, a solution that eliminates the dreaded "allowances". Stand out from the rest now.
							</p>
          </Card>
          <Card className="flex flex-col items-center">
							<h2 className="card-title">
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

export { ComingSoonPage }