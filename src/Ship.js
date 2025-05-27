export default class Ship {
  constructor({ length = 0, timesHit = 0, sunk = false }) {
    this.length = length;
    this.timesHit = timesHit;
    this.sunk = sunk;
  }

  hit() {
    this.timesHit++;
  }

  isSunk() {
    if (this.timesHit >= this.length){
        this.sunk = true;
        return true;
    }else{
        return false;
    }
  }
}
