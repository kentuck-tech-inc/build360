import React from 'react'
import './RegisterPage.css'
import build360Logo from '../../assets/build360-logo.png'
import { SocialMedia } from '../../components/SocialMedia/SocialMedia';

class RegisterPage extends React.Component {

  handleMessage = (event) => {
    console.log(event)
  }

  componentDidMount() {
    window.addEventListener('message', this.handleMessage)
  }

  componentWillUnmount() {
    window.removeEventListener('message', this.handleMessage)
  }

  render () {
    return (
      <section className="RegisterPage">
        <h1 className="MainLogo-wrapper">
          <img className="MainLogo" src={build360Logo} alt="Build360 logo" />
        </h1>
        <div className="Forms">
          <iframe className="UserForm" src="https://docs.google.com/forms/d/e/1FAIpQLSdll8WSlOHX8rVpx0LCePAsm6znGTgvB3oHpeX8TZFpq6i2Ow/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScaf97sVrVDxz5-pHFdi6wtlfYNwII41D9SwA3nYjOnCjzXYg/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
        <SocialMedia />
      </section>
    )
  }
}

export { RegisterPage }