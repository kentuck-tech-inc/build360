import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import cx from 'classnames'

import { Navigation, routes } from './components/Navigation/Navigation'
import { SocialMedia } from './components/SocialMedia/SocialMedia'
import logo from './assets/build360-logo.svg'
import { Link } from './components/Link/Link'
import themes from './generated/color-options.json'
import './tailwind.css';
import './App.css'

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
        <main className={cx('App', theme)}>
          <Navigation onThemeChange={this.handleThemeChange} themes={themes} />

          <section className="content">
            {
              routes
                .filter(({component}) => Boolean(component))
                .map(({path, to, exact, component}, index) => <Route key={index} path={path || to} exact={exact} component={component} />)
            }
          </section>

          <footer className="footer flex items-center justify-between bg-black py-2 mt-8">
            <SocialMedia size="m" className="inline-flex justify-start -ml-2" />
            <Link anchor to="mailto::kentucktech@gmail.com">
              kentucktech@gmail.com
            </Link>
            <img src={logo} alt="Build360 logo" className="w-32" />
          </footer>
          <div className="Legal bg-black pb-2 flex justify-center text-xs">
            © 2018-2019 Kentuck Tech, Inc. All Rights Reserved. Patent Pending. 
          </div>
        </main>
      </Router>
    )
  }
}

/**
 * Center legal copy and email
 */

export default App
