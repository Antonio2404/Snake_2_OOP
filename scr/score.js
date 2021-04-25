export default class Score {
    constructor( scoreBlock, score = 0 ) {

        this.scoreBlock = document.querySelector( scoreBlock );
        this.score = score;

        this.draw();

    }
    // увеличение на 1
    incScore() {
        this.score++;
        this.draw();
    }
    //сброс на 0
    setToZero() {
        this.score = 0;
        this.draw();
    }
    // вывод на страницу
    draw() {
        this.scoreBlock.innerHTML = this.score;
    }
    
}