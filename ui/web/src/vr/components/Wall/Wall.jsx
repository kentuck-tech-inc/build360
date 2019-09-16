import React from 'react'

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
    position={position}
    height={height}
    width={width}
    depth={depth}
    rotation={rotation}
    material={material}
  ></a-box>
}

export { Wall }