"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');


drawpyramide();

function drawpyramide() {
    drawRectangle(0, 700);
    drawRectangle(50, 600);
    drawRectangle(100, 500);
    drawRectangle(150, 400);
    drawRectangle(200, 300);
    drawRectangle(250, 200);
    drawRectangle(300, 100);
    drawRectangle(350, 0);
}

function drawRectangle(pos, size) {
    let red = Math.random() * 255;
    let green = Math.random() * 255;
    let blue = Math.random() * 255;

    context.fillStyle = "rgb(" + red + "," + green + "," + blue + ")";
    context.fillRect(100 + pos, 50 + pos, size, size);
}