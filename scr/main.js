let scoreBlock;
let score = 0;

let canvas = document.querySelector("#game_canvas");
let context = canvas.getContext("2d");
scoreBlock = document.querySelector(".game_score .score_count");
drawScore();

let foodImg = new Image();
foodImg.src = "https://raw.githubusercontent.com/Antonio2404/Snake/OOP/img/strawberry16x16.png";

// const config = {
// 	step: 0,
// 	maxStep: 7, // скорость игры
// 	sizeCell: 16, // размер ячейки
// 	sizeBerry: 16 // размер ячейки еды
// }

const snake = {
	x:272, // координата по х
	y: 272, // координата по у
	dx: 0, // скорость по горизонтали
	dy: 0, // скорость по вертикали
	tails: [],
	maxTails: 3
}

let berry = {
	x: undefined,
	y: undefined
} 

const dead = new Audio();
const eat = new Audio();
const control = new Audio();

dead.src = "song/dead.mp3"
eat.src = "song/eat.mp3"
control.src = "song/control.mp3"

requestAnimationFrame( gameLoop );

// function gameLoop() {

// 	// скорость отрисовки
// 	requestAnimationFrame( gameLoop );
// 		if ( ++config.step < config.maxStep) {
// 			return;
// 		}
// 		config.step = 0;
	
// 		// очистка canvas
// 		context.clearRect(0, 0, canvas.width, canvas.height);
		
// 		// отрисовка элементов
// 		drawBerry();
// 		drawSnake();

// }



function drawSnake() {
	snake.x += snake.dx;
	snake.y += snake.dy;

	crossingBorder()

	snake.tails.unshift( { x: snake.x, y: snake.y } );

	if ( snake.tails.length > snake.maxTails ) {
		snake.tails.pop();
	}

	snake.tails.forEach( function(el, index){
		if (index == 0) {
			context.fillStyle = "#000000";
		} else {
			context.fillStyle = "#575757";
		}
		context.fillRect( el.x, el.y, config.sizeCell, config.sizeCell );
		
		//сеъедание еды
		if ( el.x === berry.x && el.y === berry.y ) {
			snake.maxTails++;
			eat.play();
			incScore();
			randomPositionBerry();
		}

		// встреча головы и хвоста
		for( let i = index + 1; i < snake.tails.length; i++ ) {

			if ( el.x == snake.tails[i].x && el.y == snake.tails[i].y ) {
				refreshGame();
			}

		}

	} );
}

//выход за границу поля
function crossingBorder(){
    if (snake.x < 0 || snake.x > canvas.width || snake.y < 0 || snake.y > canvas.height) {
        dead.play();
		refreshGame();
    }
}

// перезапуск игры
function refreshGame() {
	score = 0;
	drawScore();

	snake.x = 272;
	snake.y = 272;
	snake.tails = [];
	snake.maxTails = 3;
	snake.dx = 0;
	snake.dy = -config.sizeCell;

	randomPositionBerry();
}

function reloadGameButton(){

}

//отрисовка еды
function drawBerry() {
	context.beginPath();
	context.fillStyle = "#A00034";
	context.drawImage(foodImg, berry.x + 2, berry.y + 2);
	//context.drawImage(foodImg, berry.x + (config.sizeCell / 2 ), berry.y + (config.sizeCell / 2));
	//context.arc( berry.x + (config.sizeCell / 2 ), berry.y + (config.sizeCell / 2 ), config.sizeBerry, 0, 2 * Math.PI );
	context.fill();
}

function randomPositionBerry() {
	berry.x = getRandomInt( 0, canvas.width / config.sizeCell ) * config.sizeCell;
	berry.y = getRandomInt( 0, canvas.height / config.sizeCell ) * config.sizeCell;
}

//встреча головы и хвоста
function eatTail(head, arrSnake) {
    for (let i = 0; i < arrSnake.length; i++) {
        if (head.x == arrSnake[i].x && head.y == arrSnake[i].y) {
            dead.play();
            clearInterval(game);
        }
    }
}

// отслеживание нажатий 
addEventListener("keydown", function (e) {

	if ( e.code == "ArrowUp" ) {
		snake.dy = -config.sizeCell;
		snake.dx = 0;
		control.play();
	} else if ( e.code == "ArrowLeft" ) {
		snake.dx = -config.sizeCell;
		snake.dy = 0;
		control.play();
	} else if ( e.code == "ArrowDown" ) {
		snake.dy = config.sizeCell;
		snake.dx = 0;
		control.play();
	} else if ( e.code == "ArrowRight" ) {
		snake.dx = config.sizeCell;
		snake.dy = 0;
		control.play();
	} 
});

// увеличение счета
function incScore() {
	score++;
	drawScore();
}

// отображение на странице счета
function drawScore() {
	scoreBlock.innerHTML = score;
}

//функция генерации случайных чисел
// function getRandomInt(min, max) {
// 	return Math.floor( Math.random() * (max - min) + min );
// }