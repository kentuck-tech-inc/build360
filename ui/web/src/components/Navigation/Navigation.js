import React from 'react'
import { Link } from "react-router-dom"
import './Navigation.css'
import { HomePage } from '../../pages/HomePage/HomePage'
import { LoginPage } from '../../pages/LoginPage/LoginPage'
import { BuilderSearchPage } from '../../pages/BuilderSearchPage/BuilderSearchPage'
import { BuilderPage } from '../../pages/BuilderPage/BuilderPage'
import { ComingSoonPage } from '../../pages/ComingSoonPage/ComingSoonPage'

const routes = [
  {
    to: '/',
    display: 'Home',
    exact: true,
    component: HomePage
  },
  {
    to: '/about',
    display: 'About',
    component: ComingSoonPage
  },
  {
    to: '/services',
    display: 'Services',
    component: ComingSoonPage
  },
  {
    to: '/builders',
    display: 'Builders',
    component: BuilderSearchPage
  },
  {
    to: '/builder/:slug/:id',
    component: BuilderPage
  },
  {
    to: '/buyers',
    display: 'Buyers',
    component: ComingSoonPage
  },
  {
    to: '/login',
    display: 'Log in',
    component: () => {
      const redirect = encodeURIComponent(`http://build360.io`)
      window.location = `https://auth.build360.io/login?response_type=code&client_id=6bt5bebmgnteqe9hhuljqtcrta&redirect_uri=${redirect}`
      return <LoginPage />
    }
  }
]

class Navigation extends React.Component {
  render () {
    const {onThemeChange, themes} = this.props
    return (
      <nav className="Navigation">
        <ul>
          <li>
            <select onChange={onThemeChange}>
              <option value="">Select a theme</option>
              {
                themes.map(({name, value}, index) => (
                  <option key={index} value={value}>{name}</option>)
                )
              }
            </select>
          </li>
          {
            routes
              .filter(({display}) => Boolean(display))
              .map(({to, display}, index) => (
                <li key={index}>
                  <Link to={to}>
                    {display}
                  </Link>
                </li>
              ))
          }
        </ul>
      </nav>
    )
  }
}

export { Navigation, routes }