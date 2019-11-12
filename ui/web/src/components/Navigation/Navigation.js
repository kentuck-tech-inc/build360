import React from 'react'
import { Link, Redirect } from "react-router-dom"
import './Navigation.css'
import { HomePage } from '../../pages/HomePage/HomePage'
import { LoginPage } from '../../pages/LoginPage/LoginPage'
import { BlogPage } from '../../pages/BlogPage/BlogPage'
import { BlogSearchPage } from '../../pages/BlogSearchPage/BlogSearchPage'
import { BuilderSearchPage } from '../../pages/BuilderSearchPage/BuilderSearchPage'
import { BuilderPage } from '../../pages/BuilderPage/BuilderPage'
import { ComingSoonPage } from '../../pages/ComingSoonPage/ComingSoonPage'
import { FloorplanSearchPage } from '../../pages/FloorplanSearchPage/FloorplanSearchPage'
import { FloorplanPage } from '../../pages/FloorplanPage/FloorplanPage'
import { PricingPage } from '../../pages/PricingPage/PricingPage'
import { ChatPage } from '../../pages/ChatPage/ChatPage'
import { getLoginUrl } from '../../utils/authUtils'
import WithAuth from '../../components/WithAuth/WithAuth'
import Authorize from '../../components/Authorize/Authorize'
import logo from '../../assets/build360-logo.svg'

const MailChimpRedirect = () => {
  window.location = 'https://mailchi.mp/97cbc6715227/build360io'
  return null
}

const routes = [
  {
    to: '/launch',
    exact: true,
    component: MailChimpRedirect
  },
  {
    to: '/',
    exact: true,
    display: 'Home',
    component: HomePage
  },
  // {
  //   to: '/about',
  //   display: 'About',
  //   component: ComingSoonPage
  // },
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
    to: '/floorplans',
    display: 'Floor Plans',
    component: FloorplanSearchPage
  },
  {
    to: '/floorplan/:id',
    component: FloorplanPage
  },
  {
    to: '/blogs',
    component: BlogSearchPage
  },
  {
    to: '/blog/:id',
    component: BlogPage
  },
  ,
  {
    to: '/pricing',
    display: 'Pricing',
    component: PricingPage
  },
  // {
  //   to: '/homeowners',
  //   display: 'Homeowners',
  //   component: ComingSoonPage
  // },
  {
    to: '/chat',
    display: 'Chat',
    component: (props) => <WithAuth>
      <ChatPage {...props}/>
    </WithAuth>
  },
  {
    to: '/login',
    display: 'Log in',
    component: () => {
      window.location = getLoginUrl()
      return <LoginPage />
    }
  },
  {
    to: '/auth',
    component: Authorize
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