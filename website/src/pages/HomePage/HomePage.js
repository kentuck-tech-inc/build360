import React from 'react'

import { BuilderSearchForm } from '../../components/BuilderSearchForm/BuilderSearchForm'
import './HomePage.css'

class HomePage extends React.Component {
  render () {
    return (
      <section className="HomePage">
        <p className="tagline">
          Don't settle on life's largest investment.<br />
          Interview and price all area home builders simultaneously.
        </p>
        <BuilderSearchForm advancedSearch={false} />
        <p className="signup">Sign up now and enjoy your first 7 days for $4</p>
      </section>
    )
  }
}

export { HomePage }