import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import cx from 'classnames'

import { RegisterPage } from './pages/RegisterPage/RegisterPage'
import { ThankYouPage } from './pages/ThankYouPage/ThankYouPage'

import { Navigation, routes } from './components/Navigation/Navigation'
import themes from './generated/color-options.json'
import './App.css'

class App extends React.Component {
  state = {
    theme: '',
    cookie: document.cookie.split('; ').reduce((acc, cookieStr) => {
      const [key, ...rest] = cookieStr.split('=')
      const value = rest.join('=')
      if(acc[key]) {
        acc[key] = [].concat(acc[key], value)
      } else {
        acc[key] = value
      }
      return acc
    }, {})
  }

  handleThemeChange = (event) => {
    this.setState({theme: event.target.value})
  }

  render() {
    const { theme, cookie } = this.state
    return cookie.mode === "dev"
      ? (
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
          </main>
        </Router>
      )
      : (
        <Router>
          <main className="App">
            <Route path="/" exact component={RegisterPage} />
            <Route path="/thank-you" exact component={ThankYouPage} />
          </main>
        </Router>
      )
  }
}

export default App
