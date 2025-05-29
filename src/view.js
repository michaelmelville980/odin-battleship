
import Gameboard from './Gameboard.js';
import Player from './Player.js';

const boards = document.querySelector("#boards");

export default class view{

    renderBoard(player = new Player(), parentDiv){

        for (let x = 0; x < player.gameboard.size; x++){
            for (let y = 0; y < player.gameboard.size; y++){

                /* Creating cell and adding shared, row num, and column num classes */
                let cell = document.createElement("div");
                cell.classList.add("cell", "row" + x, "column" + y);

                 /* Checking for missed/successful attacks*/
                if (player.gameboard.missedAttacks.includes([x, y])){
                    cell.classList.add("missedAttack");
                }else if (player.gameboard.successfulAttacks.includes([x, y])){
                    cell.classList.add("successfulAttack");
                }

                /* Adding cell to div */
                parentDiv.appendChild(cell);

            }
        }

    }


}