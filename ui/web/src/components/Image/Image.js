import React from 'react'
import classnames from 'classnames'
import './Image.css'

class Image extends React.Component {
  render() {
    const {defaultSrc, ...props} = this.props
    return (
      <img {...props} className={classnames("Image", this.props.className)} />
    )
  }
}

export {Image}
