"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');


rectangle();

function rectangle() {

    //grote witte boven
    context.strokeStyle = "red";
    context.beginPath();
    context.rect(50, 50, 150, 150);
    context.stroke();

    //grote witte onder
    context.strokeStyle = "red";
    context.beginPath();
    context.rect(200, 200, 150, 150);
    context.stroke();

    //grote zwarte
    context.strokeStyle = "red";
    context.beginPath();
    context.fillRect(125, 125, 150, 150);
    context.strokeRect(125, 125, 150, 150);


    //kleine witte boven
    context.strokeStyle = "red";
    context.beginPath();
    context.rect(275, 75, 50, 50);
    context.stroke();

    //kleine witte onder
    context.strokeStyle = "red";
    context.beginPath();
    context.rect(75, 275, 50, 50);
    context.stroke();

    //kleine zwarte boven
    context.strokeStyle = "red";
    context.beginPath();
    context.fillRect(325, 50, 25, 25);
    context.stroke();

    //kleine zwarte onder
    context.strokeStyle = "red";
    context.beginPath();
    context.fillRect(50, 325, 25, 25);
    context.stroke();
}