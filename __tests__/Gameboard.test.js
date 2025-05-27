import Gameboard from '../src/Gameboard.js';

/* Gameboard Constructor */
describe('new Gameboard()', () => {

    let gameboard;
    beforeEach(() => {
        gameboard = new Gameboard({});
    });

    test('Checks size', () => {
        expect(gameboard.size).toBe(1);
    });

    test('Checks ships', () => {
        expect(gameboard.ships.length).toBe(0);
    });

    test('Checks missed attacks', () => {
        expect(gameboard.missedAttacks.length).toBe(0);
    });

    test('Checks if ships are sunk', () => {
        expect(gameboard.isAllSunk).toBe(false);
    });

});