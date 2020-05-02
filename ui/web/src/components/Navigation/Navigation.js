import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import classnames from 'classnames'
import './Navigation.css'
import { HomePage } from '../../pages/HomePage/HomePage'
import { BlogPage } from '../../pages/BlogPage/BlogPage'
import { InfoUserPage } from '../../pages/InfoUser/InfoUser'
import { InfoBuilderPage } from '../../pages/InfoBuilder/InfoBuilder'
import { InfoInvestorPage } from '../../pages/InfoInvestor/InfoInvestor'
import { BlogSearchPage } from '../../pages/BlogSearchPage/BlogSearchPage'
import { BuilderSearchPage } from '../../pages/BuilderSearchPage/BuilderSearchPage'
import { BuilderPage } from '../../pages/BuilderPage/BuilderPage'
import { UserTypeSelectPage } from '../../pages/UserTypeSelectPage/UserTypeSelectPage'
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
import WithRole from '../WithRole/WithRole';
import { isLocalDev } from '../../utils/envUtils'

const MailChimpRedirect = () => {
  window.location = 'https://mailchi.mp/97cbc6715227/build360io'
  return null
}

const routes = [
  {
    to: '/',
    exact: true,
    component: (props) => (<UserTypeSelectPage {...props} />)
  },
  {
    to: '/launch',
    exact: true,
    component: MailChimpRedirect
  },
  {
    to: '/Home',
    exact: true,
    display: 'Home',
    role: 'demo',
    component: (props) => (
      <HomePage {...props} />
    )
  },
  {
    to: '/InfoUser',
    exact: true,
    component: (props) => (
      <InfoUserPage {...props} />
    )
  },
  {
    to: '/InfoBuilder',
    exact: true,
    component: (props) => (
      <InfoBuilderPage {...props} />
    )
  },
  {
    to: '/InfoInvestor',
    exact: true,
    component: (props) => (
      <InfoInvestorPage {...props} />
    )
  },
  {
    to: '/builders',
    display: 'Builders',
    role: 'demo',
    component: (props) => (
      <WithAuth>
        <WithRole Role="demo">
          <BuilderSearchPage {...props} />
        </WithRole>
      </WithAuth>
    )
  },
  {
    to: '/builder/:slug/:id',
    role: 'builder',
    component: (props) => (
      <WithAuth>
        <BuilderPage {...props} />
      </WithAuth>
    )
  },
  {
    to: '/floorplans',
    display: 'Floor Plans',
    role: 'demo',
    component: (props) => (
      <WithAuth>
        <FloorplanSearchPage {...props} />
      </WithAuth>
    )
  },
  {
    to: '/floorplan/:id',
    role: 'demo',
    component: (props) => (
      <WithAuth>
        <FloorplanPage {...props} />
      </WithAuth>
    )
  },
  {
    to: '/blogs',
    role: 'admin',
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
  {
    to: '/pricing',
    display: 'Pricing',
    role: 'demo',
    component: (props) => (
      <WithAuth>
        <PricingPage {...props} />
      </WithAuth>
    )
  },
  {
    to: '/chat',
    display: 'Chat',
    requiresLogin: true,
    role: 'admin',
    component: (props) => (
      <WithAuth><WithRole Role="admin">
        <ChatPage {...props} />
      </WithRole></WithAuth>
    )
  },
  {
    to: '/profile',
    display: 'User profile',
    requiresLogin: true,
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

    var userRole = [];

    if(user !== null && user !== undefined) {
      userRole = user["cognito:groups"]
    }

    return (
      <nav className="Navigation">
        <ul className={classnames({ 'is-open': isOpen })}>
          <li className="LogoItem">
            <button className="mr-4 MenuButton" onClick={this.toggleNav}>
              <Image alt="menu" src={menu} className="icon-m"/>
            </button>
            <a href="/"> <img src={logo} alt="Build360 logo" className="w-32" /></a>
          </li>
          {
            routes
              .filter(({ display, role, requiresLogin }) => {
                const hasDisplayName = Boolean(display)
                const meetsLoginRequirement = requiresLogin
                  ? isLocalDev() || Boolean(user)
                  : true
                const meetsRoleRequirement = role
                  ? isLocalDev() || userRole.includes(role)
                  : true

                return (
                  hasDisplayName &&
                  meetsLoginRequirement &&
                  meetsRoleRequirement
                )
              })
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