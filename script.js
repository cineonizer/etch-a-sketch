const mainContainer = document.querySelector('.main-container');

function resetGrid() {
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
    }
}

function playMusic() {
    const audio = document.querySelector('#bobross');
    const bobButton = document.querySelector('#bob-button');
    bobButton.addEventListener('click', () => {
        audio.currentTime = 0;
        audio.volume = 0.25;
        audio.play();
    });
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
}

function createGrid() {
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
    let pickedColor = colorButton.value;
    let isColorPicked = true;
    let isRandomPicked = false;

    colorButton.addEventListener('input', () => {
        isColorPicked = true;
        isRandomPicked = false;
        pickedColor = colorButton.value;
    });

    let randomColor = '#';
    const randomButton = document.querySelector('#random-button');
    randomButton.addEventListener('click', () => {
        isColorPicked = false;
        isRandomPicked = true;        
    });

    let mouseDown = false;
    const cells = document.querySelectorAll('.cell');

    cells.forEach(cells => {
        cells.addEventListener('mouseenter', () => {
            if (isRandomPicked) {
                randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
            }
        });

        cells.addEventListener('mousedown', () => {
            if (isColorPicked) {
                cells.style.backgroundColor = pickedColor;
            }
            else if (isRandomPicked) {
                cells.style.backgroundColor = randomColor;
            }
            mouseDown = true;
        });

        cells.addEventListener('mousemove', () => {
            if (mouseDown === true) {
                if (isColorPicked) {
                    cells.style.backgroundColor = pickedColor;
                }
                else if (isRandomPicked) {
                    cells.style.backgroundColor = randomColor;
                }
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

playMusic();
resetGrid();
changeGridText();
createGrid();
changeCellColor();
clearGrid();
