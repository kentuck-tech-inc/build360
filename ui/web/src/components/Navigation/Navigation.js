import React from 'react'
import { Link } from "react-router-dom"
import './Navigation.css'
import { HomePage } from '../../pages/HomePage/HomePage'
import { LoginPage } from '../../pages/LoginPage/LoginPage'
import { BuilderSearchPage } from '../../pages/BuilderSearchPage/BuilderSearchPage'
import { BuilderPage } from '../../pages/BuilderPage/BuilderPage'
import { ComingSoonPage } from '../../pages/ComingSoonPage/ComingSoonPage'
import logo from '../../assets/build360-logo.svg'

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
    to: '/builders',
    display: 'Builders',
    component: BuilderSearchPage
  },
  {
    to: '/builder/:slug/:id',
    component: BuilderPage
  },
  {
    to: '/homeowners',
    display: 'Homeowners',
    component: ComingSoonPage
  },
  {
    to: '/login',
    display: 'Log in',
    component: () => {
      window.location = `https://auth.build360.io/login?response_type=code&client_id=6bt5bebmgnteqe9hhuljqtcrta&redirect_uri=http://build360.io`
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
          <li><img src={logo} alt="Build360 logo" className="w-32" /></li>
          {/* <li>
            <select onChange={onThemeChange}>
              <option value="">Select a theme</option>
              {
                themes.map(({name, value}, index) => (
                  <option key={index} value={value}>{name}</option>)
                )
              }
            </select>
          </li> */}
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

/**
 * Change navigation to be a side nav
 * Builders should go to a page for builders
 * Buyers -> Homeowners
 * remove about and services, about is already on homepage, there are no services
 */

export { Navigation, routes }