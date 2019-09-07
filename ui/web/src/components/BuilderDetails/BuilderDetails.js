import React from 'react'
import classnames from 'classnames'
import './BuilderDetails.css'

class BuilderDetails extends React.Component {
  render() {
    const {builder, className} = this.props
    const classname = classnames(
      'BuilderDetails',
      className
    )
    return (
      <p className={classname}>
        {builder.companyName}, lead by {builder.owner} has been building {builder.type} masterpieces since {builder.founded}.
        They service the following zip codes: {builder.locations}
      </p>
    )
  }
}

export {BuilderDetails}
