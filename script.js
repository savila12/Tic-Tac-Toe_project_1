const notify = document.querySelector('#notification');
const xPiece = document.querySelector('#Xbtn');
const oPiece = document.querySelector('#Ybtn');
const resetBtn = document.querySelector('#reset');


//Create a function that notifies the user what option they chose
function playerChoice(choice){
    let xChoice = xPiece.innerHTML;
    let oChoice = oPiece.innerHTML;

    if(choice === xChoice){
        notify.innerHTML = `Player 1 is ${xChoice} and Player 2 is ${oChoice}`;
    }else{
        notify.innerHTML = `Player 1 is ${oChoice} and Player 2 is ${xChoice}`;
    }
}

//function to determine who's turn it is by hiding the piece that has already gone
let nextTurn = (turn) => {
    if(turn === 'X'){
        xPiece.style.visibility = 'hidden';
        oPiece.style.visibility = '';
        //notify.innerHTML = "O's Turn"
    }
    else if(turn === 'O'){
        oPiece.style.visibility = 'hidden';
        xPiece.style.visibility = '';
        //notify.innerHTML = "X's Turn"
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

    //show on console where X and O are being placed in the squares array
    for(let i = 0; i < squares.length; i++){
        console.log(squares[i]);
    }


    let chooseWinner = '';

    if(squares[0].join('') === 'XXX' || squares[0].join('') === 'OOO'){
        chooseWinner = 'Winner';
        console.log(chooseWinner); //testing  to see if winner shows when there's 3 in row
        reset();
    }
    else if (squares[1].join('') === 'XXX' || squares[1].join('') === 'OOO'){
        chooseWinner = 'Winner';
        console.log(chooseWinner);
        reset();
    }
    else if (squares[2].join('') === 'XXX' || squares[2].join('') === 'OOO'){
        chooseWinner = 'Winner';
        console.log(chooseWinner);
        reset();
    }
    else if (squares[0][0] === squares[1][0] && squares[1][0] === squares[2][0] && (squares[0][0], squares[1][0], squares[2][0]) !== ''){
        chooseWinner = 'Winner';
        console.log(chooseWinner);
        reset();
    }
    else if (squares[0][1] === squares[1][1] && squares[1][1] === squares[2][1] && (squares[0][1], squares[1][1], squares[2][1]) !== ''){
        chooseWinner = 'Winner';
        console.log(chooseWinner);
        reset();
    }
    else if (squares[0][2] === squares[1][2] && squares[1][2] === squares[2][2] && (squares[0][2], squares[1][2], squares[2][2]) !== ''){
        chooseWinner = 'Winner';
        console.log(chooseWinner);
        reset();
    }
    else if(squares[0][0] === squares[1][1] && squares[1][1] === squares[2][2] && (squares[0][0], squares[1][1], squares[2][2]) !== ''){
        chooseWinner = 'Winner';
        console.log(chooseWinner);
        reset();
    }
    else if(squares[0][2] === squares[1][1] && squares[1][1] === squares[2][0] && (squares[0][2], squares[1][1], squares[2][0]) !== ''){
        chooseWinner = 'Winner';
        console.log(chooseWinner);
        reset();
    }
    else if((squares[0].join('') + squares[1].join('') + squares[2].join('')).length === 9 && chooseWinner !== 'Winner'){
        chooseWinner = 'Its a Draw';
        console.log(chooseWinner);
        reset();
        //add event listener for reset button

    }
}

//reset pops up after the game is finished
function reset(){
    document.getElementById('reset').removeAttribute('hidden');

    resetBtn.addEventListener('click', (event) => {
        event.preventDefault();
        for(let i = 1; i < 10; i++){
            document.querySelector('#box' + i).innerHTML = '';
        }

        if(xPiece.style.visibility === 'hidden'){
            xPiece.style.visibility = '';
        }
        if(oPiece.style.visibility === 'hidden'){
            oPiece.style.visibility = '';
        }
        playerChoice();
    })
}


