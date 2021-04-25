export default class Canvas{

    constructor(container){

        this.elemetn = document.createElement("canvas");
        this.context = this.elemetn.getContext("2d");

        this.elemetn.width = 608;
        this.elemetn.height = 608;

        container.appendChild(this.element);
    }

}