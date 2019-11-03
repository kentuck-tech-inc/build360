import React from 'react'
import { Floor } from './Floor'
import { getAllFloorsOrCeilings } from '../../utils'

const Floors = ({ floorplan }) => {
  const floors = getAllFloorsOrCeilings(floorplan)
  return floors.map((props, index) => (
    <Floor
      key={index}
      { ...props }
    ></Floor>
  ));
}

export { Floors }