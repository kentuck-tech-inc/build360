const Floorplan = {
  floors: [Floor],
}

const Floor = {
  name: String,
  level: Number,
  rooms: [Room],
}

const Room = {
  name: String,
  id: String,
  walls: [Wall],
  /** Post first draft */
  stairs: [Stairs],
  /** Post MVP */
  furniture: [Furniture],
  customization: RoomCustomization,
}

const RoomCustomization = {
  ceiling: CeilingMaterial,
  floor: FloorMaterial,
  walls: WallCustomization,
}

const Wall = {
  start: { x: Number, z: Number },
  end: { x: Number, z: Number },
  windows: [Window],
  doors: [Door],
  customization: WallCustomization,
}

const WallCustomization = {
  material: WallMaterial,
  crownMolding: CrownMouldingOption,
  baseMolding: BaseMoldingOption
}

const Window = {
  start: { x: Number, y: Number },
  /** There may be standard widths and heights for windows */
  width: Number,
  height: Number,
  customization: WindowCustomization,
}

const WindowCustomization = {
  type: WindowTypeOption,
  trim: WindowTrimOption,
}

const Door = {
  start: { x: Number },
  /** There may be standard widths and heights for windows */
  width: Number,
  height: Number,
  customization: DoorCustomization,
}

const DoorCustomization = {
  type: DoorTypeOption,
  material: DoorMaterial,
  trim: DoorTrimOption,
}

/**
 * cascading customization options
 * - options declared at higher level will apply to all unless specified at lower level
 */