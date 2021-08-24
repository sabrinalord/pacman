const boardWidth = 28
const grid = document.querySelector('.grid')
const scoreDisplay = document.querySelector('.scoreDisplay')
const squares = []
const bonusDisplay = document.querySelector('.bonusDisplay')
let score = 0
const bonus10 = 10
const bonus100 = 100
const scoreText = document.getElementById('scoreText')
scoreDisplay.innerHTML = ` ${score}`




const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
]


// 0 - pacdots
// 1 - wall
// 2 - ghost lair
// 3 - powerpellets
// 4 - empty

// create board

function createBoard() {
	for (let i = 0; i < layout.length; i++ ) {
	
		const square = document.createElement("div");
		grid.appendChild(square);
		squares.push(square);
	

	
	if (layout[i] === 0 ) {
		squares[i].classList.add('pac-dot')
	} else if (layout[i] === 1 ) {
		squares[i].classList.add('wall')
	} else if (layout[i] === 2 ) {
		squares[i].classList.add('ghosthome')
	} else if (layout[i] === 3 ) {
		squares[i].classList.add('power-pellet')
	}

			}
} // end of createBoard function
createBoard() 

// starting position of pacman

let pacmanCurrentPosition = 500 
squares[pacmanCurrentPosition].classList.add('pacman') 


// prevent window from scrolling when user presses keys
window.addEventListener("keydown", function(e) {
  e.preventDefault();
    });

// moving the pac man
function move(e) {
	squares[pacmanCurrentPosition].classList.remove('pacman');

	switch(event.keyCode) {
		case 37: //left
		if ( 
		!squares[pacmanCurrentPosition - 1].classList.contains('wall') && 
		pacmanCurrentPosition % boardWidth !== 0 ) 
		pacmanCurrentPosition -= 1
		squares[pacmanCurrentPosition].classList.add('faceleft')

		if (pacmanCurrentPosition === 364 )
		{pacmanCurrentPosition = 391}	
		break

		case 38: //up
		if ( 
	    !squares[pacmanCurrentPosition - boardWidth].classList.contains('wall') && 
		pacmanCurrentPosition - boardWidth >= 0 ) 
		pacmanCurrentPosition -= boardWidth
		squares[pacmanCurrentPosition].classList.add('faceup')
		break
		
		case 39: //right
		if ( 
		!squares[pacmanCurrentPosition + 1].classList.contains('wall') && 
		pacmanCurrentPosition % boardWidth < 27 )
		pacmanCurrentPosition += 1
		squares[pacmanCurrentPosition].classList.remove('faceleft')
		squares[pacmanCurrentPosition].classList.remove('faceup')
		squares[pacmanCurrentPosition].classList.remove('facedown')

		if (pacmanCurrentPosition === 391 )
		{pacmanCurrentPosition = 364}

		break

		case 40: //down
		if ( 
		!squares[pacmanCurrentPosition + boardWidth].classList.contains('ghosthome') && 
		!squares[pacmanCurrentPosition + boardWidth].classList.contains('wall') && 
		pacmanCurrentPosition + boardWidth < boardWidth * boardWidth ) 
		pacmanCurrentPosition += boardWidth
		squares[pacmanCurrentPosition].classList.add('facedown')
		break
	}

	   squares[pacmanCurrentPosition].classList.add('pacman')
	   pacdotEaten()
	   powerPelletEaten()
	   checkForGameOver()
	  checkForWin() 
}

document.addEventListener('keyup', move)


/*when a pacdot is eaten, add to the score*/
function pacdotEaten() {
	if (squares[pacmanCurrentPosition].classList.contains('pac-dot')) {
		squares[pacmanCurrentPosition].classList.remove('pac-dot')
		score++
		scoreDisplay.innerHTML = ` ${score}`
	}
}

function powerPelletEaten() {
	if (squares[pacmanCurrentPosition].classList.contains('power-pellet')) {
		squares[pacmanCurrentPosition].classList.remove('power-pellet')
		score += 10
		scoreDisplay.innerHTML = ` ${score}`
// display then hide the bonus board	
		bonusDisplay.style.opacity = "1"
		bonusDisplay.innerHTML = ` +${bonus10}!`
		setTimeout(hideBonus, 1000) 
//scare then unscare the ghosts
		ghosts.forEach(ghost => ghost.isScared = true)
		setTimeout(unScareGhosts, 10000) 
	}
}

function unScareGhosts() {			
   ghosts.forEach(ghost => ghost.isScared = false)
}

function hideBonus() {
 bonusDisplay.style.opacity = "0"
}


//constructing ghosts 
class Ghost {
    constructor(className, startIndex, speed) {
        this.className = className
        this.startIndex = startIndex
        this.speed = speed
        this.currentIndex = startIndex
        this.isScared = false
        this.timerId = NaN
		this.isFacingLeft = false
    }
}

const ghosts = [
    new Ghost('blinky', 348, 250),
    new Ghost('pinky', 376, 400),
    new Ghost('inky', 351, 300),
    new Ghost('clyde', 379, 500)
]

//draw my ghosts onto my grid
ghosts.forEach(ghost => {
	squares[ghost.currentIndex].classList.add(ghost.className)
	squares[ghost.currentIndex].classList.add('ghost')
})

//move the ghosts
ghosts.forEach(ghost => moveGhost(ghost))

function moveGhost(ghost) {
    const directions = [-1, +1, -boardWidth, +boardWidth, -boardWidth, -boardWidth]
    let direction = directions[Math.floor(Math.random() * directions.length)]

    
	ghost.timerId = setInterval(function() {
	//all our code
		if (
		!squares[ghost.currentIndex + direction].classList.contains('ghost') &&
		!squares[ghost.currentIndex + direction].classList.contains('wall') 
		) {
		//remove all the ghosts and scared ghosts
		squares[ghost.currentIndex].classList.remove(ghost.className)
		squares[ghost.currentIndex].classList.remove('ghost', 'scared')
		//add direction to current Index
		ghost.currentIndex += direction

		if (direction === -1) {
		squares[ghost.currentIndex].classList.add('ghost')
		squares[ghost.currentIndex].classList.add('faceleft')
		}

		//add ghost class
		squares[ghost.currentIndex].classList.add(ghost.className)
		squares[ghost.currentIndex].classList.add('ghost')
		} else direction = directions[Math.floor(Math.random() * directions.length)]

		// make ghosts scared
		if (ghost.isScared) {
		squares[ghost.currentIndex].classList.add('scared')
		}
		
		if (ghost.isScared && squares[ghost.currentIndex].classList.contains('pacman')) {
		squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared')
		
	    ghost.currentIndex = ghost.startIndex
	    score += 100
	    squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')

		// display then hide the bonus board
		bonusDisplay.style.opacity = "1"
		bonusDisplay.innerHTML = ` ++${bonus100}!`
		setTimeout(hideBonus, 1000) 
		scoreDisplay.innerHTML = ` ${score}`
		}

 
	}, ghost.speed )

}

//check for game over
function checkForGameOver() {
    //if the square pacman is in contains a ghost AND the square does NOT contain a scared ghost 
    if (
        squares[pacmanCurrentPosition].classList.contains('ghost') && 
        !squares[pacmanCurrentPosition].classList.contains('scared') 
     ) {
     //for each ghost - we need to stop it moving
    ghosts.forEach(ghost => clearInterval(ghost.timerId))
    //remove eventlistener from our control function
    document.removeEventListener('keyup', move)
    //tell user the game is over      
	scoreText.style.display = "none"
	 scoreDisplay.innerHTML = '😟😟 GAME OVER 😟😟'
     }

}


// check For Win 

function checkForWin() {
	if (score >= 100 ) {
	  //for each ghost - we need to stop it moving
    ghosts.forEach(ghost => clearInterval(ghost.timerId))
	    //remove eventlistener from our control function
    document.removeEventListener('keyup', move)
		scoreText.style.display = "none"
	 scoreDisplay.innerHTML = '🎉🥂 YOU WIN! 🎉🥂'
	}
}



