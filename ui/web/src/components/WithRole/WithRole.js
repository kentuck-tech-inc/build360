import React from 'react'
import { withRouter } from 'react-router-dom';
import { getUser, login } from '../../utils/authUtils.js'
import { isLocalDev } from '../../utils/envUtils.js';

class WithRole extends React.Component {
  render() {
    const {children, location, ...props} = this.props
    console.log(location)
    const user = getUser()

    if(!user && !isLocalDev()) {
      console.log("user not set")
      return ""
    }

    //console.log('searching for ' + props.Role)
    //console.log(user["cognito:groups"])

    if(isLocalDev()){
      console.log('local dev - skipping role check');
    } else if(!user["cognito:groups"].includes(props.Role)){
        return ""
    }

    return React.Children.map(children, (child) =>
      React.cloneElement(child, {
        ...props,
        user
      })
    )
  }
}

export default withRouter(WithRole)
