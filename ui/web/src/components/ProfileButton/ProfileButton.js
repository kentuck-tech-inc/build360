import React from 'react'
import { getUser, login } from '../../utils/authUtils'
import { Link } from "react-router-dom"
import './ProfileButton.css'

class ProfileButton extends React.Component {
  render() {
    const user = getUser()

    if(!user) {
      return (
        <button className="ProfileButton btn" onClick={() => login()}>
          Log in
        </button>
      )
    }

    return (
      <Link to="/profile" className="ProfileButton">
        Profile
      </Link>
    )
  }
}

export {ProfileButton}
