import React from 'react'
import { Wall } from './Wall'
import { getAllWalls } from '../../utils'

const Walls = ({ floorplan }) => {
  const walls = getAllWalls(floorplan)
  return walls.map((props, index) => (
    <Wall
      key={index}
      { ...props }
    ></Wall>
  ));
}

export { Walls }