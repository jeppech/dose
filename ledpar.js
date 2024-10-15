/**
 * Definition for ADJ TriPar Profile PLUS
 * @type {import('./types').FixtureDefinition}
 */
export const fixture = {
  mode: '6',
  features: [
    {
      type: 'color_red',
      channel: 1,
    },
    {
      type: 'color_green',
      channel: 2,
    },
    {
      type: 'color_blue',
      channel: 3,
    },
    {
      type: 'color_uv',
      channel: 4,
    },
    {
      type: 'shutter',
      channel: 5,
      functions: [
        {
          type: 'close',
          range: 0, //[0, 31],
        },
        {
          type: 'open',
          range: 255, // 32, 63 - 96, 127 - 160, 191 - 224, 255
        },
        {
          type: 'strobe',
          range: [64, 95],
        },
        {
          type: 'pulse',
          range: [96, 127],
        },
        {
          type: 'strobe_random',
          range: [192, 223],
        }
      ]
    },
    {
      type: 'dimmer',
      channel: 6,
    }
  ]
}
