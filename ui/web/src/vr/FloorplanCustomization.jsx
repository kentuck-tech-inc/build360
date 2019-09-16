import React from 'react'
import 'aframe'
import './components/CustomGeometry/CustomGeometry'
import { Walls } from './components/Wall/Walls'
import { radToDeg } from '../utils/numberUtils'
import './FloorplanCustomization.css'

function ftToMeters(ft) {
  return ft * 0.3048
}

function distance(start, end) {
  console.log(`getting distance between ${JSON.stringify(start)} and ${JSON.stringify(end)}`)
  return Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.z - start.z, 2))
}

class FloorplanCustomization extends React.Component {
  render() {
    const { floorplan: { map: floorplanMap } = {} } = this.props;
    const wallHeight = ftToMeters(9)
    const wallThickness = 0.05
    return (
      <div className="FloorplanCustomization">
        <a-scene embedded>
          <a-sky color="#4CC3D9"></a-sky>
          <a-entity geometry="primitive: custom; vertices: -1 0 -1, -1 0 1, 1 0 -1, 1 0 -1, -1 0 1, 1 0 1" material="color: white"></a-entity>
          <a-box position="-1 0.5 -3" rotation="0 45 0" color="#ffffff"></a-box>
          <Walls floorplan={floorplanMap} />
          <a-entity camera wasd-controls position="0 1.5 0">
          </a-entity>
        </a-scene>
      </div>
    )
  }
}

export {FloorplanCustomization}