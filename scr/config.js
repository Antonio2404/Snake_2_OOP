export default class Config {
    constructor(){
        this.step = 0;
        this.maxStep = 7; // скорость игры
        this.sizeCell = 16; // размер ячейки
        this.sizeFood = this.sizeCell; // размер ячейки еды
    }
}