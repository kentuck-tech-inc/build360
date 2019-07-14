import React from 'react';
import { Link } from "react-router-dom"
import './Navigation.css'
import { HomePage } from '../../pages/HomePage/HomePage';
import { LoginPage } from '../../pages/LoginPage/LoginPage';
import { BuilderSearchPage } from '../../pages/BuilderSearchPage/BuilderSearchPage';
import { ComingSoonPage } from '../../pages/ComingSoonPage/ComingSoonPage';

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
    to: '/buyers',
    display: 'Buyers',
    component: ComingSoonPage
  },
  {
    to: '/login',
    display: 'Log in',
    component: LoginPage
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
            routes.map(({to, display}) => (
              <li>
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