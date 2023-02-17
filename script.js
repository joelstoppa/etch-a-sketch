const container = document.querySelector('.container')

function makeGrid(rowNum) {
    for (let i = 0; i < rowNum; i++) {
        const row = container.appendChild(document.createElement('div'));
        row.className = 'row'
        for (let j = 0; j < rowNum; j++) {
            const box = document.createElement('div');
            box.addEventListener('mouseover', () => {
                box.style.backgroundColor = 'black';
            })
            box.className = 'box';
            row.appendChild(box);
        }
    }
}
makeGrid(16)

