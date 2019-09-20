import React from 'react'
import '../CustomizeOnClick/CustomizeOnClick'

const Wall = ({
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
  customizations,
}) => {
  return <a-box
    customize-on-click
    customizeType="wall"
    data-clickable
    position={position}
    height={height}
    width={width}
    depth={depth}
    rotation={rotation}
    material={material}
  ></a-box>
}

export { Wall }