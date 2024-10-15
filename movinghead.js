/**
 * Definition for Shehds 100W LED Moving Head
 * 
 * @type {import('./types').FixtureDefinition}
 */
export const fixture = {
  mode: '14',
  features: [
    {
      type: 'dimmer',
      channel: 1,
    },
    {
      type: 'shutter',
      channel: 2,
      functions: {
        close: 0, //[0, 3],
        strobe: [4, 251],
        open: 255, //[252, 255],
      }
    },
    {
      type: 'color_wheel',
      channel: 6,
      functions: {
        white: 0, //[0, 4],
        red: 5, //[5, 9],
        orange: 10, //[10, 14],
        yellow: 15, //[15, 19],
        green: 20, //[20, 24],
        magenta: 25, //[25, 29],
        cyan: 30, //[30, 34],
        white_red: 40, //[40, 45],
        red_green: 46, //[46, 49],
        green_blue: 50, //[50, 54],
        blue_yellow: 55, //[55, 59],
        yellow_magenta: 60, //[60, 64],
        magenta_cyan: 65, //[65, 69],
        cyan_green: 70, //[70, 74],
        green_white: 75, //[75, 79],
        cycle: [80, 225],
      }
    },
    {
      type: 'gobo_wheel_static',
      channel: 7,
      functions: {
        open: 0, //[0, 9],
        gobo1: 10, //[10, 19],
        gobo2: 20, //[20, 29],
        gobo3: 30, //[30, 39],
        gobo4: 40, //[40, 49],
        gobo5: 50, //[50, 59],
        gobo6: 60, //[60, 69],
        gobo7: 70, //[70, 79],
        gobo1_shake: [221, 225],
        gobo2_shake: [226, 230],
        gobo3_shake: [231, 235],
        gobo4_shake: [236, 240],
        gobo5_shake: [241, 245],
        gobo6_shake: [246, 250],
        gobo7_shake: [251, 255],
        cycle_cw: [80, 129],
        cycle_ccw: [135, 220],
      }
    },
    {
      type: 'gobo_wheel_dynamic',
      channel: 8,
      functions: {
        open: 0, //[0, 9],
        gobo1: 10, //[10, 19],
        gobo2: 20, //[20, 29],
        gobo3: 30, //[30, 39],
        gobo4: 40, //[40, 49],
        gobo5: 50, //[50, 59],
        gobo6: 60, //[60, 69],
        gobo1_shake: [226,230],
        gobo2_shake: [231,235],
        gobo3_shake: [236,240],
        gobo4_shake: [241,245],
        gobo5_shake: [246,250],
        gobo6_shake: [251,255],
        cycle_cw: [70, 129],
        cycle_ccw: [135, 225],
      }
    },
    {
      type: 'gobo_wheel_dynamic_rotation',
      modifier_for: 'gobo_wheel_dynamic',
      channel: 9,
      functions: {
        static: [0, 63],
        cw: [64, 190],
        ccw: [191, 255],
      }
    },
    {
      type: 'prism',
      channel: 10,
      functions: {
        off: 0, //[0, 9],
        on: 10, //[10, 14],
        rotate: [15, 225],
      },
    },
    {
      type: 'focus',
      channel: 11,
    },
    {
      type: 'pan',
      channel: 3,
    },
    {
      type: 'pan_fine',
      channel: 12,
    },
    {
      type: 'tilt',
      channel: 4,
    },
    {
      type: 'tilt_fine',
      channel: 13,
    },
  ]
}
