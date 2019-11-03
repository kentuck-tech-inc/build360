import React from 'react'
import { Ceiling } from './Ceiling'
import { getAllFloorsOrCeilings } from '../../utils'

const Ceilings = ({ floorplan }) => {
  const ceilings = getAllFloorsOrCeilings(floorplan, true)
  return ceilings.map((props, index) => (
    <Ceiling
      key={index}
      { ...props }
    ></Ceiling>
  ));
}

export { Ceilings }