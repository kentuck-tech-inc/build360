
import React from 'react'
import { withRouter } from 'react-router-dom';
import { getUser, login } from '../../utils/authUtils.js'

class WithAuth extends React.Component {
  render() {
    const {children, location, ...props} = this.props
    console.log(location)
    const user = getUser()

    if(!user) {
      login()
      return <p>Redirecting to login..</p>
    }

    return React.Children.map(children, (child) =>
      React.cloneElement(child, {
        ...props,
        user
      })
    )
  }
}

export default withRouter(WithAuth)
