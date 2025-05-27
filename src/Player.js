
import Gameboard from '../src/Gameboard.js';
export default class Player{

    constructor(name = 'computer'){
        this.name = name;
        this.gameboard = new Gameboard(10);
    }

}