
import Ship from '../src/Ship.js';

export default class Gameboard{

    /* constants */
    static MIN_SIZE = 1;

    /* constructor */
    constructor(size = Gameboard.MIN_SIZE){
        if (size < Gameboard.MIN_SIZE){
            throw new Error('gameboard size must be >= 1') 
        }
        this.size = size;
        this.ships = [];
        this.missedAttacks = [];
        this.isAllSunk = false;
    }

    /* addShip */
    addShip(ship = new Ship(), start = [], end = []){

        /* verifies whether ship is from ship class */
        if (!(ship instanceof Ship)) {
            throw new Error('addShip expects a Ship instance');
        }

        /* verifies whether ship length <= Gameboard size */
        if (ship.length > this.size){
            throw new Error('ship length should be <= gameboard size')
        }

        /* verifies whether start and end are [x,y] coordinates */
        if (!Array.isArray(start) || !Array.isArray(end) || start.length !== 2 || end.length !== 2){
            throw new Error('addShip requires both start and end to be [x, y] integer coordinate arrays');
        }

        /* extracts start and end coordiantes */
        const [x1, y1] = start;
        const [x2, y2] = end;

        /* verifies whether start and end are integers */
        if (!start.every(Number.isInteger) || !end.every(Number.isInteger)){
            throw new Error('Coordinates must be integers');
        }

        /* verifies whether coordinates are within gameboard */
        if (x1 > this.size || y1 > this.size || x2 > this.size || y2 > this.size || x1 < 0 || y1 < 0 || x1 < 0 || y2 < 0){
            throw new Error('Coordinates must be within gameboard');
        }

        /* verifies that ship coordinates are either vertical or horizontal */
        if (x1 !== x2 && y1 !== y2){
            throw new Error('Ship must be placed vertically or horizontally');
        }

        /* verifies that ship coordinates span distance equal to ship length */
        if (Math.max(Math.abs(x1 - x2), Math.abs(y1 - y2)) !== ship.length){
            throw new Error('Ship coordinates must equal ship legnth');
        }
        
        this.ships.push([ship, start, end]);

    }

    receiveAttack() {
        
    }


    


}