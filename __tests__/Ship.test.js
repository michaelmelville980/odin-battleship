import Ship from '../src/Ship.js';

/* Ship Constructor */
describe('new Ship()', () => {

  /* Empty Ship */
  describe('new Ship()', () => {
    let ship;

    beforeEach(() => {
      ship = new Ship();
    });

    test('Checks length', () => {
      expect(ship.length).toBe(1);
    });

    test('Checks hits', () => {
      expect(ship.timesHit).toBe(0);
    });

    test('Checks sunk', () => {
      expect(ship.sunk).toBe(false);
    });
  });

  /* Nonempty Ship */
  describe('new Ship({length: 2, timesHit: 3, sunk: true}', () => {
    let ship;

    beforeEach(() => {
      ship = new Ship(2);
      ship.timesHit = 3;
      ship.sunk = true;
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
describe('Ship.hit()', () => {

  let ship;

  beforeEach(() => {
    ship = new Ship(4);
  });

  test('Checks 1 hit', () => {
    ship.hit();
    expect(ship.timesHit).toBe(1);
  });

  test('Checks 2 hits', () => {
    ship.hit();
    ship.hit();
    expect(ship.timesHit).toBe(2);
  });

});

/* Ship Sunk */
describe('Ship.isSunk()', () => {

  let ship;

  /* Ship length > times hit */
  describe('Ship.length > Ship.timesHit', () => {

    beforeEach(() => {
      ship = new Ship(4);
      ship.timesHit = 3;
    });

    test('returns false', ()=> {
      expect(ship.isSunk()).toBe(false);
    });

  });

   /* Ship length > times hit */
  describe('Ship.length = Ship.timesHit', () => {

    beforeEach(() => {
      ship = new Ship(4);
      ship.timesHit = 4;
    });

    test('returns true', ()=> {
      expect(ship.isSunk()).toBe(true);
      expect(ship.sunk).toBe(true);
    });

  });

});




