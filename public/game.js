const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");
const highScoreDisplay = document.querySelector("#high-score");

let result = 0;
let hitPosition;
let currentTime = 25;
let timerId = null;

let highScore = localStorage.getItem("highScore") || 0;
highScoreDisplay.textContent = highScore;

function randomSquare() {
	squares.forEach((square) => {
		square.classList.remove("mole");
	});

	const randomSquare = squares[Math.floor(Math.random() * 9)];
	randomSquare.classList.add("mole");

	hitPosition = randomSquare.id;
}

squares.forEach((square) => {
	square.addEventListener("mousedown", () => {
		if (square.id === hitPosition) {
			result++;
			score.textContent = result;
			hitPosition = null;

			if (result > highScore) {
				highScore = result;
				// Save high score to local storage
				localStorage.setItem("highScore", highScore);
				highScoreDisplay.textContent = highScore;
			}
		}
	});
});

function moveMole() {
	timerId = setInterval(randomSquare, 620);
}

moveMole();

function countDown() {
	currentTime--;
	timeLeft.textContent = currentTime;

	if (currentTime === 0) {
		clearInterval(countDownTimerId);
		clearInterval(timerId);
		alert(`GAME OVER! Your final score is ${result}`);
	}
}

const countDownTimerId = setInterval(countDown, 1000);
