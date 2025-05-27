import Ship from '../src/Ship.js';

describe('Ship Constructor', () => {
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
