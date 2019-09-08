import React from 'react'
import { SocialMedia } from '../SocialMedia/SocialMedia'
import logo from '../../assets/build360-logo.svg'
import { Link } from '../Link/Link'

export const Footer = () => (
  <footer className="footer flex items-center justify-between bg-black py-2 mt-8">
    <SocialMedia size="m" className="inline-flex justify-start -ml-2" />
    <div className="flex flex-col items-center">
      <Link className="block" anchor to="mailto::kentucktech@gmail.com">
        kentucktech@gmail.com
      </Link>
      <div className="Legal text-xs">
        © 2018-2019 Kentuck Tech, Inc. All Rights Reserved. Patent Pending. 
      </div>
    </div>
    <img src={logo} alt="Build360 logo" className="w-32" />
  </footer>
)