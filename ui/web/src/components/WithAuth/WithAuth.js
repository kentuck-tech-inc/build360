
import React from 'react'
import {getUser} from '../../utils/authUtils.js'
import './WithAuth.css'

class WithAuth extends React.Component {
  render() {
    const {children, ...props} = this.props
    const user = getUser()

    if(!user) {
      window.location = `https://auth.build360.io/login?client_id=4mn7teeu4ojrg0tsi5chuargdr&response_type=code&scope=email+openid+phone+profile&redirect_uri=${encodeURIComponent(window.location)}`
      return <p>Redirecting to login..</p>
    }

    return React.Children.map(children, (child) =>
      React.cloneElement(child, {
        ...props,
        user: 'guest'
      })
    )
  }
}

export {WithAuth}
