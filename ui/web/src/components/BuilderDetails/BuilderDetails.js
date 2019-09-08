import React from 'react'
import classnames from 'classnames'
import { wrappingModulus } from '../../utils/numberUtils'
import './BuilderDetails.css'

const currentYear = new Date().getFullYear()
const bios = [
  (builder) => {
    const names =  builder.owner.split(' ')
    const lastName = names[names.length - 1]
    const years = currentYear - builder.founded
    return `Mr. ${lastName} has been serving central Kentucky for over ${years} years. With dozens of commercial and industrial projects completed in a 9 county area, you are certain to find some masterpieces that he has built or even walked through them yourself! From schools to government offices, Mr. ${lastName} delivers. What began as a family remodeling business with his 2 sons, the company now boasts over 2 dozen employees, always willing to listen to their customers. Thank you for visiting our profile. We look forward to serving the communities of Kentucky for many years to come.  With a 1 year warranty on every project, you will always have peace of mind should we need to step in.`
  },
  (builder) => {
    const name = builder.companyName
    const years = currentYear - builder.founded
    return `${name} has maintained it's same hometown, family owned business for ${years} years. While still just me and my son and wife, we continue to specialize in custom homes that you will not find anywhere else. We limit our projects to no more than 10 per year so that we may focus on quality, not quantity. We utilize the latest technology for our homes in the pre-construction process, including aerial video via drone and virtual reality walk-throughs you can see right here on our profile. We specialize in modern and contemporary homes, but are willing to try something new as well.`
  },
  (builder) => {
    const name = builder.owner
    return `${name} has demonstrated his unique perspective on condos and apartments that rival some of the best in major metro areas like New York City and San Francisco. Featuring only the best of the best in quality and workmanship, you are certain to always feel like a king or queen when residing in a ${builder.companyName} unit. From marble floors to granite counter-tops, heated floors and waterfall showers, you are sure to be pleased. Our typical project is $1M to $5M and is completed within 12 months. A staff of 10, including a designer, architect, and exclusive tradesmen, our elite approach to first class living is apparent in every project will complete. We stand behind our workmanship for 3 years 100% replacement to give you the ultimate in peace of mind.`
  }
]

class BuilderDetails extends React.Component {
  render() {
    const {builder, className} = this.props
    const classname = classnames(
      'BuilderDetails',
      className
    )

    const bio = bios[wrappingModulus(parseInt(builder.id), bios.length)](builder)

    return (
      <p className={classname}>
        {bio}
      </p>
    )
  }
}

export {BuilderDetails}
