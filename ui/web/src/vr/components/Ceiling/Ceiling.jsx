import React from 'react'
import '../CustomizeOnClick/CustomizeOnClick'
import { WALL_HEIGHT } from '../../utils'
import { ftToMeters } from '../../../utils/numberUtils'

const Ceiling = ({
  floorName,
  roomName,
  windows,
  doors,
  position,
  width,
  height,
  depth,
  rotation,
  material,
  verticies,
  customizations,
}) => {
  const vertexString = verticies.map((positions) => positions.join(' ')).join(', ')
  // return <a-entity
  //   customize-on-click
  //   customizeType="ceiling"
  //   data-clickable
  //   geometry={`primitive: custom; vertices: ${vertexString}`}
  //   material={material}
  // ></a-entity>
  return <a-box
    customize-on-click
    customizeType="ceiling"
    data-clickable
    width={ftToMeters(20)}
    depth={ftToMeters(20)}
    height="0.05"
    position={`0 ${WALL_HEIGHT} 0`}
    material={material}
  ></a-box>
}

export { Ceiling }