import Gameboard from '../src/Gameboard.js';
import Ship from '../src/Ship.js';

/* Gameboard Constructor */
describe('Gameboard constructor', () => {

    /* Empty Constructor */
    describe('new Gameboard()', () => {

        let gameboard;
        beforeEach(() => {
            gameboard = new Gameboard();
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

    /* Nonempty Constructor (size = 10) */
    describe('new Gameboard(10)', () => {

        let gameboard;
        beforeEach(() => {
            gameboard = new Gameboard(10);
        });

        test('Checks size', () => {
            expect(gameboard.size).toBe(10);
        });

    });

})

/* Adding Ship */
describe('addShip method', () => {

    let gameboard;
    let ship;
    beforeEach(() => {
        gameboard = new Gameboard(10);
        ship = new Ship(1);
    });


    test('verifies whether ship is from ship class', () => {
        expect(() => gameboard.addShip(5, [5,2], [5,2])).toThrow('addShip expects a Ship instance');
    });

    test('verifies whether ship length <= Gameboard size', () => {
        ship.length = gameboard.size + 1;
        expect(() => gameboard.addShip(ship, [5,2], [6,2])).toThrow('ship length should be <= gameboard size');
    });

    test('verifies whether start and end are [x,y] coordinates', () => {
        expect(() => gameboard.addShip(ship, 5, [5,2])).toThrow('addShip requires both start and end to be [x, y] integer coordinate arrays');
    });

    test('verifies whether start and end are integers', () => {
        expect(() => gameboard.addShip(ship, [6.5,2.1], [5.5,2])).toThrow('Coordinates must be integers');
    });

    test('verifies whether coordinates are within gameboard', () => {
        expect(() => gameboard.addShip(ship, [20, 20], [20,25])).toThrow('Coordinates must be within gameboard');
    });

    test('verifies ship coordinates are vertical or horizontal', () => {
        expect(() => gameboard.addShip(ship, [5, 5], [6,6])).toThrow('Ship must be placed vertically or horizontally');
    });

    test('verifies that ship coordinates span distance equal to ship length ', () => {
        expect(() => gameboard.addShip(ship, [5, 5], [9,5])).toThrow('Ship coordinates must equal ship legnth');
    });

    test('adds one ship', () => {
        gameboard.addShip(ship, [5,2], [6,2]);
        expect(gameboard.ships[0]).toEqual([ship, [5,2], [6,2]]);
    })

    test('adds two ships', () => {
        gameboard.addShip(ship, [5,2], [6,2]);
        gameboard.addShip(ship, [9,2], [10,2]);
        expect(gameboard.ships[0]).toEqual([ship, [5,2], [6,2]], [ship, [9,2], [10,2]]);
    })

});


