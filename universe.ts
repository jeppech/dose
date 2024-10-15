type Channel = number
type Value = number

type DmxChannel = [Channel, Value]

type DmxSequence = {
  name: string;
  from: DmxChannel[]
  to: DmxChannel[]

  duration: number // in ms, 0 means instant
  /**
   * If true, the channel values will be reset to their from values after the sequence is done.
   * Ignored if duration is 0
   */
  reset: boolean 
  
  /**
   * Timing function for the sequence. Default is linear. Only applies if duration > 0
   */
  timing: 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out'

  /**
   * Custom timing function. If provided, timing will be ignored
   */
  timingFunction: (t: number) => number
}

class Universe {
  private id: string
  private fixtures: Fixture[] = []
  private channels: Uint8Array

  constructor(universe_id: string, fixtures: Fixture[]) {
    this.id = universe_id

    let end_address = 0
    for (const fixture of fixtures) {
      const fixture_end_addr = this.add_fixture(fixture)
      if (fixture_end_addr > end_address) {
        end_address = fixture_end_addr
      }
    }

    this.channels = new Uint8Array(end_address)
  }

  /**
   * Adds a fixture to the universe.
   * 
   * Returns the end address of the fixture
   */
  private add_fixture(fixture: Fixture): number {
    // check for conflicts
    for (const f of this.fixtures) {
      const address_start = fixture.address
      const address_end = fixture.address + fixture.channels
      
      if (f.address >= address_start && f.address <= address_end) {
        throw new Error(`Fixture ${fixture.name} conflicts with fixture ${f.name}`)
      }
    }
    this.fixtures.push(fixture)

    console.log(`Added fixture ${fixture.name} at address ${fixture.address} with ${fixture.channels} channels`)
    return fixture.address + fixture.channels
  }
}

class Fixture {
  readonly name: string
  readonly address: Channel
  readonly channels: number

  constructor(name: string, address: Channel, channels: number) {
    this.name = name
    this.address = address
    this.channels = channels
  }
}


const led_par = new Fixture('LED Par', 15, 6)
const led_par2 = new Fixture('LED Par 2', 22, 6)

const fixtures = [led_par, led_par2]

const universe = new Universe('main', fixtures)
