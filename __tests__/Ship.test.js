import Ship from '../src/Ship.js';


describe("Ship Initialization", () => {

  let ship;

  beforeEach(() => {
    ship = new Ship({});
  })

  test('Checks length', () => {
    expect(ship.length).toBe(0);
  });

  test('Checks hits', () => {
    expect(ship.timesHit).toBe(0);
  });

  test('Checks sunk', () => {
    expect(ship.sunk).toBe(false);
  });

})



