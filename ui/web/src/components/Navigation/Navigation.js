import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import classnames from 'classnames'
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
import { ProfilePage } from '../../pages/ProfilePage/ProfilePage'
import { getUser, logout } from '../../utils/authUtils'
import { Image } from '../../components/Image/Image'
import logo from '../../assets/build360-logo.svg'
import { menu } from '../../assets/icons'

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
    component: (props) => (
      <HomePage {...props} />
    )
  },
  {
    to: '/builders',
    display: 'Builders',
    component: (props) => (
      <WithAuth>
        <BuilderSearchPage {...props} />
      </WithAuth>
    )
  },
  {
    to: '/builder/:slug/:id',
    component: (props) => (
      <WithAuth>
        <BuilderPage {...props} />
      </WithAuth>
    )
  },
  {
    to: '/floorplans',
    display: 'Floor Plans',
    component: (props) => (
      <WithAuth>
        <FloorplanSearchPage {...props} />
      </WithAuth>
    )
  },
  {
    to: '/floorplan/:id',
    component: (props) => (
      <WithAuth>
        <FloorplanPage {...props} />
      </WithAuth>
    )
  },
  {
    to: '/blogs',
    component: (props) => (
      <WithAuth>
        <BlogSearchPage {...props} />
      </WithAuth>
    )
  },
  {
    to: '/blog/:id',
    component: (props) => (
      <WithAuth>
        <BlogPage {...props} />
      </WithAuth>
    )
  },
  ,
  {
    to: '/pricing',
    display: 'Pricing',
    component: (props) => (
      <WithAuth>
        <PricingPage {...props} />
      </WithAuth>
    )
  },
  {
    to: '/chat',
    display: 'Chat',
    component: (props) => (
      <WithAuth>
        <ChatPage {...props} />
      </WithAuth>
    )
  },
  {
    to: '/profile',
    component: (props) => (
      <WithAuth>
        <ProfilePage {...props} />
      </WithAuth>
    )
  },
  {
    to: '/auth',
    component: Authorize
  }
]

class Navigation extends React.Component {
  state = {
    isOpen: false
  }

  toggleNav = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  closeNav = () => {
    this.setState({ isOpen: false })
  }

  render () {
    const {onThemeChange, themes} = this.props
    const {isOpen} = this.state
    const user = getUser()

    return (
      <nav className="Navigation">
        <ul className={classnames({ 'is-open': isOpen })}>
          <li className="LogoItem">
            <button className="mr-4 MenuButton" onClick={this.toggleNav}>
              <Image src={menu} className="icon-m"/>
            </button>
            <img src={logo} alt="Build360 logo" className="w-32" />
          </li>
          {
            routes
              .filter(({display}) => Boolean(display))
              .map(({to, display}, index) => (
                <li key={index}>
                  <Link to={to} onClick={this.closeNav}>
                    {display}
                  </Link>
                </li>
              ))
          }
          <li>
            <ProfileButton />
          </li>
          {
            user && <li>
              <button className="btn" onClick={logout}>
                Logout
              </button>
            </li>
          }
        </ul>
      </nav>
    )
  }
}

export { Navigation, routes }