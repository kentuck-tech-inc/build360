import React from 'react'
import 'aframe'
import './components/CustomGeometry/CustomGeometry'
import './components/CustomizeOnClick/CustomizeOnClick'
import { Walls } from './components/Wall/Walls'
import { Floors } from './components/Floor/Floors'
import { Ceilings } from './components/Ceiling/Ceilings'
import { CustomizationMenu } from './components/CustomizationMenu/CustomizationMenu'
import './FloorplanCustomization.css'
import selectionBorder from '../assets/vr/selection-border.png'
import dryWall from '../assets/vr/wall/dry-wall.png'
import whiteTiles from '../assets/vr/wall/white-tiles.png'
import brick from '../assets/vr/wall/brick.jpg'
import wood from '../assets/vr/floor/wood.png'
import hexbump from '../assets/vr/floor/hexbump.png'
import stucco from '../assets/vr/ceiling/stucco.png'

class FloorplanCustomization extends React.Component {
  render() {
    const { floorplan: { map: floorplanMap } = {} } = this.props;

    return (
      <div className="FloorplanCustomization">
        <a-scene embedded customize-on-click cursor="rayOrigin: mouse" raycaster="interval: 100; objects: [data-clickable]">
          <a-assets>
            <img id="selection-border" src={selectionBorder} />
            <img id="dry-wall" src={dryWall} />
            <img id="wood" src={wood} />
            <img id="white-tiles" src={whiteTiles} />
            <img id="brick" src={brick} />
            <img id="stucco" src={stucco} />
            <img id="hexbump" src={hexbump} />
          </a-assets>
          <a-sky color="#16161d"></a-sky>
          <a-sphere
            scale="0.1 0.1 0.1"
            light="type: point; intensity: 0.5; distance: 20; decay: 2; color: #fcfaef"
            position="0 2.5 0"
            color="white"
          ></a-sphere>
          <a-cylinder
            radius="0.2"
            height="2"
            light="type: point; intensity: 0.75; distance: 50; decay: 2; color: #fcfaef"
            position="-2.5 1 -2.5"
          ></a-cylinder>
          <a-cylinder
            radius="0.2"
            height="2"
            light="type: point; intensity: 0.75; distance: 50; decay: 2; color: #fcfaef"
            position="2.5 1 2.5"
          ></a-cylinder>
          <Walls floorplan={floorplanMap} />
          <Floors floorplan={floorplanMap} />
          <Ceilings floorplan={floorplanMap} />
          <CustomizationMenu />
          <a-camera position="0 1.5 0">
          </a-camera>
        </a-scene>
      </div>
    )
  }
}

export {FloorplanCustomization}