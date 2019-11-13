import React from 'react'
import { Link, Redirect } from "react-router-dom"
import './Navigation.css'
import { HomePage } from '../../pages/HomePage/HomePage'
import { BlogPage } from '../../pages/BlogPage/BlogPage'
import { BlogSearchPage } from '../../pages/BlogSearchPage/BlogSearchPage'
import { BuilderSearchPage } from '../../pages/BuilderSearchPage/BuilderSearchPage'
import { BuilderPage } from '../../pages/BuilderPage/BuilderPage'
import { ComingSoonPage } from '../../pages/ComingSoonPage/ComingSoonPage'
import { FloorplanSearchPage } from '../../pages/FloorplanSearchPage/FloorplanSearchPage'
import { FloorplanPage } from '../../pages/FloorplanPage/FloorplanPage'
import { PricingPage } from '../../pages/PricingPage/PricingPage'
import { ChatPage } from '../../pages/ChatPage/ChatPage'
import WithAuth from '../../components/WithAuth/WithAuth'
import Authorize from '../../components/Authorize/Authorize'
import { ProfileButton } from '../../components/ProfileButton/ProfileButton'
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
  {
    to: '/chat',
    display: 'Chat',
    component: (props) => <WithAuth>
      <ChatPage {...props}/>
    </WithAuth>
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
          <ProfileButton />
        </ul>
      </nav>
    )
  }
}

export { Navigation, routes }