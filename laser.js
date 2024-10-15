/**
 * Definition for Shehds 3W RGB Laser
 * 
 * @type {import('./types').FixtureDefinition}
 */
export const fixture = {
  mode: '25',
  features: [
    {
      type: 'mode',
      channel: 1,
      functions: {
        off: 0, //[0, 41],
        manual: 42, //[42, 83],
        auto_animation: 84, //[84, 125],
        auto_beam: 126, //[126, 167],
        sound_beam: 168, //[168, 209],
        sound_animation: 210, //[210, 251],
        sound_manual: 255, //[252, 255],
      }
    },
    {
      type: 'pattern_a_group_1',
      channel: 2,
      functions: {
        pattern1: 0, //[0, 31],
        pattern2: 32, //[32, 63],
        pattern3: 64, //[64, 95],
        pattern4: 96, //[96, 127],
        pattern5: 128, //[128, 159],
        pattern6: 160, //[160, 191],
        pattern7: 192, //[192, 223],
        pattern8: 224, //[224, 255],
      }
    },
    {
      type: 'pattern_a_group_2',
      channel: 3,
      functions: {
        pattern1: 0, //[0, 15],
        pattern2: 16, //[16, 31],
        pattern3: 32, //[32, 47],
        pattern4: 48, //[48, 63],
        pattern5: 64, //[64, 79],
        pattern6: 80, //[80, 95],
        pattern7: 96, //[96, 111],
        pattern8: 112, //[112, 127],
        pattern9: 128, //[128, 143],
        pattern10: 144, //[144, 159],
        pattern11: 160, //[160, 175],
        pattern12: 176, //[176, 191],
        pattern13: 192, //[192, 207],
        pattern14: 208, //[208, 223],
        pattern15: 224, //[224, 239],
        pattern16: 240, //[240, 255],
      }
    },
    {
      type: 'pattern_a_rotate',
      channel: 4,
      functions: {
        static: [0, 127],
        cw: [128, 191],
        ccw: [192, 255],
      }
    },
    {
      type: 'pattern_a_flip_horizontal',
      channel: 5,
      functions: {
        static: [0, 127],
        continuous: [128, 255],
      }
    },
    {
      type: 'pattern_a_flip_vertical',
      channel: 6,
      functions: {
        static: [0, 127],
        continuous: [128, 255],
      }
    },
    {
      type: 'pattern_a_move_horizontal',
      channel: 7,
      functions: {
        static: [0, 127],
        continuous: [128, 255],
      }
    },
    {
      type: 'pattern_a_move_vertical',
      channel: 8,
      functions: {
        static: [0, 127],
        continuous: [128, 255],
      }
    },
    {
      type: 'pattern_a_scale',
      channel: 9,
      functions: {
        static: [0, 63],
        continuous_down: [64, 127],
        continuous_up: [128, 191],
        continuous_down_up: [192, 255],
      }
    },
    {
      type: 'pattern_a_paint_speed',
      channel: 10,
      functions: {
        start_end: [0, 127],
        start_end_start: [128, 255],
      }
    },
    {
      type: 'pattern_a_scan_speed',
      channel: 11,
      functions: {
        // The slower the scan speed, the more visible laser dots
        fast_slow_lines: [0, 127],
        fast_slow_dots: [128, 255],
      }
    },
    {
      type: 'pattern_a_color',
      channel: 12,
      functions: {
        inherit: 0, //[0, 7],
        white: 8, //[8, 15],
        red: 16, //[16, 23],
        yellow: 24, //[24, 31],
        green: 32, //[32, 39],
        cyan: 40, //[40, 47],
        blue: 48, //[48, 55],
        magenta: 56, //[56, 63],
        cycle: [64, 127],
        rainbow_cycle: [128, 191],
        draw_cycle: [192, 255],
      }
    },
    {
      type: 'pattern_a_maximize',
      channel: 13
    },
    {
      type: 'pattern_b_group_1',
      channel: 14,
      copy: 'pattern_a_group_1',
    },
    {
      type: 'pattern_b_group_2',
      channel: 15,
      copy: 'pattern_a_group_2',
    },
    {
      type: 'pattern_b_rotate',
      channel: 16,
      copy: 'pattern_a_rotate',
    },
    {
      type: 'pattern_b_flip_horizontal',
      channel: 17,
      copy: 'pattern_a_flip_horizontal',
    },
    {
      type: 'pattern_b_flip_vertical',
      channel: 18,
      copy: 'pattern_a_flip_vertical',
    },
    {
      type: 'pattern_b_move_horizontal',
      channel: 19,
      copy: 'pattern_a_move_horizontal',
    },
    {
      type: 'pattern_b_move_vertical',
      channel: 20,
      copy: 'pattern_a_move_vertical',
    },
    {
      type: 'pattern_b_scale',
      channel: 21,
      copy: 'pattern_a_scale',
    },
    {
      type: 'pattern_b_paint_speed',
      channel: 22,
      copy: 'pattern_a_paint_speed',
    },
    {
      type: 'pattern_b_scan_speed',
      channel: 23,
      copy: 'pattern_a_scan_speed',
    },
    {
      type: 'pattern_b_color',
      channel: 24,
      copy: 'pattern_a_color',
    },
    {
      type: 'pattern_b_maximize',
      channel: 25,
      copy: 'pattern_a_maximize',
    },
  ]
}
