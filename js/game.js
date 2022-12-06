class Game {
    constructor() {
        this.player = null;
        this.obstacles= [];
    }

    start(){
        console.log('Play')
        this.player = new Player()
        document.addEventListener('keydown',(e) =>{
            this.player.move(e.key)
            })
            this.startObstacle()
    }

    startObstacle(){
        setInterval(() => {
            let newObstacle = new Obstacles()
            this.obstacles.push(newObstacle)
            this.obstacles[0].move()
      
        } , 2000)
            
        
        
    }
}


class Player {
    constructor(){
        this.width = "70px"
        this.height = "70px"
        this.color = "red"
        this.positionX = 10
        this.positionY = 250
        this.element = null
        this.createPlayer()
    }


    createPlayer(){
        const board = document.getElementById('game-board')
        this.element = document.createElement("div")
        this.element.className = "player"
        this.element.style.backgroundColor = this.color
        this.element.style.width = this.width
        this.element.style.height = this.height
        this.element.style.left = this.positionX + "px"
        this.element.style.bottom = this.positionY + "px"
        board.appendChild(this.element)
    }


    move(key){
        switch (key) {
            case 'ArrowUp':
                this.moveUp()
                console.log('UUUp')
                break;
            case 'ArrowDown':
               this.moveDown()
                console.log('DOOOwn')
                break;
            }
        }


    moveUp() {
        if (this.positionY > 5) {
            this.positionY -= 5;
            this.element.style.top = this.positionY + "px";
        }
    }
    moveDown() {
        if (this.positionY < 520) {
            this.positionY += 5
            this.element.style.top = this.positionY + "px";
        }
    }
}


class Obstacles {
    constructor() {
        this.width = "60px"
        this.height = "60px"
        this.color = "brown"
        this.positionX = 10
        this.positionY = 250
        this.element = null
        this.createObstacles()
    }


createObstacles() {
    const board = document.getElementById('game-board')
    this.element = document.createElement("div")
    this.element.className = ("obstacles")
    this.element.style.backgroundColor = this.color
    this.element.style.width = this.width
    this.element.style.height = this.height
    this.element.style.left = this.positionX + "px"
    this.element.style.top = this.positionY + "px"
    board.appendChild(this.element)
    }



    move() {
        this.positionX -= 20
        this.element.style.right = this.positionX + "px";
    }

    Collision() {
        this.obstacles = obstacles =obstacle.positionX < 100 && player.positionY === obstacle.positionY
            return gameOver()
            }
        }

// gameOver() {}

// restartBotton(){}

function changeTheme(){
    const bodyElement= document.querySelector('body');
    bodyElement.setAttribute('class', 'alternateBackground')
}
const myGame = new Game()
myGame.start()

// this.obstaclesPosition = [0, 100, 200]
    // this.element.positionY = obstaclesPosition[Math.floor(Math.random() * obstaclesPosition.length)]