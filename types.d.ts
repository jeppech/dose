export type FeatureTypes = {
  'dimmer': {}
  'shutter': {}
  'color_red': {}
  'color_green': {}
  'color_blue': {}
  'color_white': {}
  'color_uv': {}
  'color_wheel': {}
  'gobo_wheel_static': {}
  'gobo_wheel_dynamic': {}
  'gobo_wheel_dynamic_rotation': {}
  'prism': {}
  'focus': {}
  'pan': {}
  'pan_fine': {}
  'tilt': {}
  'tilt_fine': {}
  'mode': {}
} 

export type FixtureFeature = {
  type: (keyof FeatureTypes) & string,
  channel: number,
  modifier_for?: string,
  functions?: {
    [key: string]: [number, number] | number,
  },  
}

export type FixtureDefinition = {
  mode: string,
  features: FixtureFeature[],
}
