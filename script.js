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
// const moves = new Array(9);
// console.log(moves);
// const squares = document.querySelectorAll('.box');
// let turn = 0;
// let turnCount = 0;
// squares.forEach((square, index) => {
//     square.addEventListener('ondrop', (event) => {
//        moves[index] = turn;
//        console.log(moves);
//        event.target.innerHTML = turn;
//        turn = (turnCount % 2 === 0) ? 'O' : 'X';
//        turnCount++;
//
//     }, {once: true})
// })


//drag and drop functions
function drag(event){
    event.dataTransfer.setData('text/plain', event.target.id);
}
function onDragOver(event){
    event.preventDefault();
}
function onDrop(event) {
    event.preventDefault();
    //Make sure players can't change occupied square
    if(document.getElementById(event.target.id).innerHTML == 'X' || document.getElementById(event.target.id).innerHTML == 'O'){
        return;
    }

    const id = event.dataTransfer.getData('text');
    const dragElement = document.getElementById(id);
    const dropZone = event.target;
    dropZone.innerHTML = dragElement.innerHTML;
    event.dataTransfer.clearData();
    let squares = [[],[],[]];

    for(let i = 1; i < 10; i++){
        let square = document.querySelector('#box' + i).innerHTML;
        if(i <= 3){
            squares[0].push(square);
        }
        else if(i > 3 && i <= 6){
            squares[1].push(square);
        }
        else{
            squares[2].push(square);
        }
    }

    for(let i = 0; i < squares.length; i++){
        console.log(squares[i]);
    }

    let chooseWinner = '';

    if(squares[0].join('') === 'XXX' || squares[0].join('') === 'OOO'){
        chooseWinner = 'Winner';
        console.log(chooseWinner);
    }
    else if (squares[1].join('') === 'XXX' || squares[1].join('') === 'OOO'){
        chooseWinner = 'Winner';
        console.log(chooseWinner);
    }
    else if (squares[2].join('') === 'XXX' || squares[2].join('') === 'OOO'){
        chooseWinner = 'Winner';
        console.log(chooseWinner);
    }
    else if (squares[0][0] === squares[1][0] && squares[1][0] === squares[2][0] && (squares[0][0], squares[1][0], squares[2][0]) !== ''){
        chooseWinner = 'Winner';
        console.log(chooseWinner);
    }
    else if (squares[0][1] === squares[1][1] && squares[1][1] === squares[2][1] && (squares[0][1], squares[1][1], squares[2][1]) !== ''){
        chooseWinner = 'Winner';
        console.log(chooseWinner);
    }
    else if (squares[0][2] === squares[1][2] && squares[1][2] === squares[2][2] && (squares[0][2], squares[1][2], squares[2][2]) !== ''){
        chooseWinner = 'Winner';
        console.log(chooseWinner);
    }
    else if(squares[0][0] === squares[1][1] && squares[1][1] === squares[2][2] && (squares[0][0], squares[1][1], squares[2][2]) !== ''){
        chooseWinner = 'Winner';
        console.log(chooseWinner);
    }
    else if(squares[0][2] === squares[1][1] && squares[1][1] === squares[2][0] && (squares[0][2], squares[1][1], squares[2][0]) !== ''){
        chooseWinner = 'Winner';
        console.log(chooseWinner);
    }
    else if((squares[0].join('') + squares[1].join('') + squares[2].join('')).length === 9 && chooseWinner !== 'Winner'){
        chooseWinner = 'Its a Draw';
        console.log(chooseWinner);
        //add event listener for reset button
    }



}
let gameOn = new GameMode();
/*Create another class call Player sets player to 0, and gets turn section from HTML
Methods: what player 1 has, tells who's turn it is
 */

