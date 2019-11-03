import React from 'react'
import classnames from 'classnames'
import { Link as RouterLink } from "react-router-dom"
import './Link.css'

export const Link = ({ anchor, ...props }) => {
  const classname = classnames('Link', props.className)

  if(anchor) {
    return <a {...props} href={props.to} className={classname} />
  }

  return <RouterLink {...props} className={classname} />
}