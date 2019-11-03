import React from 'react'
import classnames from 'classnames';
import {observe, unobserve} from '../../utils/intersectionUtils'
import { generateId } from '../../utils/stringUtils'
import './FadeInOnVisible.css'

class FadeInOnVisible extends React.Component {
  ref = React.createRef()

  componentDidMount() {
    const wrapperEl = this.ref.current
    Array.from(wrapperEl.children).forEach(child => {
      child.classList.add('fade-in')
      observe(child, (entry) => {
        unobserve(entry.target)
        entry.target.classList.add('visible')
      })
    })
  }

  componentWillUnmount() {
    const wrapperEl = this.ref.current
    Array.from(wrapperEl.children).forEach(child => {
      unobserve(child);
    })
  }

  render() {
    return <div ref={this.ref} className={classnames("FadeInOnVisible", this.props.className)}>
      { this.props.children }
    </div>
  }
}

export {FadeInOnVisible}
