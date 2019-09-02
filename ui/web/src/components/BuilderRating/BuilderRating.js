import React from 'react'
import classnames from 'classnames'
import './BuilderRating.css'

class BuilderRating extends React.Component {
  render() {
    const {builder, className} = this.props
    const classname = classnames(
      'BuilderRating',
      className
    )

    const rating = parseFloat(builder.rating.replace('%', ''))
    console.log(rating);

    return (
      <section className={classname}>
        <h2 className="mb-2">Rating</h2>
        <div className="RatingGroup">
          {
            new Array(5).fill().map((_, i, array) => {
              const decimalRating = rating / 100
              const baseAmount = 1 / array.length
              const fullAmount = (i+1) * baseAmount
              const fillAmount = fullAmount > decimalRating
                ? (decimalRating - baseAmount * i) / baseAmount
                : 1
              console.log(fillAmount)
              const style = {
                backgroundImage: `linear-gradient(to right, gold, gold ${fillAmount * 100}%, transparent ${fillAmount * 100}%, transparent 100%)`
              }
              return (
                <div className="RatingWrapper" key={i} style={style}>
                  <label className="Rating">
                    <input
                      type="radio"
                      name="rating"
                      value={i + 1}
                    />
                  </label>
                </div>
              )
            })
          }
        </div>
        <strong className="ml-4">{builder.rating}</strong>
      </section>
    )
  }
}

export {BuilderRating}
