"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawMaze();

function drawMaze() {

    context.lineWidth = 5;


    for (let i = 0; i < 5; i++) {
        let r = Math.round(Math.random());
        if (r == 0) {
            Utils.drawLine(0, 0, 10, 10);
        } else {
            Utils.drawLine(0, 10, 10, 0);
        }
    }

}