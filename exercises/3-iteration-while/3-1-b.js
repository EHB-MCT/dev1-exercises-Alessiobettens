"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawGrid();
}


function drawGrid() {
    let i = 0;
    let step = 50;
    let offset = 75;
    while (i < 6) {
        Utils.drawLines(offset, offset + (step * i), 325, offset + (step * i));
        Utils.drawLines(75 + (step * i), 75, 75 + (step * i), 325);
        i++;
    }
}