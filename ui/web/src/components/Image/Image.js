import React from 'react'
import classnames from 'classnames'
import './Image.css'

class Image extends React.Component {
  render() {
    return (
      <img {...this.props} className={classnames("Image", this.props.className)} />
    )
  }
}

export {Image}
