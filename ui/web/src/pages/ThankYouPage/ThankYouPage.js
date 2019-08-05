import React from 'react';
import './ThankYouPage.css'
import { SocialMedia } from '../../components/SocialMedia/SocialMedia';

class ThankYouPage extends React.Component {
  render () {
    return (
      <section className="ThankYouPage">
        <p className="thank-you">Thanks for being part of this revolutionary experience for the building industry!</p>
        <p className="details-soon">Details to come soon!</p>
        <p className="social-media">Meanwhile, follow us on social media!</p>
        <SocialMedia />
      </section>
    )
  }
}

export { ThankYouPage }