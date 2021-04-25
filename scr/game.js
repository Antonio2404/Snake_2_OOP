import Canvas from "./canvas.js";
// import Config from "./config.js";
import gameLoop from "./gameLoop.js";
import Food from "./food.js";
import Score from "./score.js";
import Snake from "./snake.js";

class Game {

    constructor(container){
        
        this.canvas = new Canvas(container);
        this.snake = new Snake();
        this.food = new Food( this.canvas);
        this.score = new Score (".game_score .score_count", 0)
        new gameLoop (this.update.bind(this), this.draw.bind(this));

    }

    update(){
        this.snake.update(this.food, this.score, this.canvas);

    }

    draw(){

        this.canvas.context.clearRect(0, 0, this.canvas.elemetn.width, this.canvas.elemetn.height);

        this.snake.draw(this.canvas.context);
        this.food.draw(this.canvas.context);

    }

}

new Game (document.querySelector(".canwas-warapper"));