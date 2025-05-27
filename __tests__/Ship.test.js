import Ship from '../src/Ship.js';

/* Ship Constructor */
describe('Ship Constructor', () => {

  /* Empty Ship */
  describe('Empty Ship', () => {
    let ship;

    beforeEach(() => {
      ship = new Ship({});
    });

    test('Checks length', () => {
      expect(ship.length).toBe(0);
    });

    test('Checks hits', () => {
      expect(ship.timesHit).toBe(0);
    });

    test('Checks sunk', () => {
      expect(ship.sunk).toBe(false);
    });
  });

  /* Nonempty Ship */
  describe('Nonempty Ship', () => {
    let ship;

    beforeEach(() => {
      ship = new Ship({ length: 2, timesHit: 3, sunk: true });
    });

    test('Checks length', () => {
      expect(ship.length).toBe(2);
    });

    test('Checks hits', () => {
      expect(ship.timesHit).toBe(3);
    });

    test('Checks sunk', () => {
      expect(ship.sunk).toBe(true);
    });
  });
});

/* Ship Hit */
describe('Ship Hit', () => {

  let ship;

  beforeEach(() => {
    ship = new Ship({length: 4, timesHit: 0, sunk: false});
  });

  test('Checks Hit', () => {
    ship.hit();
    expect(ship.timesHit).toBe(1);
  });

  test('Checks Hit', () => {
    ship.hit();
    ship.hit();
    expect(ship.timesHit).toBe(2);
  });

});

