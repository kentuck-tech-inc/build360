import React from 'react'
import '../CustomizeOnClick/CustomizeOnClick'
import { ftToMeters } from '../../../utils/numberUtils'

const Floor = ({
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
  //   customizeType="floor"
  //   data-clickable
  //   rotation={rotation}
  //   geometry={`primitive: custom; vertices: ${vertexString}`}
  //   material={material}
  // ></a-entity>
  return <a-box
    customize-on-click
    customizeType="floor"
    data-clickable
    width={ftToMeters(20)}
    depth={ftToMeters(20)}
    height="0.05"
    material={material}
  ></a-box>
}

export { Floor }