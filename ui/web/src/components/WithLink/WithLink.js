
import React from 'react'
import { Link } from '../Link/Link'

const WithLink = ({isLink, children, ...props}) => isLink
  ? <Link {...props}>
      {children}
    </Link>
  : children

export {WithLink}
