const DMX = require('dmx')

const DMX_FREQUENCY = 10
const DMX_STEP_MS = 1000 / DMX_FREQUENCY

const dmx = new DMX()
// const dmx_driver = new EnttecOpenUSBDMXDriver('/dev/tty.usbserial-B001AUFL')
const universe = dmx.addUniverse("dmx-js", "enttec-open-usb-dmx", '/dev/tty.usbserial-B001AUFL', {dmx_speed: DMX_FREQUENCY})


// laser
// universe.update({ 100: 168 })

const brightness = 200
const tilt_home = 127
const pan_home = 127
const max_pan_offset = 60
const max_tilt_offset = 60
// movinghead 1 addr = 1

const mh1_init = { 1: brightness, 2: 255, 3: pan_home, 4: tilt_home, 6: 1, 7: 10, 8: 1, 9: 207, 10: 60 }
const mh2_init = { 15: brightness, 16: 255, 17: pan_home, 18: tilt_home, 20: 1, 21: 10, 22: 1, 23: 207, 24: 60 }

universe.update(mh1_init)
universe.update(mh2_init)

// movinghead 2 addr = 15

let strobe = false
let flash = false

const tilt_animation = new DMX.Animation().add({
  4: tilt_home - max_tilt_offset,
  18: tilt_home + max_tilt_offset,
}, 2000).add({
  4: tilt_home + max_tilt_offset,
  18: tilt_home - max_tilt_offset,
}, 2000).runLoop(universe)

setInterval(() => {
  const random_pan = min_max(pan_home - max_pan_offset, pan_home + max_pan_offset)
  const pan_inverted = 255 - random_pan
  new DMX.Animation().add({
    3: random_pan,
    17: pan_inverted,
  }, 1500).run(universe)
}, 3500)

// Color
function min_max(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const colors = [0, 5, 10, 15, 20, 25, 30, 180]
setInterval(() => {
  const random_color = min_max(0, colors.length - 1)

  universe.update({ 6: colors[random_color], 20: colors[random_color] })
}, 2500)

// Gobo
const gobos1 = [10, 20, 30, 40, 50, 60]
const gobos1_shake = [224,229,234,239,244,249]
const gobos2 = [30, 40, 50, 60]


setInterval(() => {
  const wheel1_or_2 = min_max(1, 2)
  const shake = min_max(0, 1)

  if (wheel1_or_2 == 2) {
    const random_gobo = min_max(0, gobos2.length - 1)
    const focus = 0

    const gobo = gobos2[random_gobo]

    universe.update({ 7: 0, 8: gobo, 11: focus, 21: 0, 22: gobo, 25: focus })
    console.log('gobowheel 2:', gobo)
  } else {
    const focus = 180
    const random_gobo = min_max(0, gobos1.length - 1)
    let gobo = gobos1[random_gobo]
    if (shake) {
      gobo = gobos1_shake[random_gobo]
    }
    universe.update({ 7: gobo, 8: 0, 11: focus, 21: gobo, 22: 0, 25: focus })
    console.log('gobowheel 1:', gobo, `shake: ${!!shake}`)
  }
}, 10000)


// Prism
setInterval(() => {
  const prism_on = min_max(0, 1)

  if (prism_on) {
    const prism_rotate = min_max(0, 1)
    const prism_value = prism_rotate ? 100 : 10

    console.log(`prism: on - rotate: ${!!prism_rotate}`)
    universe.update({ 10: prism_value, 24: prism_value })
  } else {
    console.log('prism: off')
    universe.update({ 10: 1, 24: 1 })
  }
}, 30000)

// Flash
setInterval(() => {
  if (strobe) {
    return
  }

  flash = !!min_max(0, 1)

  if (!flash) { return }

  const flash_anim = new DMX.Animation().add({
    1: 0,
    15: 255,
  }, 100).delay(500).add({
    1: 255,
    15: 0,
  }, 100).delay(500).runLoop(universe)

  console.log('flash: on')

  setTimeout(() => {
    flash = false
    console.log('flash: off')
    flash_anim.stop()
    universe.update({ 1: brightness, 15: brightness })
  }, 7000)
}, 20000)

// Strobe
setInterval(() => {
  if (flash) {
    return
  }

  strobe = !!min_max(0, 1)

  if (!strobe) { return }
  
  console.log('strobe: on')
  universe.update({ 2: 230, 16: 230 })
  setTimeout(() => {
    strobe = false
    console.log('strobe: off')
    universe.update({ 2: 255, 16: 255 })
  }, 4500)
  
}, 10000)

// /**
//  * 
//  * @param {number} address 
//  * @param {number} value 
//  * @param {import('./types').FixtureDefinition} fixture 
//  * @param {string} feature_name
//  * @param {string | undefined} fn 
//  * 
//  * @returns {[number, number] | undefined}
//  */
// function get_feature_addr_value(address, value, fixture, feature_name, fn = undefined) {
//   const feature = fixture.features.find(f => f.type === feature_name)

//   if (!feature) {
//     return
//   }

//   const slot = address + feature.channel  - 1

//   if (fn) {
//     if (!feature.functions) {
//       return
//     }

//     const fn_def = feature.functions[fn]

//     if (!fn_def) {
//       return
//     }

//     const [fn_min, fn_max] = fn_def

//     if (value < fn_min || value > fn_max) {
//       return
//     }

//     return [slot, value]
//   }

//   return [slot, value]
// }
