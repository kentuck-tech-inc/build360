import React from 'react'
import './SocialMedia.css'
import twitterImg from '../../assets/twitter.svg'
import facebookImg from '../../assets/facebook.png'
import pinterestImg from '../../assets/pinterest.svg'
import instagramImg from '../../assets/instagram.png'


const mediaLinks = [
  {
    name: 'twitter',
    link: 'https://twitter.com/Build360App',
    img: <img src={twitterImg} alt="twitter icon" />
  },
  {
    name: 'facebook',
    link: 'https://www.facebook.com/build360app',
    img: <img src={facebookImg} alt="facebook icon" />
  },
  {
    name: 'pinterest',
    link: 'https://www.pinterest.com/build360app/',
    img: <img src={pinterestImg} alt="pinterest icon" />
  },
  {
    name: 'instagram',
    link: 'https://www.instagram.com/build360app/',
    img: <img src={instagramImg} alt="instagram icon" />
  },
]

export const SocialMedia = () => <ul className="SocialMedia-list">
  {
    mediaLinks.map(({name, link, img}, index) => (
      <li
        className={`SocialMedia-item ${name}`}
        key={index}
      >
        <a className="SocialMedia-link" href={link}>{img}</a>
      </li>
    ))
  }
</ul>