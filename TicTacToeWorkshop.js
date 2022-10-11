var scoreX = 0;
var scoreO = 0;

function AddAPointX() {
    var boardGame = document.getElementsByClassName('cell');
    scoreX++;
    document.getElementById('ScoreX').innerHTML = scoreX;
    for (let i = 0; i<boardGame.length; i++) {
        boardGame[i].innerHTML='';
    }
}

function AddAPointO() {
    var boardGame = document.getElementsByClassName('cell');
    scoreO++;
    document.getElementById('ScoreO').innerHTML = scoreO;
    for (let i = 0; i<boardGame.length; i++) {
        boardGame[i].innerHTML='';
    }
}

//Voir pour refactoriser via une fonction IF / ELSE //