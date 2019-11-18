import React from 'react';
import './ProfilePage.css'

class ProfilePage extends React.Component {
  render () {
    const { user } = this.props
    console.log(user)
    return (
      <section>
        <h1>{user.name}</h1>
      </section>
    )
  }
}

export { ProfilePage }