const board = document.getElementById("game-board");

const boardHeight = board.clientHeight;
const boardWidht = board.clientWidth;
const obstaclesSize = 60;
const playerSize = 75;
let timer = 0;
const resultDisplay=document.querySelector('.results')

class Game {
  constructor() {
    this.player = null;
    this.obstacles = [];
  }


  checkObstaclesOut(rock){
  if (rock.positionX === 0){
        console.log(rock);
        this.obstacles.shift(rock);
        rock.element.remove();
  }
}


  start() {
    console.log("Play");
    this.player = new Player();
    document.addEventListener("keydown", (e) => {
      this.player.move(e.key);
    });
    this.startObstacle();
  }


  startObstacle() {
    setInterval(() => {
      for (let i = 0; i < this.obstacles.length; i++) {
        this.obstacles[i].move();
        this.obstacles[i].collision();
        this.checkObstaclesOut(this.obstacles[i]);
      }
    }, 200);


    setInterval(() => {
      let randomX = 840;
      let randomY = Math.floor(Math.random() * (boardHeight - obstaclesSize));
      let newObstacle = new Obstacles(randomX, randomY);
      this.obstacles.push(newObstacle);
      console.log(this.obstacles.length);
    }, 2000);
  }
}


class Player {
  constructor() {
    this.width = `${playerSize}px`;
    this.height = `${playerSize}px`;
    this.color = "none";
    this.positionX = 10;
    this.positionY = 250;
    this.element = null;
    this.createPlayer();
  }


  createPlayer() {
    this.element = document.createElement("div");
    this.element.className = "player";
    this.element.style.backgroundColor = this.color;
    this.element.style.width = this.width;
    this.element.style.height = this.height;
    this.element.style.left = this.positionX + "px";
    this.element.style.bottom = this.positionY + "px";
    board.appendChild(this.element);
  }


  move(key) {
    switch (key) {
      case "ArrowUp":
        this.moveUp();
        console.log("UUUp");
        break;
      case "ArrowDown":
        this.moveDown();
        console.log("DOOOwn");
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
      this.positionY += 5;
      this.element.style.top = this.positionY + "px";
    }
  }
}


class Obstacles {
  constructor(positionX, positionY) {
    this.width = `${obstaclesSize}px`;
    this.height = `${obstaclesSize}px`;
    this.color = "none";
    this.positionX = positionX;
    this.positionY = positionY;
    this.element = null;
    this.createObstacles();
  }


  createObstacles() {
    this.element = document.createElement("div");
    this.element.className = "obstacles";
    this.element.style.backgroundColor = this.color;
    this.element.style.width = this.width;
    this.element.style.height = this.height;
    this.element.style.left = this.positionX + "px";
    this.element.style.top = this.positionY + "px";
    board.appendChild(this.element);
  }


  move() {
    this.positionX -= 20;
    this.element.style.left = this.positionX + "px";
}


  collision() {
    const posStartY = myGame.player.positionY - playerSize 
    const posEndY = myGame.player.positionY + playerSize 
    if (
      this.positionX > 0 &&
      this.positionX < 100 &&
      posStartY < this.positionY &&
      this.positionY < posEndY
    ) {
      return gameOver();
    }
  }
}


function gameOver() {
    const gameOverPage = document.getElementById('game-over-screen');
    gameOverPage.style.display = 'block';
    document.addEventListener('click',function(){
        location.reload()

    }) 
}


const myGame = new Game();
myGame.start();