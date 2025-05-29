import Gameboard from '../src/Gameboard.js';
export default class Ship {
  /* constants */
  static MIN_SIZE = 1;

  /* constructor */
  constructor(length = 1) {
    if (length < Ship.MIN_SIZE) {
      throw new Error('ship length must be >= 1');
    }
    this.length = length;
    this.timesHit = 0;
    this.locationsHit = [];
    this.sunk = false;
  }

  hit() {
    this.timesHit++;
  }

  isSunk() {
    if (this.timesHit >= this.length + 1) {
      this.sunk = true;
      return true;
    } else {
      return false;
    }
  }
}
