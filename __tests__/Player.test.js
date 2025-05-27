import Player from '../src/Player.js';

/* Gameboard Constructor (person) */
describe('player constructor (person)', () => {

    let player;
    beforeEach(() => {
        player = new Player('smith');
    });

    test('Checks name', () => {
      expect(player.name).toBe('smith');
    });

});

/* Gameboard Constructor (computer) */
describe('player constructor (computer)', () => {

    let player;
    beforeEach(() => {
        player = new Player();
    });

    test('Checks name', () => {
      expect(player.name).toBe('computer');
    });

});