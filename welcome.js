const DMX = require('dmx')

const DMX_FREQUENCY = 10
const DMX_STEP_MS = 1000 / DMX_FREQUENCY

const dmx = new DMX()
// const dmx_driver = new EnttecOpenUSBDMXDriver('/dev/tty.usbserial-B001AUFL')
const universe = dmx.addUniverse("dmx-js", "enttec-open-usb-dmx", '/dev/tty.usbserial-B001AUFL', {dmx_speed: DMX_FREQUENCY})


// laser
// universe.update({ 100: 168 })

const brightness = 200
const tilt_home = 255
const pan_home = 110

const tilt_invert = 255 - tilt_home
const pan_invert = 255 - pan_home

const color = 95
const gobo1 = 40
const gobo2 = 60
const gobo2_rotate = 200

const prism = 180
const focus = 220
// movinghead 1 addr = 1

const mh1_init = { 1: brightness, 2: 255, 3: pan_home, 4: tilt_home, 6: color, 7: gobo1, 8: gobo2, 9: gobo2_rotate, 10: 35, 11: focus, 12: 255 }
const mh2_init = { 15: brightness, 16: 255, 17: pan_invert, 18: tilt_invert, 20: color, 21: gobo1, 22: gobo2, 23: gobo2_rotate, 24: 35, 25: focus, 26: 255 }

universe.update(mh1_init)
universe.update(mh2_init)


