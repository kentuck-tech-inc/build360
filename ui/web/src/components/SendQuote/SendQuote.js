import React from 'react'
import classnames from 'classnames'
import './SendQuote.css'
import { withChatkitOneToOne, TokenProvider, ChatkitProvider } from '@pusher/chatkit-client-react'
import { sqMetersToSqFt } from '../../utils/numberUtils'
import { getTotalSurfaceArea, getAreasByMaterial } from '../../vr/utils'

const instanceLocator = "v1:us1:294a4690-7f3c-466d-9ce4-16c37331651a"
const tokenProvider = new TokenProvider({
  url: "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/294a4690-7f3c-466d-9ce4-16c37331651a/token"
})

const SendQuoteWrapper = (props) => (
  <ChatkitProvider
    instanceLocator={instanceLocator}
    tokenProvider={tokenProvider}
    userId={'raedwa01'}
  >
    <SendQuoteButton otherUserId={'jane'} {...props} />
  </ChatkitProvider>
)

const SendQuoteButton = withChatkitOneToOne(
  (props) => {
    if(props.chatkit.isLoading) return null;

    const stringifyEstimate = (spec) => {
      const totalSquareFootage = getTotalSurfaceArea(spec.floors)
      const floorAreasByMaterial = getAreasByMaterial(spec.floors)
      const wallAreasByMaterial = getAreasByMaterial(spec.walls)
      const ceilingAreasByMaterial = getAreasByMaterial(spec.ceilings)

      return `---Quote Request---\n\nTotal Square Footage\n  ${sqMetersToSqFt(totalSquareFootage)}\n\n`
        + [
          { header: 'Floors', areaByMaterial: floorAreasByMaterial },
          { header: 'Walls', areaByMaterial: wallAreasByMaterial },
          { header: 'Ceilings', areaByMaterial: ceilingAreasByMaterial }
        ].map(({ header, areaByMaterial }) =>
          `${header}\n${
            Object.entries(areaByMaterial)
              .sort(([_1, a1], [_2, a2]) => a1 - a2)
              .map(([material, area]) => `  ${material}\n    ${sqMetersToSqFt(area)}`)
              .join('\n')
          }`
        )
        .join('\n\n')
    }

    const handleOnClick = (event) => {
      const estimateMessage = stringifyEstimate(props.spec)
      props.chatkit.sendSimpleMessage({ text: estimateMessage })
      props.onClick instanceof Function && props.onClick(event)
    }

    const { className, ...restProps } = props

    return (
      <button {...restProps} className={classnames('btn', className)} onClick={handleOnClick}>Send current estimate to Builder</button>
    )
  }
)

export const SendQuote = SendQuoteWrapper
