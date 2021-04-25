import Config from "./config.js";

export default class gameLoop{
    constructor(update, draw){

        this.update = update;
        this.draw = draw;

        this.Config = new Config();

        this.animate = this.animate.bind(this);
        this.animate();
    }

    animate() {

            // скорость отрисовки
            requestAnimationFrame( this.animate );
                if ( ++this.config.step < this.config.maxStep) {
                    return;
                }
                this.config.step = 0;

                this.update();
                this.draw();
        
    }

}