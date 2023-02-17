let color = 'black';

function makeGrid(rowNum) {
    let board = document.querySelector('.board');
    let boxes = board.querySelectorAll('div');
    boxes.forEach((div) => div.remove()); //this clears the board when we changeSize
    board.style.gridTemplateColumns = `repeat(${rowNum}, 1fr`;
    board.style.gridTemplateRows = `repeat(${rowNum}), 1fr`;
    
    let gridSize = rowNum * rowNum;
    for (let i = 0; i < gridSize; i++) {
        let box = document.createElement('div');
        box.addEventListener('mouseover', colorSquare)
        board.insertAdjacentElement('beforeend', box);
        
        }
    }
    
    makeGrid(16)

function changeSize(input) {
    if (input >= 2 && input <= 100 ){
        makeGrid(input)
    }
    else {
        alert('Number is too not supported')
    }
    
}

function colorSquare(){
    if (color === 'random'){
        this.style.backgroundColor= `hsl(${Math.random() * 360}, 100%, 50%)`
    }
    this.style.backgroundColor = color;
}

function changeColor(choice) {
    color = choice
}

function clearBoard(){
    let board = document.querySelector('.board');
    let box = document.querySelectorAll('div');
    box.forEach((div) => div.style.backgroundColor = 'white'); 
}
    
