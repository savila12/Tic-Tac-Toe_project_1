const notify = document.querySelector('#notification');
const xPiece = document.querySelector('#Xbtn');
const oPiece = document.querySelector('#Obtn');
const resetBtn = document.querySelector('#reset');



//function to determine who's turn it is by hiding the piece that has already gone
let nextTurn = (turn) => {
    if(turn === 'X'){
        xPiece.style.visibility = 'hidden';
        oPiece.style.visibility = '';
        notify.innerHTML = "O's Turn"
    }
    else if(turn === 'O'){
        oPiece.style.visibility = 'hidden';
        xPiece.style.visibility = '';
        notify.innerHTML = "X's Turn"
    }
}

xPiece.addEventListener('touchstart', drag);
xPiece.addEventListener('touchmove', onDragOver);
xPiece.addEventListener('touchend', onDrop);
//drag and drop functions
function drag(event){
    event.dataTransfer.setData('text/plain', event.target.id);
    let touch = event.targetTouches[0];
    xPiece.style.left = touchLocation.pageX + 'px';
    xPiece.style.top = touchLocation.pageY + 'px';
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
    //playerChoice(dropZone.innerHTML);
    nextTurn(dropZone.innerHTML);
    event.dataTransfer.clearData();

    //Create an array of arrays to place all boxes in
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


    let chooseWinner = 'Winner Winner Chicken Dinner';

    if(squares[0].join('') === 'XXX' || squares[0].join('') === 'OOO'){
        notify.innerHTML = chooseWinner;
        document.getElementById('box1').classList.add('winblink');
        document.getElementById('box2').classList.add('winblink');
        document.getElementById('box3').classList.add('winblink');
        console.log(chooseWinner); //testing  to see if winner shows when there's 3 in row
        reset();
    }
    else if (squares[1].join('') === 'XXX' || squares[1].join('') === 'OOO'){
        notify.innerHTML = chooseWinner;
        document.getElementById('box4').classList.add('winblink');
        document.getElementById('box5').classList.add('winblink');
        document.getElementById('box6').classList.add('winblink');
        console.log(chooseWinner);
        reset();
    }
    else if (squares[2].join('') === 'XXX' || squares[2].join('') === 'OOO'){
        notify.innerHTML = chooseWinner;
        document.getElementById('box7').classList.add('winblink');
        document.getElementById('box8').classList.add('winblink');
        document.getElementById('box9').classList.add('winblink');
        console.log(chooseWinner);
        reset();
    }
    else if (squares[0][0] === squares[1][0] && squares[1][0] === squares[2][0] && (squares[0][0], squares[1][0], squares[2][0]) !== ''){
        notify.innerHTML = chooseWinner;
        document.getElementById('box1').classList.add('winblink');
        document.getElementById('box4').classList.add('winblink');
        document.getElementById('box7').classList.add('winblink');
        console.log(chooseWinner);
        reset();
    }
    else if (squares[0][1] === squares[1][1] && squares[1][1] === squares[2][1] && (squares[0][1], squares[1][1], squares[2][1]) !== ''){
        notify.innerHTML = chooseWinner;
        document.getElementById('box2').classList.add('winblink');
        document.getElementById('box5').classList.add('winblink');
        document.getElementById('box8').classList.add('winblink');
        console.log(chooseWinner);
        reset();
    }
    else if (squares[0][2] === squares[1][2] && squares[1][2] === squares[2][2] && (squares[0][2], squares[1][2], squares[2][2]) !== ''){
        notify.innerHTML = chooseWinner;
        document.getElementById('box3').classList.add('winblink');
        document.getElementById('box6').classList.add('winblink');
        document.getElementById('box9').classList.add('winblink');
        console.log(chooseWinner);
        reset();
    }
    else if(squares[0][0] === squares[1][1] && squares[1][1] === squares[2][2] && (squares[0][0], squares[1][1], squares[2][2]) !== ''){
        notify.innerHTML = chooseWinner;
        document.getElementById('box1').classList.add('winblink');
        document.getElementById('box5').classList.add('winblink');
        document.getElementById('box9').classList.add('winblink');
        console.log(chooseWinner);
        reset();
    }
    else if(squares[0][2] === squares[1][1] && squares[1][1] === squares[2][0] && (squares[0][2], squares[1][1], squares[2][0]) !== ''){
        notify.innerHTML = chooseWinner;
        document.getElementById('box3').classList.add('winblink');
        document.getElementById('box5').classList.add('winblink');
        document.getElementById('box7').classList.add('winblink');
        console.log(chooseWinner);
        reset();
    }
    else if((squares[0].join('') + squares[1].join('') + squares[2].join('')).length === 9 && chooseWinner !== 'Winner'){
        chooseWinner = 'Its a Draw';
        notify.innerHTML = chooseWinner;
        console.log(chooseWinner);
        reset();
    }
}

//reset pops up after the game is finished
function reset(){
    document.getElementById('reset').classList.remove('hide-button');

    resetBtn.addEventListener('click', resetGame);

    if(resetBtn.hasAttribute('hide-button'))
    {
        resetBtn.removeEventListener('click', resetGame);
    }
}

function resetGame(event) {
    event.preventDefault();
    for (let i = 1; i < 10; i++) {
        document.querySelector('#box' + i).innerHTML = '';
    }

    if (xPiece.style.visibility === 'hidden') {
        xPiece.style.visibility = '';
    }
    if (oPiece.style.visibility === 'hidden') {
        oPiece.style.visibility = '';
    }
    notify.innerHTML = 'Winner Choose X or O';
    document.getElementById('reset').classList.add('hide-button');
    document.getElementById('box1').classList.remove('winblink');
    document.getElementById('box2').classList.remove('winblink');
    document.getElementById('box3').classList.remove('winblink');
    document.getElementById('box4').classList.remove('winblink');
    document.getElementById('box5').classList.remove('winblink');
    document.getElementById('box6').classList.remove('winblink');
    document.getElementById('box7').classList.remove('winblink');
    document.getElementById('box8').classList.remove('winblink');
    document.getElementById('box9').classList.remove('winblink');
}

// xPiece.addEventListener('touchstart', drag);
// xPiece.addEventListener('touchmove', onDragOver);
// xPiece.addEventListener('touchend', onDrop);
// oPiece.addEventListener('touchstart', drag);
