import React from 'react'
import classnames from 'classnames'
import './Card.css'

class Card extends React.Component {
  static defaultProps = {
    dark: true
  }
  render() {
    const {children, className, dark} = this.props;
    const childrenLength = React.Children.count(children)
    const childrenWithClasses = React.Children.map(children, (child, index) =>
      React.isValidElement(child)
        ? React.cloneElement(child, {
          className: classnames(child.className, {
            'first': index === 0,
            'last': index === (childrenLength - 1)
          })
        })
        : child
    )
    return (
      <section className={classnames("Card", {'dark': dark, 'light': !dark}, className)}>
        {children}
        {/* {childrenWithClasses} */}
      </section>
    )
  }
}

export {Card}
