const mainContainer = document.querySelector('.main-container');

function createGrid(size) {
    for (let i = 0; i < size ** 2; i++) {
        let div = document.createElement('div');
        mainContainer.appendChild(div).className = 'cell';
        mainContainer.style.gridTemplateColumns = 'repeat(' + size + ', auto)';
    }
}

function changeCellColor() {
    const cells = document.querySelectorAll('.cell');

    // changes the cell's color that was first clicked on otherwise
    // the cells' colors start changing at the first mouseover event
    cells.forEach(cells => {
        cells.addEventListener('click', function() {
            cells.style.backgroundColor = 'orange';
        });
    });

    mainContainer.addEventListener('mousedown', mousedown);
}

function mousedown(event) {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cells => {
        cells.addEventListener('mouseover', function() {
            cells.style.backgroundColor = 'orange';
        });
    });
}

function mouseup(event) {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cells => {
        cells.addEventListener('mouseover', function() {
            cells.style.backgroundColor = 'orange';
        });
    });
}


function clearGrid() {
    const clear = document.querySelector('#clear-button');
    const cells = document.querySelectorAll('.cell');
    clear.addEventListener('click', function() {
        cells.forEach(cells => {
            cells.style.backgroundColor = 'white';
        });


        location.reload();

    });
}


createGrid(16);
changeCellColor();
clearGrid();