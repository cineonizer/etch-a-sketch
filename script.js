const mainContainer = document.querySelector('.main-container');

function resetGrid() {
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
    }
}

function toggleGridlines() {
    const allDivs = [...mainContainer.children];
    allDivs.forEach(allDivs => {
        allDivs.classList.toggle('cell');
    });
}

function changeGridText() {
    const gridSizeValue = document.querySelector('#grid-slider').value;
    const gridSizeText = document.querySelector('#grid-text');
    gridSizeText.textContent = gridSizeValue;
    gridSizeText.addEventListener('mouseenter', () => {
        gridSizeText.textContent = "Size";
    });
    gridSizeText.addEventListener('mouseleave', () => {
        gridSizeText.textContent = gridSizeValue;
    });
    gridSizeText.addEventListener('click', () => {
        gridSizeText.textContent = "Size";
    });
    return gridSizeValue;
}

function createGrid() {
    changeGridText();
    const gridSizeValue = document.querySelector('#grid-slider').value;
    for (let i = 0; i < gridSizeValue ** 2; i++) {
        let cellDiv = document.createElement('div');
        mainContainer.appendChild(cellDiv).classList.add('cell', 'cell-shadow');
        mainContainer.style.gridTemplateRows = `repeat(${gridSizeValue}, 1fr)`;
        mainContainer.style.gridTemplateColumns = `repeat(${gridSizeValue}, 1fr)`;
    }
}

function changeCellColor() {
    const colorButton = document.querySelector('#color-button');
    let cellColor = colorButton.value;
    colorButton.addEventListener('input', () => {
        cellColor = colorButton.value;
    });

    let mouseDown = false;
    let hoverState = true;
    const cells = document.querySelectorAll('.cell');

    cells.forEach(cells => {
        cells.addEventListener('mousedown', () => {
            cells.style.backgroundColor = cellColor;
            mouseDown = true;
        });

        cells.addEventListener('mousemove', () => {
            if (mouseDown === true) {
                cells.style.backgroundColor = cellColor;
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
    clear.addEventListener('click', () => {
        allDivs.forEach(allDivs => {
            allDivs.style.backgroundColor = '';
        });
    });
}

resetGrid();
changeGridText();
createGrid();
changeCellColor();
clearGrid();
