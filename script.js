/*Create a class called GameMode

create constructor to create all win outcomes to 0, numTurns to 0, get numBoxes from HTML, set an event listener on each box, instantiate a new player from the player class

Methods: player 1 chooses X or O,
change section from blank to X or O,
next turn,
keeps tally for possible wins,
resets if game is tied,
 */
class GameMode {
    constructor() {
        this.rowTally = [[0, 0][0, 0][0, 0]]
        this.columnTally = [[0, 0][0, 0][0, 0]]
        this.diagonalTally = [[0, 0][0, 0]]
        this.numMoves = 0;
        this.turn = 0;

    }

}

function drag(event){
    let dt = event.dataTransfer.setData('text/plain', event.target.id);
}
function onDragOver(event){
    event.preventDefault();
}
function onDrop(event){
    const id = event.dataTransfer.getData('text');
    const dragElement = document.getElementById(id);
    const dropZone = event.target;
    dropZone.innerHTML = dragElement.innerHTML;
    event.dataTransfer.clearData();

}

/*Create another class call Player sets player to 0, and gets turn section from HTML
Methods: what player 1 has, tells who's turn it is
 */

