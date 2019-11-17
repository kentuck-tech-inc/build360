import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import cx from 'classnames'

import { Navigation, routes } from './components/Navigation/Navigation'
import { Footer } from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import themes from './generated/color-options.json'
import './tailwind.css';
import './App.css'
import WithAuth from './components/WithAuth/WithAuth'

class App extends React.Component {
  state = {
    theme: ''
  }

  handleThemeChange = (event) => {
    this.setState({theme: event.target.value})
  }

  render() {
    const {theme} = this.state
    return (
      <Router>
        <ScrollToTop />
        <main className={cx('App', theme)}>
          <WithAuth>
            <Navigation onThemeChange={this.handleThemeChange} themes={themes} />

            <section className="content">
              {
                routes
                  .filter(({component}) => Boolean(component))
                  .map(({path, to, exact, component, render}, index) => component
                    ? <Route key={index} path={path || to} exact={exact} component={component} />
                    : <Route key={index} path={path || to} exact={exact} render={render} />
                  )
              }
            </section>
            <Footer />
          </WithAuth>
        </main>
      </Router>
    )
  }
}

export default App
