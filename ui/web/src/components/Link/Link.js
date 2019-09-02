import React from 'react'
import classnames from 'classnames'
import { Link as RouterLink } from "react-router-dom"
import './Link.css'

export const Link = (props) =>
  <RouterLink {...props} className={classnames('Link', props.className)} />