
function makeGrid(rowNum) {
    let board = document.querySelector('.board')
    board.style.gridTemplateColumns = `repeat(${rowNum}, 1fr`
    board.style.gridTemplateRows = `repeat(${rowNum}), 1fr`
    
    let gridSize = rowNum * rowNum
    for (let i = 0; i < gridSize; i++) {
        const box = document.createElement('div');
        board.insertAdjacentElement('beforeend', box)
        box.addEventListener('mouseover', () => {
                box.style.backgroundColor = 'black';
            })
            
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
    
