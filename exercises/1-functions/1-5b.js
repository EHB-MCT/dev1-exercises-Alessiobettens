"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";


orangrectangle();
yellowellipse();
bluerectangle();


function orangrectangle() {

    context.fillStyle = "orange";
    context.beginPath();
    context.rect(50, 50, 300, 200);
    context.fill();
}

function yellowellipse() {

    context.fillStyle = "yellow";
    context.beginPath();
    Utils.fillEllipse(200, 250, 100, 50);
    context.fill();
}

function bluerectangle() {

    context.fillStyle = "blue";
    context.beginPath();
    context.rect(50, 250, 300, 150);
    context.fill();
}