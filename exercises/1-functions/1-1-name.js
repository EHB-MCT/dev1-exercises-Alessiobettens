"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawName();

function drawName() {

    //L
    context.lineWidth = 10;
    context.strokeStyle = "red";
    context.beginPath();
    context.moveTo(100, 50);
    context.lineTo(100, 250);
    context.lineTo(200, 250);
    context.stroke();


    //U
    context.lineWidth = 10;
    context.strokeStyle = "blue";
    context.beginPath();
    context.moveTo(250, 100);
    context.lineTo(250, 250);
    context.lineTo(350, 250);
    context.moveTo(350, 100);
    context.lineTo(350, 270);
    context.stroke();


    //C
    context.lineWidth = 10;
    context.strokeStyle = "green";
    context.beginPath();
    context.moveTo(500, 100);
    context.lineTo(400, 100);
    context.lineTo(400, 250);
    context.lineTo(500, 250);
    context.stroke();


    //A
    context.lineWidth = 10;
    context.strokeStyle = "black";
    context.beginPath();
    context.moveTo(510, 350);
    context.lineTo(600, 50);
    context.lineTo(650, 250);
    context.moveTo(625, 150);
    context.lineTo(530, 280);
    context.lineTo(100, 280);
    context.stroke();

}