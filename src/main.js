import Player from './Player.js';
import Gameboard from './Gameboard.js';
import Ship from './Ship.js';
import View from './view.js';
import './style.css';

/* References to Gameboards */
const playerRef = document.querySelector('#player');
const computerRef = document.querySelector('#computer');

/* Initializing Players */
let player = new Player('Michael');
let computer = new Player();

/* Creating placeShips function (incomplete) */
function placeShips() {

    let lengthArray = [2, 3, 3, 3]

    for (let i = 0; i < lengthArray.length; i++){
        for(let j = 0; j < 2; j++){

            /* Generating Coordinates */
            let x1 = Math.floor(Math.random() * 10);
            let y1 = Math.floor(Math.random() * 10);
            let x2;
            let y2;
            let horizontalOrVertical = Math.floor(Math.random() * 2); //

            if (horizontalOrVertical === 0){
                y2 = y1; 
                if (x1 > 4){
                    x2 = x1 - lengthArray[i];
                }else{
                    x2 = x1 + lengthArray[i];
                }
            }else{
                x2 = x1;
                if (y1 > 4){
                    y2 = y1 - lengthArray[i];
                }else{
                    y2 = y1 + lengthArray[i];
                }
            }

            /* Player */
            if (j = 0){
                player.gameboard.addShip(new Ship(), [x1, y1], [x2, y2]);

            }

            /* Computer */
            if (j = 1){
                computer.gameboard.addShip(new Ship(), [x1, y1], [x2, y2]);
            }
        }
    }
}

/* Creating reset function */
function resetGame() {
  player = new Player('Michael');
  computer = new Player();
  View.renderBoard(player, playerRef);
  View.renderBoard(computer, computerRef);
}

/* Adding Ships */
let shipOne = new Ship(2);
let shipTwo = new Ship(2);

player.gameboard.addShip(shipOne, [0, 0], [2, 0]);
player.gameboard.addShip(shipOne, [0, 0], [0, 2]);
computer.gameboard.addShip(shipTwo, [0, 0], [2, 0]);

/* Viewing Board */
View.renderBoard(player, playerRef);
View.renderBoard(computer, computerRef);

/* Event Listener that Controls Turns */
computerRef.addEventListener('click', (e) => {
  /* Getting player attack x and y coordinates */
  const cell = e.target;
  const xClass = Array.from(cell.classList).find((c) => c.startsWith('x:'));
  const yClass = Array.from(cell.classList).find((c) => c.startsWith('y:'));
  const x = parseInt(xClass.slice(2), 10);
  const y = parseInt(yClass.slice(2), 10);

  /* Checking whether player attack is new */
  if (
    computer.gameboard.successfulAttacks.has([x, y]) ||
    computer.gameboard.missedAttacks.has[(x, y)]
  ) {
    return;
  }

  /* Player attacking computer */
  computer.gameboard.receiveAttack(x, y);
  View.renderBoard(player, playerRef);
  View.renderBoard(computer, computerRef);

  /* Checking for win */
  if (computer.gameboard.areAllSunk()) {
    alert('Player wins!!!');
    resetGame();
    return;
  }

  /* Getting computer attack x and y coordinates */
  let comX = Math.floor(Math.random() * 10);
  let comY = Math.floor(Math.random() * 10);

  while (
    player.gameboard.successfulAttacks.has([x, y]) ||
    player.gameboard.missedAttacks.has[(x, y)]
  ) {
    comX = Math.floor(Math.random() * 10);
    comY = Math.floor(Math.random() * 10);
  }

  /* Computer attacking player */
  player.gameboard.receiveAttack(comX, comY);

  /* Checking whether all player's ships are sunk */
  if (player.gameboard.areAllSunk()) {
    alert('Computer wins!!!');
    resetGame();
  }

  View.renderBoard(player, playerRef);
  View.renderBoard(computer, computerRef);
});

console.log('smile');
