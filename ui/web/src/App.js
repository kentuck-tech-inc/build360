import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import cx from 'classnames'

import { Navigation, routes } from './components/Navigation/Navigation'
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
        </main>
      </Router>
    )
  }
}

export default App
