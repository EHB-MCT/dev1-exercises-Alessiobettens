"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawCross();
}

function drawCross() {
    let i = 0;
    let step = 150;
    let offset = 25;
    while (i < 5) {
        Utils.drawLines(50, step + (offset * i), 350, step + (offset * i));
        Utils.drawLines(step + (offset * i), 50, step + (offset * i), 350);
        i++;
    }
}