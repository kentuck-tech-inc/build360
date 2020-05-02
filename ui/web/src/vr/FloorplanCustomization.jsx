import React from 'react'
import 'aframe'
import './components/CustomGeometry/CustomGeometry'
import './components/CustomizeOnClick/CustomizeOnClick'
import { Walls } from './components/Wall/Walls'
import { Floors } from './components/Floor/Floors'
import { Ceilings } from './components/Ceiling/Ceilings'
import { CustomizationMenu } from './components/CustomizationMenu/CustomizationMenu'
import './FloorplanCustomization.css'
import * as walls from '../assets/vr/wall';
import * as floors from '../assets/vr/floor';
import * as ceilings from '../assets/vr/ceiling';

class FloorplanCustomization extends React.Component {
  render() {
    const { floorplan: { map: floorplanMap } = {}, sceneRef } = this.props;

    return (
      <div className="FloorplanCustomization">
        <a-scene ref={sceneRef} embedded customize-on-click cursor="rayOrigin: mouse" raycaster="interval: 30; objects: [data-clickable]">
          <a-assets>
            {
              Object.entries(walls).map(([name, src]) => (
                <img alt={`${name}-wall-texture`} id={name} src={src} />
              ))
            }
            {
              Object.entries(floors).map(([name, src]) => (
                <img alt={`${name}-floor-texture`} id={name} src={src} />
              ))
            }
            {
              Object.entries(ceilings).map(([name, src]) => (
                <img alt={`${name}-ceiling-texture`} id={name} src={src} />
              ))
            }
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