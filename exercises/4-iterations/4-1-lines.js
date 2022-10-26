"use strict";

import context from "../../scripts/context.js";



let width = 600;
let height = 300;



let horizontal = 60;
let vertical = 30;



drawRectRed();
drawLine();
drawLineV();



function drawRectRed() {

    context.fillStyle = '#FF9300';
    context.beginPath();
    context.rect(0, 0, 600, 300);
    context.fill();
}

function drawLine() {

    let step = width / horizontal;



    for (let i = 0; i < 60; i++) {

        context.strokeStyle = "white";
        context.lineWidth = "2";
        context.beginPath();
        context.moveTo(0 + i * step, 0);
        context.lineTo(width - i * step, height);
        context.stroke();
    }

}

function drawLineV() {

    let step1 = height / vertical;

    for (let i = 0; i <= 30; i++) {

        context.beginPath();
        context.moveTo(0, 0 + i * step1);
        context.lineTo(width, height - i * step1);
        context.stroke();
    }

}