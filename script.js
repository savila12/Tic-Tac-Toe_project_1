/*Create a class called GameMode

create constructor to create all win outcomes to 0, numTurns to 0, get numBoxes from HTML, set an event listener on each box, instantiate a new player from the player class

Methods: player 1 chooses X or O,
change section from blank to X or O,
next turn,
keeps tally for possible wins,
resets if game is tied,
 */

// const box1 = document.querySelector('#box1').innerHTML;
// const box2 = document.querySelector('#box2').innerHTML;
// const box3 = document.querySelector('#box3').innerHTML;
// const box4 = document.querySelector('#box4').innerHTML;
// const box5 = document.querySelector('#box5').innerHTML;
// const box6 = document.querySelector('#box6').innerHTML;
// const box7 = document.querySelector('#box7').innerHTML;
// const box8 = document.querySelector('#box8').innerHTML;
// const box9 = document.querySelector('#box9').innerHTML;

function playerChoice(event){
    let notify = document.querySelector('#notification');
    let xChoice = document.querySelector('#Xbtn').innerHTML;
    let oChoice = document.querySelector('#Ybtn').innerHTML;
    if(event === xChoice){
        notify.innerHTML = `Player 1 is ${xChoice} and Player 2 is ${oChoice}`;
        //this.player = xChoice;
    }else{
        notify.innerHTML = `Player 1 is ${oChoice} and Player 2 is ${xChoice}`;
        //this.player = oChoice;
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

let nextTurn = (turn) => {
    if(turn === 'X'){
        document.getElementById('Xbtn').style.visibility = 'hidden';
        document.getElementById('Ybtn').style.visibility = '';
    }
    else if(turn === 'O'){
        document.getElementById('Ybtn').style.visibility = 'hidden';
        document.getElementById('Xbtn').style.visibility = '';
    }
}
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
    if(document.getElementById(event.target.id).innerHTML === 'X' || document.getElementById(event.target.id).innerHTML === 'O'){
        return;
    }

    const id = event.dataTransfer.getData('text');
    const dragElement = document.getElementById(id);
    const dropZone = event.target;
    dropZone.innerHTML = dragElement.innerHTML;
    playerChoice(dropZone.innerHTML);
    nextTurn(dropZone.innerHTML);
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
        reset();
        //add event listener for reset button

    }
}


function reset(){
    document.getElementById('reset').removeAttribute('hidden');

    const resetBtn = document.querySelector('#reset');
    resetBtn.addEventListener('click', (event) => {
        event.preventDefault();
        for(let i = 1; i < 10; i++){
            document.querySelector('#box' + i).innerHTML = '';
        }
    })
}

/*Create another class call Player sets player to 0, and gets turn section from HTML
Methods: what player 1 has, tells who's turn it is
 */

