"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;


drawRec();
drawLine();

//Dit is gewoon een achter grond
function drawRec() {
    context.fillStyle = "black";
    context.beginPath();
    context.fillRect(0, 0, width, height);
}



//De variabele "r" is voor een ramdon waarde tussen 0 en 1
//De variabele "i" is voor de X ass
//De variabele "j" is voor de Y ass
//En de 'strokeStyle' is voor de random color met 'hsl' het kan ook met 'rgb'
//Als ik de stroke niet bij 'else' als bij de 'if' zet dan krijg ik zwarte lijnen links boven op mijn canvas
function drawLine() {
    context.lineWidth = "5";

    for (let j = 0; j < 80; j++) {
        for (let i = 0; i < 200; i++) {

            let r = Math.round(Math.random());

            if (r == 0) {
                context.strokeStyle = Utils.hsl(Utils.randomNumber(0, 250), 94, 50);

                Utils.drawLine(0 + i * 10, 0 + j * 10, 10 + i * 10, 10 + j * 10);
                context.stroke();
            } else {
                context.strokeStyle = Utils.hsl(Utils.randomNumber(0, 360), 94, 50);

                Utils.drawLine(0 + i * 10, 10 + j * 10, 10 + i * 10, 0 + j * 10);
            }
        }
    }
}