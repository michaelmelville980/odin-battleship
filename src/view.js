import Gameboard from './Gameboard.js';
import Player from './Player.js';

export default class view {
    
    static renderBoard(player = new Player(), parentDiv) {
        parentDiv.innerHTML = '';

        for (let y = 0; y < player.gameboard.size; y++) {
            for (let x = 0; x < player.gameboard.size; x++) {

            /* Creating cell and adding shared, row num, and column num classes */
            let cell = document.createElement('div');
            cell.classList.add('cell', 'x:' + x, 'y:' + y);

            /* Manually positioning cell */
            cell.style.gridRow = 10 - y;
            cell.style.gridColumn = x + 1;

            /* Checking for missed/successful attacks*/
            if (player.gameboard.missedAttacks.has(`${x},${y}`)) {
                cell.classList.add('missedAttack');
            } else if (player.gameboard.successfulAttacks.has(`${x},${y}`)) {
                cell.classList.add('successfulAttack');
            }

            /* Adding cell to div */
            parentDiv.appendChild(cell);
            }
        }
    }

}
