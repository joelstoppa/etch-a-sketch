const container = document.querySelector('.container')

function makeGrid(rowNum) {
    for (let i = 0; i < rowNum; i++) {
        const row = container.appendChild(document.createElement('div'));
        for (let j = 0; j < rowNum; j++) {
            const box = document.createElement('div');
            box.className = 'box'
            row.appendChild(box);
        }
    }
}