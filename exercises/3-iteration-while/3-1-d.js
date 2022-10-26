"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawDiagonalLines();
}

function drawDiagonalLines() {
    let i = 0;
    let step = 25;
    let offset = 50;
    while (i <= 7) {
        Utils.drawLines(offset, offset + (step * i), 175, offset + (step * i));
        i++;
    }
}

/*offset, offset + (step * i), 325, offset + (step * i)*/