import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import cx from 'classnames'

import { Navigation, routes } from './components/Navigation/Navigation'
import { HomePage } from './pages/HomePage/HomePage'
import { LoginPage } from './pages/LoginPage/LoginPage'
import { BuilderSearchPage } from './pages/BuilderSearchPage/BuilderSearchPage'
import './App.css'

const themes = [
  'test',
  'fest'
]

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

          {
            routes
              .filter(({component}) => Boolean(component))
              .map(({path, to, exact, component}) => <Route path={path || to} exact={exact} component={component} />)
          }
        </main>
      </Router>
    )
  }
}

export default App
