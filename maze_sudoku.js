(function () {
    const _0xa19c = ['Maze', 'Sudoku', 'Canvas', 'Timer'];
    const _0x4b56 = function (index) {
        return _0xa19c[index];
    };

    const _0x19f4 = _0x4b56(0) + _0x4b56(1);

    const container = document.getElementById('gameContainer');
    const canvas = document.createElement('canvas');
    canvas.id = 'mazeCanvas';
    canvas.width = 300;
    canvas.height = 300;

    container.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let elapsedTime = 0;

    const startGame = () => {
        setInterval(() => {
            elapsedTime++;
            console.log('Elapsed Time:', elapsedTime);
        }, 1000);
    };

    startGame();
})();
