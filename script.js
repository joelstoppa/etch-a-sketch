let color = 'black';

const colorPicker = document.getElementById('colorPicker');
const sizeSlider = document.getElementById('sizeSlider');
const sizeValue = document.getElementById('sizeValue');

sizeSlider.onchange = (e) => makeGrid(e.target.value);
sizeSlider.onmousemove = (e) => changeSizeValue(e.target.value);
colorPicker.oninput = (e) => changeColor(e.target.value);


function changeSizeValue(value) {
    sizeValue.innerHTML = `Grid size: ${value} x ${value}`
}

function makeGrid(size) {
    let board = document.querySelector('.board');
    let boxes = board.querySelectorAll('div');
    boxes.forEach((div) => div.remove()); //this clears the board when we changeSize
    board.style.gridTemplateColumns = `repeat(${size}, 1fr`;
    board.style.gridTemplateRows = `repeat(${size}), 1fr`;
    
    let gridSize = size * size;
    for (let i = 0; i < gridSize; i++) {
        let box = document.createElement('div');
        box.addEventListener('mousedown', colorSquare)
        box.addEventListener('mouseover', colorSquare)
        box.classList.add('box')
        board.appendChild(box);
        }
    }
    
    makeGrid(16)

function colorSquare(e) {
    if (e.buttons !== 1) return;
    if (color === 'random'){
        this.style.backgroundColor= `hsl(${Math.random() * 360}, 100%, 50%)`
    }
    else {
        this.style.backgroundColor = color;
    }
}

function changeColor(choice) {
    color = choice
}

function clearBoard(){
    let board = document.querySelector('.board');
    let boxes = board.querySelectorAll('div');
    boxes.forEach((div) => div.style.backgroundColor = 'white'); 
}

function toggleBorder () {
    boxes = document.querySelectorAll('.box')
    boxes.forEach(box => {
        if (box.style.border === '') {
            box.style.border='none';
        }
        else { 
            box.style.border =''
    }
    })
    
}
