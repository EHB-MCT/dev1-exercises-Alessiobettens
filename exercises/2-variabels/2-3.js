"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');


drawRectangle();



function drawRectangle() {

    context.beginPath();
    context.rect(0, 0, width, height);
    context.stroke();
};