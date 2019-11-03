import * as AFRAME from 'aframe'
import { wallOptions, floorOptions, ceilingOptions } from '../customizationOptions'
import { wrappingModulus } from '../../../utils/numberUtils'
const THREE = window.THREE

const pageSize = 4

AFRAME.registerSystem('customize-on-click', {
  init: function () {
    this.state = {
      isMenuOpen: false,
      el: undefined,
      intersection: undefined,
      index: 0
    }

    this.menu = document.querySelector('#customization-menu')
    this.menu.header = document.querySelector('#header')
    this.menu.elements = [
      'closeButton',
      'leftButton',
      'rightButton',
      'optionsButton',
      'select-0',
      'select-1',
      'select-2',
      'select-3',
    ].map(id => this.menu.querySelector(`#${id}`))
    .reduce((obj, el) => {
      obj[el.id] = el
      return obj
    }, {})
  },
  openMenu: function(el, intersection) {
    const state = {
      isMenuOpen: true,
      el,
      intersection
    }
    this.update(state)
  },
  closeMenu: function() {
    const state = {
      isMenuOpen: false,
      el: undefined,
      intersection: undefined
    }
    this.update(state)
  },
  update: function(newState) {
    this.switchSelectedElement(this.state.el, newState.el)

    this.state = Object.assign(this.state, newState)
    if(this.state.isMenuOpen) {
      this.setMenuPose()
      this.addClickableToMenu()
      this.fillOptions()

      this.menu.setAttribute('visible', true)
    } else {
      this.removeClickableFromMenu()

      this.menu.setAttribute('visible', false)
    }
  },
  setMenuPose: function() {
    const cameraPosition = this.el.camera.getWorldPosition()
    const cameraDirection = this.el.camera.getWorldDirection()
    const distance = this.state.intersection.distance

    const menuPosition = cameraPosition.clone()
      .add(cameraDirection.multiplyScalar(1))

    this.menu.setAttribute('position', menuPosition)
    this.menu.object3D.lookAt(cameraPosition)
  },
  fillOptions: function() {
    const startIndex = this.state.index * pageSize
    console.log('Filling options from: ', startIndex)
    const currentSelection = this.state.options.slice(startIndex, startIndex + pageSize)
    const filledSelection = new Array(pageSize).fill().map((_, i) =>
      currentSelection[i] || 'color: #808080; src: ;'
    )
    filledSelection.forEach((material, index) => {
      this.menu.elements[`select-${index}`].removeAttribute('material')
      this.menu.elements[`select-${index}`].setAttribute('material', material)
    })
  },
  addClickableToMenu: function() {
    Object.entries(this.menu.elements).forEach(([id, el]) => {
      el.setAttribute('data-clickable')
    })
  },
  removeClickableFromMenu: function() {
    Object.entries(this.menu.elements).forEach(([id, el]) => {
      el.removeAttribute('data-clickable')
    })
  },
  switchSelectedElement: function(oldEl, newEl) {
    if(oldEl) {
      this.el.remove(this.state.selectionIndicator)
      delete this.state.selectionIndicator
    }

    if(newEl) {
      const selectionIndicator = newEl.cloneNode()
      const attributeNames = newEl.getAttributeNames()
      attributeNames.forEach((name) =>
        selectionIndicator.setAttribute(
          name,
          newEl.getAttribute(name)
        )
      )
      selectionIndicator.setAttribute('material', {
        transparent: true,
        opacity: 0.3,
        color: 'cyan',
      })

      this.state.selectionIndicator = selectionIndicator
      this.el.append(selectionIndicator)
    }
  },
  wall: function(el, intersection) {
    this.menu.header.setAttribute(
      'value',
      'Customize Wall'
    )
    this.state.options = wallOptions
    this.openMenu(el, intersection)
  },
  floor: function(el, intersection) {
    this.menu.header.setAttribute(
      'value',
      'Customize Floor'
    )
    this.state.options = floorOptions
    this.openMenu(el, intersection)
  },
  ceiling: function(el, intersection) {
    this.menu.header.setAttribute(
      'value',
      'Customize Ceiling'
    )
    this.state.options = ceilingOptions
    this.openMenu(el, intersection)
  },
  close: function(el, intersection) {
    this.closeMenu()
  },
  left: function(el, intersection) {
    const pages = Math.ceil(this.state.options.length / pageSize)
    const nextIndex = wrappingModulus(this.state.index - 1, pages)
    this.state.index = nextIndex || 0
    this.fillOptions()
  },
  right: function(el, intersection) {
    const pages = Math.ceil(this.state.options.length / pageSize)
    const nextIndex = wrappingModulus(this.state.index + 1, pages)
    this.state.index = nextIndex || 0
    this.fillOptions()
  },
  options: function(el, intersection) {
    console.warn('Implement options')
  },
  back: function(el, intersection) {
    console.warn('Implement back')
  },
  select: function(el, intersection) {
    const value = parseInt(el.getAttribute('data-value'))
    this.state.el.setAttribute('material', el.getAttribute('material'))
  }
});

AFRAME.registerComponent('customize-on-click', {
  init: function () {
    this.el.addEventListener('click', (evt) => {
      const type = this.el.getAttribute('customizeType')
      const action = this.system[type].bind(this.system)
      if(action && action instanceof Function) {
        action(this.el, evt.detail.intersection)
      }
    });
  }
});