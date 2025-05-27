export default class Ship {
  constructor(length = 0) {
    this.length = length;
    this.timesHit = 0;
    this.sunk = false;
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
