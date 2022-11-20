"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = window.innerWidth;
let height = window.innerHeight;

draw();
drawBubbles();

function draw() {
    context.fillRect(0, 0, width, height);
    drawBubbles();
}

function drawBubbles() {
    for (let i = 0; i < 100; i++) {
        let x = Utils.randomNumber(200, width - 200);
        let y = Utils.randomNumber(200, height - 200);
        let size = Utils.randomNumber(10, 100);
        context.fillStyle = Utils.hsla(Utils.randomNumber(0, 100), 75, 50, 50);
        Utils.fillCircle(x, y, size);
    }
}


function drawBubbles() {

    let BubblesAmount = 200;

    context.fillRect(0, 0, width, height);

    context.fillStyle = 'white';

    for (let i = 0; i < BubblesAmount; i++) {
        let randomX = margin + Math.random() * width - margin * 2;
        let randomY = margin + Math.random() * height - margin * 2;
        let randomHue = Math.random() * 180;
        let randomSize = 10 + Math.random() * 40;
        context.fillStyle = Utils.hsla(Utils.randomNumber(0, 100), 75, 50, 50);
        Utils.fillCircle(x, y, size);
    }
}