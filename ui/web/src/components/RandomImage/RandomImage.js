import React from 'react'
import PropTypes from 'prop-types'
import { Image } from '../Image/Image'
import { getRandomFromList } from '../../utils/randomUtils'
import { wrappingModulus } from '../../utils/numberUtils'
import * as contemporary from '../../assets/houses/contemporary'
import * as modern from '../../assets/houses/modern'
import * as traditional from '../../assets/houses/traditional'
import * as builders from '../../assets/builders'

const srcGroups = {
  houses: {
    ...contemporary,
    ...modern,
    ...traditional
  },
  contemporary,
  modern,
  traditional,
  builders
}

export class RandomImage extends React.Component {
  static propTypes = {
    index: PropTypes.number,
    from: PropTypes.oneOf(['houses', 'contemporary', 'modern', 'traditional', 'builders']),
    srcSet: PropTypes.array,
  }

  constructor(props) {
    super(props)
    const { index, from, srcSet } =  this.props
    let randomSrc

    if(props.from) {
      const srcGroup = srcGroups[from]
      const groupKeys = Object.keys(srcGroup)
      const randomKey = index !== undefined
        ? groupKeys[wrappingModulus(index, groupKeys.length)]
        : getRandomFromList(groupKeys)
      randomSrc = srcGroup[randomKey]

    } else {
      randomSrc = index !== undefined
        ? srcSet[wrappingModulus(index, srcSet.length)]
        : getRandomFromList(props.srcSet);
    }

    /**
     *  I'm setting the src inside of the constructor so the
     *  images don't change between re-renders.
     *  if the props change, src changes or what ever
     *  the image will also not change.
     *  this may be a problem later, but hopefully we won't
     *  need this component later.
     */
    this.state = {
      imgSrc: randomSrc
    }
  }

  render() {
    const { imgSrc } = this.state
    const {
      from,
      srcSet: _omit_srcSet,
      index,
      ...props
    } = this.props;
    return <Image {...props} src={imgSrc} alt={`${from} ${index}`}/>
  }
}