import React from 'react'

class CustomizationMenu extends React.Component {
  headerRef = React.createRef()

  componentDidMount() {
    // this.headerRef.current.setAttribute('wrapCount', 17)
  }

  render() {
    return (
      <a-plane
        id="customization-menu"
        material="transparent: true; opacity: 0.5; color: black;"
        position="0 1 0"
      >
        <a-text
          id="header"
          value="Customize Ceiling"
          position="-0.45 0.45 0.01"
          width="2"
          baseline="top"
        ></a-text>

        <a-box
          id="closeButton"
          customizeType="close"
          customize-on-click
          data-clickable
          color="red"
          scale="0.1 0.1 0.02"
          position="0.4 0.4 0.01"
        ><a-text align="center" position="0 0 0.6" value="X" width="20"></a-text></a-box>

        <a-box
          id="leftButton"
          customizeType="left"
          customize-on-click
          data-clickable
          color="white"
          scale="0.1 0.1 0.02"
          position="-0.4 0 0.01"
        ><a-text color="black" align="center" position="0 0 0.6" value="<" width="20"></a-text></a-box>

        <a-box
          id="rightButton"
          customizeType="right"
          customize-on-click
          data-clickable
          color="white"
          scale="0.1 0.1 0.02"
          position="0.4 0 0.01"
        ><a-text color="black" align="center" position="0 0 0.6" value=">" width="20"></a-text></a-box>

        <a-box
          id="optionsButton"
          customizeType="options"
          customize-on-click
          data-clickable
          color="white"
          scale="0.1 0.1 0.02"
          width="3"
          position="0 -0.4 0.01"
        ><a-text color="black" align="center" baseline="center" position="0 0 0.6" value=". . ." width="20"></a-text></a-box>

        <a-plane
          id="select-0"
          customizeType="select"
          data-value="0"
          customize-on-click
          data-clickable
          color="black"
          scale="0.275 0.275 0.02"
          position="-0.1625 0.1625 0.01"
        >
        </a-plane>

        <a-plane
          id="select-1"
          customizeType="select"
          data-value="1"
          customize-on-click
          data-clickable
          color="black"
          scale="0.275 0.275 0.02"
          position="0.1625 0.1625 0.01"
        >
        </a-plane>

        <a-plane
          id="select-2"
          customizeType="select"
          data-value="2"
          customize-on-click
          data-clickable
          color="black"
          scale="0.275 0.275 0.02"
          position="-0.1625 -0.1625 0.01"
        >
        </a-plane>

        <a-plane
          id="select-3"
          customizeType="select"
          data-value="3"
          customize-on-click
          data-clickable
          color="black"
          scale="0.275 0.275 0.02"
          position="0.1625 -0.1625 0.01"
        >
        </a-plane>
      </a-plane>
    )
  }
}

export { CustomizationMenu }