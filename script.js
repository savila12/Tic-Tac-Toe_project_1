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

        this.box1 = document.querySelector('#box1').innerHTML;
        this.box2 = document.querySelector('#box2').innerHTML;
        this.box3 = document.querySelector('#box3').innerHTML;
        this.box4 = document.querySelector('#box4').innerHTML;
        this.box5 = document.querySelector('#box5').innerHTML;
        this.box6 = document.querySelector('#box6').innerHTML;
        this.box7 = document.querySelector('#box7').innerHTML;
        this.box8 = document.querySelector('#box8').innerHTML;
        this.box9 = document.querySelector('#box9').innerHTML;

    }

    playerChoice(){
        let notify = document.querySelector('#notification');
        notify.innerHTML = 'Player 1 Choose X or O by dragging that piece to a grid of choice'
        let xChoice = document.querySelector('#Xbtn').innerHTML;
        let oChoice = document.querySelector('#Ybtn').innerHTML;
        if(this.box1 === xChoice || this.box2 === xChoice || this.box3 === xChoice || this.box4 === xChoice || this.box5 === xChoice || this.box6 === xChoice || this.box7 === xChoice || this.box8 === xChoice || this.box9 === xChoice ){
            notify.innerHTML = `Player 1 is ${xChoice} and Player 2 is ${oChoice}`;
            this.player = xChoice;
        }else{
            notify.innerHTML = `Player 1 is ${oChoice} and Player 2 is ${xChoice}`;
            this.player = oChoice;
        }


    }


    gameOutcome(){
        let xChoice = document.querySelector('#Xbtn').innerHTML;
        let oChoice = document.querySelector('#Ybtn').innerHTML;
        const row1Outcome = this.box1 = this.box2 = this.box3 = xChoice;
        const row2Outcome = this.box4 = this.box5 = this.box6 = xChoice;

        if((this.box1 && this.box2 && this.box3 === xChoice) || (this.box1 && this.box2 && this.box3 === oChoice)) {

        }

    }

}

//drag and drop functions
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

