const mainContainer = document.querySelector('.main-container');

function createGrid(size) {
    for (let i = 0; i < size ** 2; i++) {
        let div = document.createElement('div');
        mainContainer.appendChild(div).classList = 'cell';
        mainContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        mainContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    }
}

function changeCellColor() {
    let mouseDown = false;
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cells => {
        cells.addEventListener('mousedown', () => {
            cells.style.backgroundColor = "orange";
            mouseDown = true;
        });
    });
    cells.forEach(cells => {
        cells.addEventListener('mousemove', () => {
            if (mouseDown === true) {
                cells.style.backgroundColor = "orange";
            }
        });
    });
    window.addEventListener('mouseup', () => {
        mouseDown = false;
    });
}

function clearGrid() {
    const clear = document.querySelector('#clear-button');
    const allDivs = [...mainContainer.children];
    clear.addEventListener('click', function() {
        allDivs.forEach(allDivs => {
            allDivs.style.backgroundColor = '';
        });
    });
}


createGrid(16);
changeCellColor();
clearGrid();