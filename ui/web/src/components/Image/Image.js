import React from 'react'
import classnames from 'classnames'
import './Image.css'

class Image extends React.Component {
  render() {
    const {defaultSrc, alt, ...props} = this.props

    if(!alt) {
      console.warn('Image not using an alt text, please add alt text for accessibility')
    }

    return (
      <img alt={alt} {...props} className={classnames("Image", this.props.className)} />
    )
  }
}

export {Image}
